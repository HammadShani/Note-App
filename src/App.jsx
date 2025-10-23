import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Componenets/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  const [Title, setTitle] = useState('');

  const [details, setDetails] = useState('');

  const [Task, setTask] = useState([]);
  const submitHandler = (e) =>{
    e.preventDefault();
    const copyTask = [...Task];   

    copyTask.push({ Title, details});
    console.log(copyTask);
    setTask(copyTask);
    console.log(copyTask);
    setTitle('');
    setDetails('');
  }

  const noteDelete =(idx) =>{
    const copyTask = [...Task];
    copyTask.splice(idx,1);
    setTask(copyTask);
  }

  return (
    <div className='h-screen lg:flex bg-black text-white ' >
      <form onSubmit={(e) =>{
        submitHandler(e);
      }} className='flex gap-4 lg:w-1/2 p-10 items-start flex-col'>
      <h1 className='text-4xl font-bold'>Add Notes</h1>

      {/* First input */}
          <input type="text" placeholder='Enter Yours Notes'
        className='px-5 font-medium py-2 w-full outline-none border-2 rounded'
        value={Title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        />

        {/* Detailed input */}
        <textarea type="text" placeholder='Write Details here...'
        className='px-5 font-medium h-32 w-full outline-none py-2 border-2 rounded'
        value={details}
        onChange={(e) =>{
          setDetails(e.target.value);
        }}
        />
        <button className='bg-white active:scale-95 font-medium text-black px-5 w-full outline-none py-2 rounded'>Add Notes</button>
      </form>
      <div className=' lg:w-1/2 lg:border-l-2  p-10'>
      <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex gap-5 flex-wrap items-start justify-start mt-5 h-[90%] overflow-auto'>
          {Task.map(function(elem,idx){

            return <div key={idx} className='flex justify-between items-start flex-col relative h-52 w-40 bg-cover  bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf3bUzcfjXEgpNynCGXAL2naN49al7QDepIQ&s")] text-black py-9 pb-4 px-4 rounded-2xl '>
              <div>
              <h3 className='leading-tight text-lg font-bold'>{elem.Title}</h3>
              <p className='leading-tight text-xs font-semibold text-gray-600'>{elem.details}</p>
              </div>
              <button onClick={() => noteDelete(idx)} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
            </div>
          }
          )}
        </div>
      </div>
    </div>
  )
}

export default App
