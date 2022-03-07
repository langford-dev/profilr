import React from "react";

const PersonalInfoContainer = () => {
    return <div className="container-child personal-info-container">
        <h2>Personal info</h2>
        <div className="space-30" />

        <div>
            <b>Your name</b>
            <input type='text' />
            <div className="space-50" />
        </div>

        <div>
            <b>Your work</b>
            <input type='text' />
            <div className="space-30" />
        </div>

        <div>
            <b>Greeting text <span className="fade-text"> eg. Heyooo 👋</span> </b>
            <input type='text' />
            <div className="space-30" />
        </div>

        <div>
            <b> About you </b>
            <textarea type='text' />
            <div className="space-30" />
        </div>
    </div>
}

export default PersonalInfoContainer