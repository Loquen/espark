import React from 'react';

function PostVideoQuiz({questions, answers, handleChange, handleSubmit}) {

  return (
    <form onSubmit={handleSubmit} className='quiz'>
      {questions.map((q, key) => (
        <div key={key} className='question'>
          <label>{questions[key]}</label>
          <div className='input'>
            <textarea 
              onChange={(e) => handleChange(e, key)}
              name={`question${key + 1}`}
              value={answers[key]}
            />
          </div>
        </div>
      ))}
      <button>Submit</button>
    </form>
  );
}

export default PostVideoQuiz;