import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import PostVideoQuiz from './PostVideoQuiz';
import './App.css';

class App extends Component {

  state = {
    plays: 0,
    duration: 0,
    pauseTime: 0,
    timesPaused: [],
    showQuiz: true,
    questions: [
      'What is a prefix?',
      'What language do prefixes typically come from?',
      'List some of your favorite words with prefixes?'
    ],
    answers: ['','','']
  }

  handlePause = () => {
    let newTimesPaused = this.state.timesPaused;
    newTimesPaused.push(this.state.pauseTime);
    this.setState({ timesPaused: newTimesPaused });
  }

  // STILL NEED TO FIX so it updates every new play
  // We can change it to handlePlay and only increment when pauseTime < 1
  handlePlay = () => {
    if(this.state.pauseTime < 1){
      let plays = this.state.plays;
      this.setState({plays: plays + 1});
    }
  }

  handleProgress = state => {
    this.setState({pauseTime: state.playedSeconds})
  }

  handleEnded = () => {
    this.setState({showQuiz: true});
  }

  handleDuration = (duration) => {
    this.setState({ duration })
  }

  handleSubmit = e => {
    // console.log(e.target);
    e.preventDefault();
  }

  handleChange = (e, idx) => {
    let newState = {...this.state};

    console.log(idx);
    newState.answers[idx] = e.target.value;
    this.setState(newState)
    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          eSpark take home challenge
        </header>
        <div className='main'>
          <ReactPlayer 
            url='https://www.youtube.com/watch?v=mRdMYuNeAng' 
            controls={true}  
            onDuration={this.handleDuration}
            onPlay={this.handlePlay}
            onPause={this.handlePause}
            onProgress={this.handleProgress}
            onEnded={this.handleEnded}
          />
          {
            this.state.showQuiz 
            ? <PostVideoQuiz 
                questions={this.state.questions}
                answers={this.state.answers}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
            : null
          }
        </div>
      </div>
    );
  }
}

export default App;
