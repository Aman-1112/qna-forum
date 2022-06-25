import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import AskedBy from './AskedBy';
import AboutYou from './AboutYou';

function Question() {
  const { id } = useParams();// NEW WAY TO GET URL PARAMETER IN R.R.DOM

  const [question, setQuestion] = useState({})
  // const [bool, setBool] = useState(false)
  const [render, setRender] = useState(1);//JUST TO RE-RUN THE USEeFFECT AGAIN
  const [data, setData] = useState({
    answer: "",
    author: "",
    profession: ""
  })
  useEffect(() => {
    (async () => {
      const res = await axios.get(`/api/v1/question/${id}`)
      setQuestion(res.data);
      // setBool(true);
    })()
    //eslint-disable-next-line
  }, [render])

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value })
  }

  const handleAbout = (x) => {
    setData({ ...data, ...x })
  }

  const handleClick = async (e) => {
    e.preventDefault();
    await axios.post(`/api/v1/addanswer/question/${id}`, data)
    alert('Your Answer successfully submitted')
    setData({
      answer: "",
      author: "",
      profession: ""
    })
    setRender(render+1);
  }

  if (Object.keys(question).length === 0) {
    return (<h1>Loading</h1>)
  } else {
    return (
      <div>
        {/* <Box
          sx={{ textAlign: "center" }}
        >
          <TextField
            sx={{ width: "80%" }}
            id="filled-multiline-flexible"
            label="Question Title"
            multiline
            maxRows={4}
            value={question.questionTitle}
            variant="filled"
            margin='normal'
            focused={bool}
            autoFocus={bool}
            disabled={true}
          />
        </Box>
        <Box
          sx={{ textAlign: "center" }}
        >
          <TextField
            sx={{ width: "80%"}}
            id="outlined-multiline-static"
            label="Question Body"
            multiline
            rows={4}
            value={question.questionBody}
            margin="normal"
            focused={bool}
            disabled={true}
          />
        </Box> */}
        <Box
        >
          <div className="w-75 m-auto">
            <p>Question Title</p>
            <h4>{question.questionTitle}</h4>
            <p>Question Body</p>
            <h5>{question.questionBody}</h5>
            <AskedBy
              at={question.askedAt}
              author={question.author}
            />
          </div>
        </Box>
        <h2>Answers</h2>
        <div className='m-auto mt-5'>
          <ul style={{ width: "80%" }} className=" m-auto">
            {question.answers.map((item)=>
              <li className="list-group-item">
                <h4>{item.answer}</h4>
                <AskedBy
                  at={item.answeredAt}
                  author={item.author}
                />
              </li>
            )}
          </ul>
          <Box
            sx={{ textAlign: "center" }}
          >
            <TextField
              sx={{ width: "75%" }}
              id="answer"
              label="Answer Body"
              multiline
              rows={4}
              margin="normal"
              value={data.answer}
              onChange={handleChange}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              mr: "20%"
            }}
          >
            <AboutYou
              handleAbout={handleAbout}
            />
            <div>
              <Button sx={{ mt: 3 }} variant="contained" onClick={handleClick}>Post Your Answer</Button>
            </div>
          </Box>
        </div>
      </div>
    )
  }

}

export default Question