import React, { useState, useRef } from 'react'
// import PropTypes from 'prop-types'



function TextForm(props) {
  const [inputValue, setInputValue] = useState('Enter Your Text');
  // const [copiedText, setCopiedText] = useState('');
  const copyRef = useRef(null)

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // const pasteFromClip = async () => {
  //   const text = await navigator.clipboard.readText()
  //   console.log(text);
  //   setCopiedText(text);
  // }


  const formatText = (type) => {
    setInputValue((prev) => {
      if (type === "lower")
        return prev.toLowerCase()
      else if (type === "upper")
        return prev.toUpperCase()
      else if (type === "clear")
        return ""
      else if (type === "exSpaces")
        return prev.trim().replace(/\s+/g, ' ')
      else if (type === "copy") {
        copyRef.current?.select()
        window.navigator.clipboard.writeText(inputValue)
      }
      else if (type === 'exLines') {
        return prev.replace(/^\s*\n/gm, "");
        // return prev + copiedText;
      }

    })
  }
  return (
    <div>
      <div className={`d-flex flex-column my-4 align-items-center`} style={{ color: props.text }}>
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Your Text Here</label>
        <textarea className={`w-75 form-control mb-3 border-primary`}
          type="text"
          // placeholder="Enter something"
          value={inputValue}
          onChange={handleChange}
          rows={15}
          style={{ backgroundColor: props.mode === 'light' ? 'black' : 'white', color: props.text }}
          ref={copyRef}
        />
        <div className='flex-wrap align-items-center w-70'>
          <button className='btn btn-primary me-2 mb-2' onClick={() => { formatText("upper") }}>Uppercase</button>
          <button className='btn btn-primary me-2 mb-2' onClick={() => { formatText("lower") }}>Lowercase</button>
          <button className='btn btn-primary me-2 mb-2' onClick={() => { formatText("clear") }}>Clear text</button>
          <button className='btn btn-primary me-2 mb-2' onClick={() => { formatText("copy") }}>Copy Text</button>
          <button className='btn btn-primary me-2 mb-2' onClick={() => { formatText("exLines") }}>Remove Blank Lines</button>
          <button className='btn btn-primary me-2 mb-2' onClick={() => { formatText("exSpaces") }}>Remove Extra Spaces</button>
        </div>
      </div>

    </div>

  )
}

export default TextForm
