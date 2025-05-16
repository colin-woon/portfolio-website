import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { logo, background } from './assets';
import { Card } from './components'
import { reactLogo, viteLogo, bashLogo, cLogo, cppLogo, nextjsLogo, nodejsLogo, pythonLogo, tailwindLogo, typescriptLogo } from './assets'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="ml-6 mr-6 sm:max-w-6xl flex flex-col gap-12">
      <div className='mt-12 sm:ml-0 sm:mr-0 sm:mt-20'>
        <h1 className='font-bold'>Hi, I'm Colin 👋</h1>
        <h2 className='text-xl sm:text-2xl text-justify'>A Self-Taught Full Stack Developer Exploring DevOps & Cloud—Shaped by 42KL,</h2>
      </div>

      <div>
        <p className="text-xl font-bold sm:text-2xl mb-2" >About Me</p>
        <p className='text-justify'>My journey into software development didn’t follow a traditional path. I began in a conventional academic setting in Malaysia but quickly realized the disconnect between lecture-based learning and real-world tech. That realization led me to 42 Kuala Lumpur—a peer-driven, hands-on coding school that reignited my passion and transformed how I learn. Since then, I’ve immersed myself in full stack development, challenged myself with new languages like Go, and discovered a growing interest in DevOps and Cloud technologies. For me, tech isn’t just a skillset—it’s a mindset of lifelong learning and problem-solving.</p>
      </div>

      <div>
        <p className="text-xl font-bold sm:text-2xl mb-2" >Work Experience</p>
          <div className="grid grid-cols-[1fr_10fr_2fr] grid-rows-3 gap-2">
            <div className="border p-2">Item 1</div>
            <div className="border p-2">Item 2</div>
            <div className="border p-2">Item 3</div>
            <div className="border p-2">Item 4</div>
            <div className="border p-2">Item 5</div>
            <div className="border p-2">Item 6</div>
            <div className="border p-2">Item 7</div>
            <div className="border p-2">Item 8</div>
            <div className="border p-2">Item 9</div>
          </div>
      </div>

      <div>
        <p className="text-xl font-bold sm:text-2xl mb-2" >Education</p>
          <div className="grid grid-cols-[1fr_10fr_2fr] grid-rows-3 gap-2">
            <div className="border p-2">Item 1</div>
            <div className="border p-2">Item 2</div>
            <div className="border p-2">Item 3</div>
            <div className="border p-2">Item 4</div>
            <div className="border p-2">Item 5</div>
            <div className="border p-2">Item 6</div>
            <div className="border p-2">Item 7</div>
            <div className="border p-2">Item 8</div>
            <div className="border p-2">Item 9</div>
          </div>
      </div>

      <div>
        <p className="text-xl font-bold sm:text-2xl mb-2" >Skills</p>
        <div className='flex flex-auto justify-center gap-2'>
        {[bashLogo, cLogo, cppLogo, nextjsLogo, nodejsLogo, pythonLogo, tailwindLogo, typescriptLogo].map((logo, idx) => (
          <img key={idx} src={logo} alt="Skill logo" className="h-8 w-8" />
        ))}
        </div>
      </div>

      <div>
        <p className="text-xl font-bold sm:text-2xl mb-2" >Projects</p>
        <div className='flex flex-col sm:flex-row sm:flex-wrap gap-4'>
        <Card title='Minishell' description='lorem ipsum dolor' link='https://github.com/colin-woon/4.1_minishell'/>
        <Card title='Minishell' description='lorem ipsum dolor' link='https://github.com/colin-woon/4.1_minishell'/>
        <Card title='Minishell' description='lorem ipsum dolor' link='https://github.com/colin-woon/4.1_minishell'/>
        </div>
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
