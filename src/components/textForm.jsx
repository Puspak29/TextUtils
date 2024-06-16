import React, { useState } from 'react'

function TextForm() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
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
    })
  }
  return (
    <div>
      <div className='d-flex flex-column my-4 align-items-center'>
        <label for="exampleFormControlTextarea1" className="form-label">Enter Your Text Here</label>
        <textarea className='w-75 form-control mb-3 border-primary'
          type="text"
          placeholder="Enter something"
          value={inputValue}
          onChange={handleChange}
          rows={15}
        />
        <div className='flex-wrap align-items-center w-70'>
          <button className='btn btn-primary me-2 mb-2' onClick={() => { formatText("upper") }}>Uppercase</button>
          <button className='btn btn-primary me-2 mb-2' onClick={() => { formatText("lower") }}>Lowercase</button>
          <button className='btn btn-primary me-2 mb-2' onClick={() => { formatText("clear") }}>Clear text</button>
          <button className='btn btn-primary me-2 mb-2' onClick={() => { formatText("exSpaces") }}>Remove Extra Spaces</button>
        </div>
      </div>

    </div>

  )
}

export default TextForm
