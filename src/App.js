import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import PreVideoQuiz from './PreVideoQuiz';
import PostVideoQuiz from './PostVideoQuiz';
import PrefixSelector from './PrefixSelector';
import './App.css';

class App extends Component {

  state = {
    plays: 0,
    duration: 0,
    pauseTime: 0,
    timesPaused: [],
    showQuiz: false,
    showPrefixSelector: false,
    showPreVideoQuiz: true,
    preCheckboxes: [
      {
        isChecked: false,
        text: 'Prefixes come at the beginning of a word!'
      },
      {
        isChecked: false,
        text: 'Prefixes are a way of repairing things'
      },
      {
        isChecked: false,
        text: 'Prefixes originally came from Latin and Greek'
      }
    ],
    questions: [
      'What is a prefix?',
      'What language do prefixes typically come from?',
      'List some of your favorite words with prefixes?'
    ],
    postVideoAnswers: ['','',''],
    prefixWords: [
      {
        text: 'Test',
        color: 'aliceblue'
      }, 
      {
        text: 'Rework',
        color: 'aliceblue'
      }, 
      {
        text: 'Intersect',
        color: 'aliceblue'
      }, 
      {
        text: 'Language',
        color: 'aliceblue'
      }, 
      {
        text: 'Version',
        color: 'aliceblue'
      }, 
      {
        text: 'Autopilot',
        color: 'aliceblue'
      } 
    ],
    prefixSelectorAnswers: []
  }

  handlePause = () => {
    let newTimesPaused = this.state.timesPaused;
    newTimesPaused.push(this.state.pauseTime);
    this.setState({ timesPaused: newTimesPaused });
  }

  handlePlay = () => {
    if(this.state.pauseTime < 1){
      let plays = this.state.plays;
      this.setState({plays: plays + 1});
    }
  }

  handleProgress = state => {
    this.setState({pauseTime: state.playedSeconds})
  }

  // We can change which type of quiz is showing by setting 
  // the corresponding show state
  handleEnded = () => {
    this.setState({showQuiz: true});
  }

  handleDuration = (duration) => {
    this.setState({ duration })
  }

  handleSubmit = e => {
    console.log(this.state.postVideoAnswers);
    e.preventDefault();
  }

  handleChange = (e, idx) => {
    let newState = {...this.state};
    newState.postVideoAnswers[idx] = e.target.value;
    this.setState(newState)
    e.preventDefault();
  }

  handlePrefixClick = (e, idx) => {
    let newState = {...this.state};
    let color = newState.prefixWords[idx].color === 'aliceblue' ? '#7a7afa' : 'aliceblue';
    newState.prefixWords[idx].color = color;
    if(newState.prefixWords[idx].color !== 'aliceblue'){
      newState.prefixSelectorAnswers.push(this.state.prefixWords[idx].text);
    } else {
      let index = newState.prefixSelectorAnswers.indexOf(newState.prefixWords[idx].text);
      newState.prefixSelectorAnswers.splice(index, 1);
    }
    this.setState(newState);
    e.preventDefault();
  }

  handlePrefixSubmit = (e) => {
    console.log(this.state.prefixSelectorAnswers);
  }

  togglePreChange = (e, idx) => {
    let checkboxes = [...this.state.preCheckboxes];
    let checkbox = {...checkboxes[idx]};
    checkbox.isChecked = checkbox.isChecked ? false : true;
    checkboxes[idx] = checkbox;
    let newState = {...this.state}
    newState.preCheckboxes = checkboxes;
    this.setState(newState);
    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          eSpark take home challenge
        </header>
        <div className='main'>
          {
            this.state.showPreVideoQuiz 
            ? <PreVideoQuiz 
                preCheckboxes={this.state.preCheckboxes}
                toggleChange={this.togglePreChange}
              />
            : null
          }
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
                answers={this.state.postVideoAnswers}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
            : this.state.showPrefixSelector 
              ? <PrefixSelector 
                  prefixWords={this.state.prefixWords}
                  handlePrefixClick={this.handlePrefixClick}
                  handlePrefixSubmit={this.handlePrefixSubmit}
                />
              : null
          }
        </div>
      </div>
    );
  }
}

export default App;
