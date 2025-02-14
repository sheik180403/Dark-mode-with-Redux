import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { themeAction } from './features/theme'



function App() {
  
  const bg= useSelector(state=>state.theme.background)
  const text=useSelector(state=>state.theme.text)
  const dispatch=useDispatch()
  console.log(bg)

  const themeChange=()=>{
    dispatch(themeAction.switch_theme())
  }

  return (
    <>
    
     <div style={{backgroundColor:bg,color:text}} className='slow-change h-screen w-full flex flex-col justify-center items-center space-y-2'>
      <h1 className='text-3xl font-bold'>Hello Welcome</h1>
      <p className='text-xl '>For this Redux code: <a className='text-lg text-blue-800' href="">link</a> </p>
      <h1 className='mt-5'>Light/Dark Toggle Button</h1>

    <div>
       <input type="checkbox" class="checkbox" id="checkbox" onClick={themeChange}/>
       <label for="checkbox" class="checkbox-label" >
          <i class="fa fa-sun-o" ></i>
          <i class="fa fa-moon-o" ></i>
          <span class="ball"></span>
        </label>
    </div>
     </div>
    
    </>
  )
}

export default App
