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
      <div className='grid grid-cols-4 gap-2 border-1 p-8 pt-10 mt-5 h-110 w-70 bg-emerald-700'>
          <div className='col-span-4 border-2 bg-amber-300 border-black text-black text-right p-2 rounded mb-3 text-2xl'>
          {data || "0"}
        </div>
        {button.map((item,idx)=>{
             const numbers = ["0","1","2","3","4","5","6","7","8","9",".","="];
               const isNumber = numbers.includes(item);
          return  <button onClick={()=>handle(item)} className={`border-2 px-4 py-3 transition duration-200 active:scale-75 rounded font-bold bg-zinc-700 ${isNumber? "bg-zinc-900" : "bg-zinc-600"}`}>
            {item}
          </button>
          
        })}
      </div>
    </div>
  )
}

export default App