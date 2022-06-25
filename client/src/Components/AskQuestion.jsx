import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AboutYou from './AboutYou';
function AskQuestion() {
    let navigate=useNavigate();
    const [data, setData] = useState({
        questionTitle: "",
        questionBody: "",
        author: "",
        profession: ""
    })
    const handleChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value })
    }
    const handleAbout = (x) => {
        setData({ ...data, ...x })
    }
    const handleClick = async (e) => {
        e.preventDefault();
        await axios.post('/api/v1/ask/question', data);
        setData({
            questionTitle: "",
            questionBody: "",
            author: "",
            profession: ""
        })
        navigate(-1);
    }
    return (
        <div>
            <h2>Ask a Question</h2>
            <Box
                sx={{ textAlign: "center" }}
            >
                <TextField
                    sx={{ width: "80%" }}
                    id="questionTitle"
                    label="Question Title"
                    multiline
                    maxRows={4}
                    variant="filled"
                    margin='normal'
                    value={data.questionTitle}
                    onChange={handleChange}
                />
            </Box>
            <Box
                sx={{ textAlign: "center" }}
            >
                <TextField
                    sx={{ width: "80%" }}
                    id="questionBody"
                    label="Question Body"
                    multiline
                    rows={4}
                    margin="normal"
                    value={data.questionBody}
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
                    <Button sx={{ mt: 3 }} variant="contained" onClick={handleClick}>Post</Button>
                </div>
            </Box>
        </div>

    )
}

export default AskQuestion