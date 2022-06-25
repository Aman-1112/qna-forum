import React,{useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function AboutYou(props) {
  
  const [about, setAbout] = useState({
    author:"",
    profession:""
  })
  
  useEffect(() => {
    props.handleAbout(about)
    //eslint-disable-next-line
  }, [about])

  const handleChange = (e)=>{
      setAbout({...about,[e.target.id]:e.target.value})
      // props.handleAbout(about);
  }
  return (
    <div>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <i className="fa-solid fa-circle-user fa-2x" style={{ marginRight: "1rem" }}></i>
        <TextField id="author" placeholder="Your Name" variant="standard" margin='normal' value={about.author} onChange={handleChange}/>
      </Box>
      <Box>
        <span style={{ marginRight: "3rem" }} ></span>
        <TextField id="profession" placeholder="Profession" variant='standard' value={about.profession} onChange={handleChange}></TextField>
      </Box>
    </div>
  )
}

export default AboutYou