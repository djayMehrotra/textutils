import React, { useState } from 'react';


export default function TextForm(props) {
    const [text, setText] = useState(''); /* inside function */
    /* text = 'update text'; */ //wrong way
    /* setText( ); */
    
    const handleUpClick = () => {
        console.log('uper click button clicked');
        let newText = text.toUpperCase();
        setText(newText); // text+=text;
        props.showAlert('converted to uppercase', 'success');
    }
    
    const handleOnChange = (event) => {
        console.log('textarea on changed', + text);
        setText(event.target.value); // text+=text;
    }

    const handleCopyBoard = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value); // text+=text;
        document.getSelection().removeAllRanges();
        props.showAlert('copied to clipboard', 'success');
    }
    
    const handleExtraSpace = (event) => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('extra space removed', 'success');
    }

    return (
        <>
            <div className={`container`}>
                
                <div>
                    <h1>{props.heading}</h1>
                    <div className="mb-3">
                    <label htmlFor="myBox" className='form-label'>Example textarea</label>
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}
                        style={
                            {backgroundColor: props.mode === 'dark' ? '#0e0b1e' : 'white', 
                            color: props.mode === 'dark' ? 'white' : 'black'}
                        }>
                            </textarea>
                    {/* normal variable will not be updated here as by default react doesnt watch all variables */}
                    {/* listen event onchange event we will get */}
                    </div>
                    <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleUpClick}>Convert to uppercase</button>
                    <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleCopyBoard}>Copy to clipboard</button>
                    <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleExtraSpace}>Remove extra space</button>
                </div>
                <div className="my-3">
                </div>
                <h1>Your text summary</h1>
                <p>{text.split(" ").filter( element => element.length !==0 ).length} words and {text.length} characters</p>
                <p>{(text.split(" ").filter( element => element.length !==0 ).length)*0.08} minutes to read</p>
                <h2>Preview text</h2>
                <p>{text}</p>
            </div>
        </>
        
    )
}

/* challenge */
/* 
1 - clear text
2 - 
*/ 
