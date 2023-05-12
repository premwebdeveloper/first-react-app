import React, {useState} from 'react'

export default function TextForm(props) {

    // Convert to upper case
    const handleUpClick = ()=>{
        console.log('Uppercase was clicked' + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.ShowAlertMessage('Text converted to uppercase', 'primary')
    }

    // Convert to lower case
    const handleLoClick = ()=>{
        console.log('Uppercase was clicked' + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.ShowAlertMessage('Text converted to lowercase', 'success')
    }

    // Allow to write any text in box
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    // Copy Text
    const handleCopy = ()=>{
        let text = document.getElementById('myBox');
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.ShowAlertMessage('Copy to clipboard', 'danger')
    }

    // Remove extra spaces
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.ShowAlertMessage('Removed extra spaces', 'success')
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">Skills:</label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="5"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-5" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>Your text summary : </h1>
                <p>{text.split(' ').length} words and {text.length} characters</p>
            </div>
            <div className="container my-5" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>Preview : </h1>
                <p>{text.length>0?text:'Enter text in text box to preview it here'} </p>
            </div>

        </>
    )
}
