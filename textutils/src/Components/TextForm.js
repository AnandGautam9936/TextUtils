import React,{useState} from "react";


export default function TextForm(props) {
  const handleUpClick= ()=>{
    setText(text.toUpperCase());
    props.showAlert("Converted to UpperCase","success");
  }
  const handleLowerClick=()=>{
    setText(text.toLowerCase());
    props.showAlert("Converted to LowerCase","success");
  }
  const handleFirstLetter=()=>{
    let FirstLetter=text.toLowerCase().replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    setText(FirstLetter);
    props.showAlert("Converted First Letter to Capital","success");
  }
  const handleExtraSpace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces","success");
  }
  const handleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied","success");
  }
  const handleClear=()=>{
    setText('');
    props.showAlert("Text Cleared","success");
  }
  const handleOnChange= (event)=>{ //since we have used value = {text} so we get a variable event
    setText(event.target.value);  //event.target.value is used so that we can change or add new things in our Enter text here form
  }
  const[text,setText]=useState("Enter Text Here"); //We can also write enter text here in place of the balsnk string
  return (
    <>
    <div className="container my-5" style={{color: props.mode==="light"?"black":"white"}}>
        <div className="container">
            <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea value={text} onChange={handleOnChange} //handleOnChange is used so that it will listen to the change
            className="form-control"
            style={{backgroundColor: props.mode==="light"?"white":"#091a3b",color:props.mode==="light"?"black":"white"}}
            id="myBox"
            rows="8"
            ></textarea>
        </div>
        <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert To LowerCase</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleFirstLetter}>First Letter Capital</button>
        {/* <button type="button" className="btn btn-primary mx-2" >Bold Text</button> */}
        <button type="button" className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
        </div>
        <div className="container my-3">
            <h3>Your Text Summary</h3>
            <p>{text.charAt(text.length - 1)===" "?text.split(" ").length-1:text.split(" ").length} words and {text.length} character</p>
            <p>{0.008 * (text.split(" ").length)} minutes or {0.008 * (text.split(" ").length) *60} seconds to read the word</p>
            <h4>Preview</h4>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
    </div>
    </>
  );
}
