import React, { useState } from 'react'

function App() {
  const [data, setdata] = useState("")
  const button=[
    "(" ,")","%","AC",
    "7","8","9","/",
    "4","5","6","*",
    "1","2","3","-",
    "0",".","=","+"
  ]
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='grid grid-cols-4 gap-2'>
        {button.map((item,idx)=>{
          return <button className='border-2 px-3 py-2 transition duration-500 active:scale-75'>
            {item}
          </button>
        })}
      </div>
    </div>
  )
}

export default App