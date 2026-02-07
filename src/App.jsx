import React from 'react'
import './App.css'
import { ProjectCard } from './Component/ProjectCard'

 const App = () => {
  const products = [
  { title: 'Pokemon Table', id: 1 , description: 'This is a project that displays a table of Pokemon characters and their attributes.',link:"https://github.com/quandagr/Pokemon_Table.git"},
  { title: 'Weather Webpage', id: 2, description: 'This is a project that displays weather information for different locations.',link:"https://github.com/quandagr/current-weather.git"},
  { title: 'Calculator', id: 3, description: 'This is a simple calculator application.',link:"https://github.com/quandagr/Interactive-Calclator.git"},
  { title: 'Weather App', id: 4, description: 'This is a weather application that displays current weather information.',link:"https://weatherapp1987.netlify.app/"}
];
  return (
    <><main className= "d-flex flex-row align-items-center justify-content-center">
 <img src="/travel.PNG" className="img-fluid rounded-start w-50 h-100 m-5" alt="Travel"></img>
<div className="d-flex flex-column align-items-start justify-content-center p-5">
      <h1 className="text-center mt-5">About Me</h1>
      <p className="text-start mt-3">Hello! My name is Quanda and I am a software developer with a passion for creating innovative and user-friendly applications. I have experience in various programming languages and frameworks, and I enjoy working on projects that challenge me to learn and grow as a developer. In my free time, I like to explore new technologies, contribute to open-source projects, and collaborate with other developers to create impactful solutions.</p>
   </div>
  
    </main><><div className="App">

      
      <ProjectCard />
    </div><div className="Project z-1">
          {products.map((product) => (
            <ProjectCard key={product.id} title={product.title} description={product.description} link={product.link} />
          ))}
        </div></></>
  )
}



export default App
