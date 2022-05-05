import React, {useState} from "react"

export default function TextForm(prop) {
    const handleUpClick = () =>{
        // console.log("Upper case was clicked" +  text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowerClick = () =>{
        // console.log("Lower case was clicked" +  text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange= (event) =>{
        console.log("On Change");
        setText(event.target.value);
    }

    const handleClear = () =>{
        let newText = '';
        setText(newText);
    }
    const [text, setText] = useState('Enter text here');  

  return (
    <>
    <div className="container">
      <div className="mb-3">
        <h2>{prop.heading}</h2>
        <textarea className="form-control" value= {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Upper Case</button>
      <button className="btn btn-dark mx-2" onClick={handleLowerClick}>Convert To Lower Case</button>
      <button className="btn btn-dark  mx-2" onClick={handleClear}>CLear Text</button>
      </div>
    <div className="container my-3" >
        <h2>Text Summary</h2>
        <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
        <p><b>{0.008 * text.split(" ").length }</b> Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    
    </>
  );
}
