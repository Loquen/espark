import React from 'react';
import ReactPlayer from 'react-player';
import PostVideoQuiz from './PostVideoQuiz';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        eSpark take home challenge
      </header>
      <div className='main'>
        <ReactPlayer 
          url='https://www.youtube.com/watch?v=mRdMYuNeAng' 
          controls={true}  
        />
        <PostVideoQuiz />
      </div>
    </div>
  );
}

export default App;
