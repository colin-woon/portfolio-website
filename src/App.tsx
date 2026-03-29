import { ProjectCard, HackathonCard, MenuDock, SquaresBackground, TypingAnimation, WeatherWidget } from './components'
import { reactLogo, viteLogo, bashLogo, cLogo, cppLogo, nextjsLogo, nodejsLogo, pythonLogo, tailwindLogo, typescriptLogo, logo42, apuLogo, kewdooLogo, newswavLogo, umhackWin, vhackWin, godamlahWin, iotaWin, ustWin, hacklabWin } from './assets'
import { useState } from 'react'

function App() {
  const [theme, setTheme] = useState("luxury")

  const isDark = theme === "luxury";

  // #341C02 dark brown for dark mode, #CBD5E1 light gray for light mode
  const gridColor = isDark ? '#341C02' : '#F6DCC0';
  const hoverColor = isDark ? '#222' : '#F1F5F9';

  return (
    <html data-theme={theme}>
    <div className="fixed inset-0 z-[-1]">
        <SquaresBackground
          speed={0.2}
          squareSize={80}
          direction='diagonal' // up, down, left, right, diagonal
          borderColor={gridColor}
          hoverFillColor={hoverColor}
        />
    </div>
    <div className="ml-6 mr-6 sm:max-w-6xl flex flex-col gap-12 pb-20 font-mono">
      <WeatherWidget />
      <div className='mt-12 sm:ml-0 sm:mr-0'>
        <TypingAnimation className='font-bold text-5xl sm:text-8xl mb-2' duration={80}>Hi, I'm Colin👋</TypingAnimation>
        <TypingAnimation className='font-bold text-2xl sm:text-5xl mb-2' duration={50}>A Full-Stack Engineer Shaped by 42KL</TypingAnimation>
      </div>

      <div>
        <p className="section-title" >About Me</p>
        <p className='text-left leading-relaxed sm:text-justify text-xs sm:text-sm'>I started in a conventional academic setting but quickly hit a wall due to the disconnect between lectures and real-world execution, leading me to drop the traditional route for the peer-driven, project-based environment of 42 Kuala Lumpur. This shift forced me out of "tutorial hell" and transformed my approach to problem-solving into one that is "real," goal-driven, and focused on continuous building. Drawing from my background in FnB operations and as a swimming coach, I apply a consistent framework to software: clearly defining the problem, breaking it down into digestible pieces, and creating rigorous feedback loops, leading me to podium finishes in hackathons. Whether calibrating espresso machines, teaching freestyle swimming, or architecting a polyglot microservices backend, my strengths lie in product engineering and process optimization, preferring to strip away tech jargon using etymology and understand the fundamental structural limitations and tradeoffs of a stack.</p>
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
              <p>Competency in Computer Science - Lvl 9 out of 11</p>
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
        <div className='flex flex-col sm:grid sm:grid-cols-[1fr_1fr] sm:grid-rows-2 gap-4'>
        <ProjectCard title='42 Overflow - Capstone Project' description='A Q&A platform for 42 project build with polyglot microservices (Quarkus for authentication, Go for real-time chat, Python FastAPI for forums, mTLS, NGINX, PostgreSQL)' link='https://github.com/colin-woon/7.0_ft_transcendence'/>
        <ProjectCard title='Inception' description='Setup a small and secure infrastructure of services according to a LEMP stack (Linux, Nginx, MariaDB or MySQL, PHP Wordpress) running in dedicated containers' link='https://github.com/colin-woon/6.1_inception'/>
        <ProjectCard title='Philosophers' description='Multithreading solution to dining philosophers problem (C, Mutexes, Concurrency)' link='https://github.com/colin-woon/4.0_philosophers'/>
        <ProjectCard title='LibQT' description='A YAML style config-driven quant trading backtest framework in Python' link='https://github.com/colin-woon/umhackathon_2025'/>
        </div>
      </div>

      <div>
        <p className="section-title" >Hackathons</p>
        <div className='flex flex-col sm:grid sm:grid-cols-[1fr_1fr_1fr] sm:grid-rows-2 gap-4'>
          <HackathonCard backgroundImageUrl={ustWin} header="UST Regional Hackathon Malaysia 2025" description='QuantumBaes - Champion'/>
          <HackathonCard backgroundImageUrl={iotaWin} header="IOTA Malaysia Hackathon 2025" description='IOTIX - 2nd Place'/>
          <HackathonCard backgroundImageUrl={umhackWin} header="UM Hackathon 2025" description='LibQT - 1st Runner Up'/>
          <HackathonCard backgroundImageUrl={vhackWin} header="Varsity Hackathon USM 2025" description='DermaDAO - 5th Place' />
          <HackathonCard backgroundImageUrl={godamlahWin} header="GodamLah! by Datasonic 2025" description='Databaes - 1st Runner-Up'/>
          <HackathonCard backgroundImageUrl={hacklabWin} header="HackLab 2025 by Ambank x 42KL" description='AmDash - Top 5 Finalist'/>
        </div>
      </div>

      <div>
        <p className="italic text-center" >Built with React + Vite + Tailwind</p>
        <div className='flex flex-auto mb-2 justify-center gap-2'>
          <img src={reactLogo} alt="React logo" className="h-8 w-8 sm:w-12 sm:h-12" />
          <img src={viteLogo} alt="Vite logo" className="h-8 w-8 sm:w-12 sm:h-12" />
          <img src={tailwindLogo} alt="Tailwind CSS logo" className="h-8 w-8 sm:w-12 sm:h-12" />
        </div>
        <p className='italic text-center'>
          Check out the website code <a href="https://github.com/colin-woon/portfolio-website">here!</a>
        </p>
      </div>
      <div className="fixed bottom-0 left-6 right-6 flex flex-auto justify-center pb-4 z-50">
        <MenuDock setTheme={setTheme}/>
      </div>
    </div>
    </html>
  )
}

export default App
