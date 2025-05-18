import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { logo, background } from './assets';
import { ProjectCard, HackathonCard, MenuDock } from './components'
import { reactLogo, viteLogo, bashLogo, cLogo, cppLogo, nextjsLogo, nodejsLogo, pythonLogo, tailwindLogo, typescriptLogo, logo42, apuLogo, kewdooLogo, newswavLogo, umhackWin, vhackWin, godamlahWin } from './assets'

function App() {
  return (
    <div className="ml-6 mr-6 sm:max-w-6xl flex flex-col gap-12 pb-20">
      <div className='mt-12 sm:ml-0 sm:mr-0 sm:mt-20'>
        <h1 className='font-bold'>Hi, I'm Colin 👋</h1>
        <h2 className='text-xl sm:text-2xl text-justify'>A Self-Taught Full Stack Developer Exploring DevOps & Cloud—Shaped by 42KL,</h2>
      </div>

      <div>
        <p className="section-title" >About Me</p>
        <p className='text-justify'>My journey into software development didn’t follow a traditional path. I began in a conventional academic setting in Malaysia but quickly realized the disconnect between lecture-based learning and real-world tech. That realization led me to 42 Kuala Lumpur—a peer-driven, hands-on coding school that reignited my passion and transformed how I learn. Since then, I’ve immersed myself in full stack development, challenged myself with new languages like Go, and discovered a growing interest in DevOps and Cloud technologies. For me, tech isn’t just a skillset—it’s a mindset of lifelong learning and problem-solving.</p>
      </div>

      <div>
        <p className="section-title" >Work Experience</p>
          <div className="grid grid-cols-[0.5fr_10.5fr] grid-rows-2">
            <div className="p-2 w-15 h-15 place-content-center sm:w-18 sm:h-18"><img src={newswavLogo}/></div>
            <div className="p-2 sm:flex sm:flex-row sm:justify-between">
              <div>
              <p className='font-bold'>
                Newswav Sdn Bhd - Tech Intern
              </p>
              <p>- exposure to Laravel, Vue JS, and MVC principles</p>
              </div>
              <p className='text-right'>
              Nov 2023 – Mar 2024
              </p>
            </div>
            <div className="p-2 sm:w-18 sm:h-18"><img src={kewdooLogo}/></div>
            <div className="p-2 sm:flex sm:flex-row sm:justify-between">
              <div>
              <p className='font-bold'>
                Kewdoo Sdn Bhd - IT Development and Support Intern
              </p>
              <p>- exposure to clean architecture principle and Flutter using Dart</p>
              </div>
              <p className='text-right'>
              May 2022 – Jul 2022
              </p>
            </div>
          </div>
      </div>

      <div>
        <p className="section-title" >Education</p>
          <div className="grid grid-cols-[0.5fr_10.5fr] grid-rows-2">
            <div className="p-2 w-15 h-15 sm:w-18 sm:h-18"><img src={logo42}/></div>
            <div className="p-2 sm:flex sm:flex-row sm:gap-2 sm:justify-between">
              <div>
              <p className='font-bold'>
                42 Kuala Lumpur
              </p>
              <p>Competency in Computer Science - Lvl 4 out of 9</p>
              </div>
              <p className='text-right'>
              June 2024 – Present
              </p>
            </div>
            <div className="p-2 sm:w-18 sm:h-18"><img src={apuLogo}/></div>
            <div className="p-2 sm:flex sm:flex-row sm:gap-2 sm:justify-between">
              <div>
              <p className='font-bold'>
                Asia Pacific University of Technology & Innovation
              </p>
              <p>Diploma in Information Technology with Specialism in Data Analytics</p>
              </div>
              <p className='text-right'>
              May 2020 – Jul 2022
              </p>
            </div>
          </div>
      </div>

      <div>
        <p className="section-title" >Skills</p>
        <div className='flex flex-auto justify-center gap-2'>
        {[bashLogo, cLogo, cppLogo, nextjsLogo, nodejsLogo, pythonLogo, typescriptLogo].map((logo, idx) => (
          <img key={idx} src={logo} alt="Skill logo" className="h-8 w-8 sm:w-12 sm:h-12" />
        ))}
        </div>
      </div>

      <div>
        <p className="section-title" >Projects</p>
        <div className='flex flex-col sm:grid sm:grid-cols-[1fr_1fr_1fr] sm:grid-rows-1 gap-4'>
        <ProjectCard title='Minishell' description='A UNIX command-line interpreter that can parse and execute basic commands, manage environment variables, 
and handle features like pipes, redirections and signals (C, Unix Shell APIs, Parsing, Process Management) ' link='https://github.com/colin-woon/4.1_minishell'/>
        <ProjectCard title='Philosophers' description='Multithreading solution to dining philosophers problem (C, Mutexes, Concurrency)' link='https://github.com/colin-woon/4.0_philosophers'/>
        <ProjectCard title='Libft' description='recreate a library containing a wide range of standard C library functions, including string manipulation, memory 
 management, and list operations (C, Standard Library Functions, Memory Management, Makefile)' link='https://github.com/colin-woon/1.0_libft'/>
        </div>
      </div>

      <div>
        <p className="section-title" >Hackathons</p>
        <div className='flex flex-col sm:flex-row gap-4'>
          <HackathonCard backgroundImageUrl={umhackWin} header="UM Hackathon 2025" description='LibQT - 1st Runner Up'/>
          <HackathonCard backgroundImageUrl={vhackWin} header="Varsity Hackathon USM 2025" description='DermaDAO - 5th Place'/>
          <HackathonCard backgroundImageUrl={godamlahWin} header="GodamLah! by Datasonic 2025" description='Databaes - 1st Runner-Up'/>
        </div>
      </div>

      <div>
        <p className="italic text-center" >Built with React + Vite + Tailwind</p>
        <div className='flex flex-auto mb-2 justify-center gap-2'>
          <img src={reactLogo} alt="React logo" className="h-8 w-8 sm:w-12 sm:h-12" />
          <img src={viteLogo} alt="Vite logo" className="h-8 w-8 sm:w-12 sm:h-12" />
          <img src={tailwindLogo} alt="Tailwind CSS logo" className="h-8 w-8 sm:w-12 sm:h-12" />
        </div>
      </div>
      <div className="fixed bottom-0 left-6 right-6 flex flex-auto justify-center pb-4 z-50">
        <MenuDock />
      </div>
    </div>
  )
}

export default App
