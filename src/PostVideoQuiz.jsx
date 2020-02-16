import React, { Component } from 'react';

class PostVideoQuiz extends Component {

  render(){
    return (
      <form onSubmit={this.props.handleSubmit} className='quiz'>
        {this.props.questions.map((q, key) => (
          <div key={key} className='question'>
            <label>{this.props.questions[key]}</label>
            <div className='input'>
              <textarea 
                onChange={(e) => this.props.handleChange(e, key)}
                name={`question${key + 1}`}
                value={this.props.answers[key]}
              />
            </div>
          </div>
        ))}
        
        <button>Submit</button>
      </form>
    );
  }
}

export default PostVideoQuiz;