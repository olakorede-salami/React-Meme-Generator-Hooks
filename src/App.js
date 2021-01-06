import React, { useState, useEffect } from 'react';
import Memes from './Components/Memes'
import InputGenerator from './Components/inputGenerator'
import './Style/style.css'

function App() {

  const [memes, setMemes] = useState([])
  const [exactMeme, setExactMeme] = useState(0)
  const [textOne, setTextOne] = useState('')
  const [textTwo, setTextTwo] = useState('')
  const [inputText, setInputText] = useState('')

  useEffect(()=> {
    getMemesAPI()
  }, [])
  
  const getMemesAPI = async () => {
    const getMemes = await fetch('https://api.imgflip.com/get_memes');
    const data = await getMemes.json()
    const memesAquired = data.data

  
    setMemes(memesAquired)

    console.log(memesAquired.memes.length)
    console.log(memesAquired)
  }

  const handleMeme = () => {
    const lengthOfArray = memes.memes.length + 1

    const randomNumber = Math.floor(Math.random() * (lengthOfArray - 0) + 0)
    setExactMeme(randomNumber) 
  }


  return (
    <div className="main-div">
      <InputGenerator 
      handleMeme={handleMeme}
      textOne={textOne}
      textTwo={textTwo}
      setTextOne={setTextOne}
      setTextTwo={setTextTwo}
      />
      {/* <img src={memes.memes[exactMeme].url} /> */}
      <Memes 
      exactMeme={exactMeme}
      setExactMeme={setExactMeme}
      memes={memes}
      textOne={textOne}
      textTwo={textTwo}
      setInputText={setInputText}
      inputText={inputText}
      />
    </div>
  );
}

export default App;
