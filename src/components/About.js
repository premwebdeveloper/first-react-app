import React, {useState} from 'react'

export default function About() {

    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white',
        border: '5px solid red'
    })

    const [btnText, setBtnText] = useState('Enable Dark Mode'); 

    const handleChangeMode = ()=>{
        if(myStyle.color === 'black'){
            setMyStyle({
                color: 'white',
                backgroundColor : 'black',
                border: '5px solid green'
            })
            setBtnText('Enable Light Mode')
        }else{
            setMyStyle({
                color: 'black',
                backgroundColor : 'white',
                border: '5px solid red'
            })
            setBtnText('Enable Dark Mode')
        }
    }
    
    return (
        <div>
            <div className="container card my-5" style={myStyle}>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>

            <div className="container">
                <button onClick={handleChangeMode} type="button" className="btn btn-primary">{btnText}</button>
            </div>

        </div>
    )
}
