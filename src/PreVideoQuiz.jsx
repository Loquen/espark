import React from 'react';

function PreVideoQuiz({preCheckboxes, toggleChange}){
  return (
    <div>
      <h3>Do you know what a prefix is already? Select the true statements:</h3>
      <form action="" className='pre-quiz'>
        {preCheckboxes.map((c, key) => (
          <label>
            <input type="checkbox"
              checked={c.isChecked}
              onChange={(e) => toggleChange(e, key)}
            />
            Prefixes come at the beginning of a word!
          </label>
        ))}
      </form>
    </div>
  );
}

export default PreVideoQuiz;