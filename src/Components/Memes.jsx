import React, { Component } from 'react';

const Memes = ({memes, exactMeme, textOne, textTwo,setInputText, inputText}) => {
    
    setInputText(textOne, textTwo)

    return ( 
    <div>
        <h1 className="top-input">{textOne}</h1>
        <h1 className="bottom-input">{textTwo}</h1>
        <img src={memes.memes[exactMeme].url} alt="" className="meme-img"/>
        {console.log(memes)}
        {console.log(exactMeme)}
    </div> );
}
 
export default Memes;