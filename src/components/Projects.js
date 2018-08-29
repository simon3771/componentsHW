import React, { Component } from 'react';
import projects from '../data/projects.json';
import Project from './Project'

const mapper = (value) => {
  return <Project values={value}
  title={projects.allProjects[value].title}
  imgName={projects.allProjects[value].imgName}
  description={projects.allProjects[value].description}/>
}




class Projects extends React.Component {
 render() {
return (
    <section id="projects">
    <a href="#"> </a>
    <header>
      <h1>My Projects</h1>
      <p> These are some of my projects </p>
     </header>
     {
       [...Array(4).keys()].map(mapper)
     }
    </section>
)
  }
}


export default Projects;
