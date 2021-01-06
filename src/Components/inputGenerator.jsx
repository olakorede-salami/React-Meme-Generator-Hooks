import React from 'react';

const InputGenerator = ({handleMeme, setTextOne, textOne, textTwo, setTextTwo}) => {

    const handleOne = e => {
        setTextOne(e.target.value)
        console.log(textOne)
    }
    
    const handleTwo = e => {
        setTextTwo(e.target.value)
        console.log(textTwo)
    }

    return ( <div>
        <input type="text" onChange={handleOne}/>
      <input type="text" onChange={handleTwo}/>
      <button className="gen-btn" onClick={handleMeme}>Generate</button>
    </div> );
}
 
export default InputGenerator;