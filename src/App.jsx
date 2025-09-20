import React, { useState } from 'react'

function App() {
  const [data, setdata] = useState("")
  const handle=(item)=>{
  if(item==="AC"){
     setdata("");
  }
  else if(item=== "="){
   try {
     setdata(eval(data).toString())
   } catch  {
    setdata("Error")
   }
  }
  else{
    setdata(data+item)
  }
  }
  const button=[
    "(" ,")","%","AC",
    "7","8","9","/",
    "4","5","6","*",
    "1","2","3","-",
    "0",".","=","+"
  ]
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='grid grid-cols-4 gap-2 border-1 p-8 pt-10 mt-5 h-110 w-70'>
          <div className='col-span-4 border-2 border-black text-black text-right p-2 rounded mb-3 text-2xl'>
          {data || "0"}
        </div>
        {button.map((item,idx)=>{
          return  <button onClick={()=>handle(item)} className='border-2 px-4 py-3 transition duration-200 active:scale-75 rounded'>
            {item}
          </button>
          
        })}
      </div>
    </div>
  )
}

export default App