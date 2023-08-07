import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    setText('');
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const getWordCount = (text) => {
    if (text.trim() === '') {
      return 0;
    }
    return text.trim().split(/\s+/).length;
  };

  const getCharacterCount = (text) => {
    return text.length;
  };

  const [text, setText] = useState('Enter the Text Here');

  return (
    <div>
      <h1 align="center">{props.heading}</h1>
      <div className="form-group">
        <textarea
          className="form-control"
          onChange={handleOnChange}
          id="myBox"
          value={text}
          rows="8"
        ></textarea><br></br>
      </div>
      <button className="btn btn-primary mr-2" onClick={handleUpClick}>
        Convert to Uppercase
      </button>&nbsp;&nbsp;&nbsp;&nbsp;
      <button className="btn btn-primary mr-2" onClick={handleLowClick}>
        Convert to Lowercase
      </button>&nbsp;&nbsp;&nbsp;&nbsp;
      <button className="btn btn-primary mr-2" onClick={handleClearClick}>
        Clear Text
      </button><br></br>
      <div><br></br>
        <h2>Text Summary:</h2>
        <p>
          Number of words: {getWordCount(text)} | Number of characters:{' '}
          {getCharacterCount(text)}
        </p>
        <h2>Preview:</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
