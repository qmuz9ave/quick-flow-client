import React, { useEffect, useState } from 'react'
import SecondaryLayout from '../../layout/SecondaryLayout'
import { Link } from 'react-router-dom'
import {questions} from '../../constants/Questions/Questions'
import Upvotes from '../../components/question/Upvotes'
import Title from '../../components/question/Title'
import Answer from '../../components/question/Answer'
import Description from '../../components/question/Description'
import Tags from '../../components/question/Tags'

export default function Question() {
    let [ques,setQuestions] = useState(null)
    useEffect(()=>{
        setQuestions(questions)
        console.log(questions)
    })
    return (
        <>
            <SecondaryLayout>
            <div className='ms-auto px-3 py-4 content border'>
                <div>
                    All Questions
                </div>
                {ques ? 
                ques.map(question=>(
                    <div className='row mt-3' key={question.id}>
                        <Upvotes upvotes={question.upvotes} />
                        <Title title={question.Title} />
                        <Answer ans={question.answers.length} />
                        <Description Description={question.Description} />
                        <Tags tags={question.tags} />
                    </div>
                ))
                :
                <p>Loading</p>
                }                
            </div>
            </SecondaryLayout>
        </>
    )
}
