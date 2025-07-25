import { useState, useCallback, useEffect, useRef} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")


  // useRef hook

  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed){
      str+= "0123456789"
    }
    if (charAllowed){
      str+="!@#$%^&*()_+-="
    }

    for(let i =1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length+1)
      pass += str.charAt(char)
    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, ])

  const copyPasswordToClipboard =useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() =>{
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>

     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 text-red-600 bg-slate-900 text-center'>
      <h3 className='mb-5'>Password Generator</h3>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" 
              value={password} 
              className='outline-none w-full py-1' 
              placeholder='password'
              readOnly 
              ref = {passwordRef}

         
         />
         <button 
         onClick={copyPasswordToClipboard}
         className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-orange-600'>
            Copy
         </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
            type = "range"
            min = {6}
            max = {100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length : {length} </label>
        </div>


        <div className='flex items-center gap-x-1'>
          <input 
            type = "checkbox"
            defaultChecked = {numberAllowed}
            id='numberInput'
            
            onChange={()=>{
              setNumberAllowed((prev)=> !prev)}}
          />
          <label htmlFor='numberInput'>Numbers </label>
        </div>

          <div className='flex items-center gap-x-1'>
          <input 
            type = "checkbox"
            defaultChecked = {charAllowed}
            id='charInput'
            
            onChange={()=>{
              setCharAllowed((prev)=> !prev)}}
          />
          <label htmlFor='charInput'>Character </label>
        </div>

      </div>
     </div>
    </>
  )
}

export default App
