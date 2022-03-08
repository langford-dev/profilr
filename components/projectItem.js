import React from "react";
import Button from "./button";

const ProjectItem = ({ name, description, onRemove }) => {
    return <div className='project-item'>
        <div className="project-img" />
        <b>{name}</b>
        <p>{description}</p>
        <div className="space-10" />
        <Button label='remove' onPressed={onRemove} />
    </div>
}

export default ProjectItem