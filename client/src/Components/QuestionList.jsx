import React, { useState, useEffect } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import AskedBy from './AskedBy';
function QuestionList() {
  const [questionList, setQuestionList] = useState([])
  useEffect(() => {
    (async () => {
      const res = await axios.get('/api/v1/allquestions');
      console.log(res);
      setQuestionList(res.data)
    })()
  }, [])
  
  if(questionList.length===0){
    return <h1>Loading...</h1>;
  }else{
    return (
      <div >
        <Link to='/ask/question'><Button variant="contained">Ask a question</Button></Link>
        <ul className="w-75 m-auto">
          {questionList.map((question) => {
            return (
              <li className="list-group-item">
                <Link to={`/question/${question._id}`}><h4>{question.questionTitle}</h4></Link>
                {/* <p>Answer</p> */}
                <AskedBy
                  author={question.author}
                  at={question.askedAt}
                />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
  
}

export default QuestionList