import React from 'react';

function PrefixSelector({prefixWords, handlePrefixClick, handlePrefixSubmit}) {
  return (
    <div className='quiz'>
      <p>Select the words that are prefixes</p>
      <div>
        {prefixWords.map((word, key) => (
          <div 
            style={{backgroundColor: word.color}}
            className='selector' 
            key={key}
            onClick={(e) => handlePrefixClick(e, key)}
          >
            {word.text}
          </div>
        ))}
      </div>
      <button onClick={handlePrefixSubmit}>Submit</button>
    </div>
  );
}

export default PrefixSelector;