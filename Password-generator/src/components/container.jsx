import React, { useCallback, useState , useEffect} from 'react'


const container = () => {
  const [password,setPassword] = useState("")
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)

  const passwordgenerator = useCallback(()=> {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"
    for (let i=0;i<length;i++) {
      pass += str[Math.floor(Math.random() * str.length)]
      }
      setPassword(pass)

  },[length, setPassword, numAllowed,charAllowed])


  useEffect(() => {
    passwordgenerator()
  }, [length, numAllowed, charAllowed, passwordgenerator])

  return (
    <div  className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-blue-700">
       <h1 className='text-white text-center my-4 text-3xl'>Password generator</h1>
       <div className="flex shadow rounded-lg overflow-hidden mb-4">
       <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
        />
         <button
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>  
      </div>
      <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label className='text-white'>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked = {numAllowed}
          id="numberInput"
          onChange={()=> {
            setNumAllowed((prev) => !prev);
          }}
      />
      <label className='text-white'>Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked = {charAllowed}
              id="characterInput"
              onChange={()=> {
                setCharAllowed((prev) => !prev);
                }}
              
          />
          <label className='text-white'>Characters</label>
      </div>
    </div>
      
    </div>
  )
}

export default container