import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import AskQuestion from './Components/AskQuestion';
import Question from './Components/Question';
import QuestionList from './Components/QuestionList';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<QuestionList/>}></Route>
      <Route path='/ask/question' element={<AskQuestion/>}></Route>
      <Route path='/question/:id' element={<Question/>}></Route>
      <Route path='/search'></Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App;