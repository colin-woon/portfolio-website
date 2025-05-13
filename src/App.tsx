import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import { logo, background } from './assets';
import { Hero } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="ml-6 mr-6 sm:max-w-6xl flex flex-col gap-12">
      <div className='mt-12 sm:ml-0 sm:mr-0 sm:mt-20'>
        <h1 className='font-bold'>Hi, I'm Colin 👋</h1>
        <h2 className='text-xl sm:text-2xl'>42KL Cadet that is aspiring to be a Software Engineer, currently learning lorem ipsum asdsa asd asdsad askdjjsd lkasjd asd</h2>
      </div>
      {/* <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
      </a> */}

      <div>
        <p className="text-xl font-bold sm:text-2xl" >About</p>
        <p>At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, I pursued a double degree in computer science and business, interned at big tech companies in Silicon Valley, and competed in over 21 hackathons for fun. I also had the pleasure of being a part of the first ever in-person cohort of buildspace called buildspace sf1.</p>
      </div>

      <div>
        <p className="text-xl font-bold sm:text-2xl" >Work Experience</p>
        <div className='flex flex-auto justify-between'>
          <p>hi</p>
          <p>hi</p>
          <p>hi</p>
        </div>
      </div>

      <div>
        <p className="text-xl font-bold sm:text-2xl" >Education</p>
        <div className='flex flex-auto justify-between'>
          <p>hi</p>
          <p>hi</p>
          <p>hi</p>
        </div>
      </div>

      <div>
        <p className="text-xl font-bold sm:text-2xl" >Skills</p>
        <div className='flex flex-auto justify-center gap-2'>
          <img src={reactLogo} alt="React logo" />
          <img src={viteLogo} alt="Vite logo" />
        </div>
      </div>

      <div>
        <p className="text-xl font-bold sm:text-2xl" >Projects</p>
      </div>

      <div>
        <p className="text-xl font-bold sm:text-2xl" >Hackathons</p>
      </div>  

      <div className="card">
        <button className="btn btn-primary" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
