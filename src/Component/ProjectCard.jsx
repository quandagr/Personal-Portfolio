import React from 'react'


export const ProjectCard = ({ title, description, link }) => {
  return (
   
    <div className="container mt-5">
    <div className="row justify-content-center">
    <div className="col-md-6">
   <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={link} className="card-text"><small >{link}</small></a>
      </div>
    </div>
  </div>
</div>
    </div>  
     
 ); 
 } 
  
export default ProjectCard
