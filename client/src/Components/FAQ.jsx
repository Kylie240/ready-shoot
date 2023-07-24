import { useState } from "react"
import questions from "../QuestionData"
import { SingleQuestion } from "./SingleQuestions"

export const FAQ = () => {
    const [questionData, setQuestionData] = useState(questions)

    return (
        <div className="relative p-8 lg:p-32 flex justify-center items-start">
            <div className="flex flex-col justify-start items-center gap-12">
                <div className="relative text-center flex flex-col items-center justify-center">
                    <p className="p-2 text-xl font-bold">FAQ</p>
                    <h5 className="p-2 text-5xl font-bold">Frequently Asked Questions</h5>
                    <p className="w-4/5 mt-4">Answers to common concerns and inquiries Frequently asked questions about the camera rental booking process: .</p>
                </div>

                <div className="shadow-xl lg:w-[800px] flex flex-col items-center justify-center gap-1">

                    {questionData.map((question) => (
                        <SingleQuestion key={question.id} title={question.title} info={question.info}/>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}