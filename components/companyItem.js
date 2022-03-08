import React from "react";
import Button from "./button";

const CompanyItem = ({ name, description, onRemove }) => {
    return <div className='project-item'>
        <b>{name}</b>
        <p>{description}</p>
        <div className="space-10" />
        <Button label='remove' onPressed={onRemove} />
    </div>
}

export default CompanyItem