const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const UserModel = require("./models/Users")
const InquiryModel = require("./models/Inquiries")

const app = new express()

app.use(express.json());
app.use(cors());

//user
app.post("/register", async (req,res) => {
    const {username, firstname, lastname, email, password} = req.body 
    const user = await UserModel.findOne({username})
    const userEmail = await UserModel.findOne({email})
    if(user) {
        return res.json({message: "User already exists"})
    }
    if(userEmail) {
        return res.json({message: "This email belongs to an account already"})
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({username, firstname, lastname, email, password:hashedPassword});
    await newUser.save()
    res.json({message: "User registered successfully!"})
})

app.post("/login", async (req,res) => {
    const {email, password} = req.body 
    try{
        const user = await UserModel.findOne({email})
        if (!user) {
            return res.json({message: "User does not exist"})
        }
        const checkPassword = await bcrypt.compare(password, user.password)
        if (!checkPassword){
            return res.json({message: "Email or password is incorrect"})
        }
        const token = jwt.sign({id: user._id}, "secret")
        res.json({token, userID: user._id, username: user.username})
    } catch {
        return res.json({message: "Error logging in. Please try again."})
    }
})

app.get("/saves/:userID", async (req,res) => {
    try{
        const user = await UserModel.findById(req.params.userID )
        res.json({saves: user.saves})
    } catch (error) {
        return res.json(error)
    }
})

app.put("/saves", async (req,res) => {
    try{
        const user = await UserModel.findById(req.body.userID)
        user.saves.push(req.body.cameraName)
        await user.save()
        res.json({saves : user.saves})
    } catch (error) {
        return res.json(error)
    }
})

app.put("/remove-save", async (req,res) => {
    try{
        const cameraName = req.body.cameraName
        const user = await UserModel.findById(req.body.userID)
        const newArr = user.saves.filter( function (item) {
            return item !== cameraName
        })
        user.saves = newArr
        await user.save()
        res.json({saves : user.saves})
    } catch (error) {
        return res.json(error)
    }
})

//inquiries
app.post("/form-submission", async (req,res) => {
    const inquiry = new InquiryModel(req.body.inquiry)
    try {
        if (req.body.userID) {
        const user = await UserModel.findById(req.body.userID)
        user.inquiries.push(inquiry)
        await user.save()
        }
        await inquiry.save()
        res.json({message: "success"})
    } catch (error) {
        return res.json(error)
    }
})

app.get("/inquiries/:userID", async (req,res) => {
    try{
        const user = await UserModel.findById(req.params.userID)
        res.json(user.inquiries)
    } catch (error) {
        return res.json(error)
    }
})

mongoose.connect("mongodb+srv://olivkylie:YHScZcW04vbkncXS@cluster.r702jxk.mongodb.net/Cluster?retryWrites=true&w=majority")

app.listen(3000, () => console.log("server started"))