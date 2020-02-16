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
    showQuiz: false
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
            ? <PostVideoQuiz />
            : null
          }
        </div>
      </div>
    );
  }
}

export default App;
