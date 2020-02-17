import React from 'react';

function PreVideoQuiz({preCheckboxes, toggleChange, handlePreVideoQuiz}){
  return (
    <div>
      <h3>Do you know what a prefix is already? Select the true statements:</h3>
      <div className='pre-quiz'>
        {preCheckboxes.map((c, key) => (
          <label>
            <input type="checkbox"
              checked={c.isChecked}
              onChange={(e) => toggleChange(e, key)}
            />
            {c.text}
          </label>
        ))}
        <button onClick={handlePreVideoQuiz} >Submit</button>
      </div>
    </div>
  );
}

export default PreVideoQuiz;