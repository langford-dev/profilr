import React from 'react'
import { useState } from 'react/cjs/react.development'
import AppSideNav from '../components/appSideNav'
import PageTitle from '../components/pageTitle'
import StepComponents from '../components/stepComponents'

const Create = () => {
    const [currentStep, setCurrentStep] = useState(0)
    const maxSteps = 2

    const nextStep = () => {
        setCurrentStep(currentStep + 1)
    }

    const prevStep = () => {
        setCurrentStep(currentStep - 1)
    }

    return <div>
        <div className='app-main'>
            <AppSideNav />
            <div className='app-view'>
                <PageTitle title='Create new portfolio' />

                <div className='app-view-content'>
                    <div className='app-view-content-wrapper'>

                        <div>
                            <StepComponents currentStep={currentStep} />

                            <div className='space-30' />
                            <div className='flex'>
                                {currentStep > 0 ? <button className='btn ghost-btn' onClick={prevStep}>&larr; &nbsp; Previous</button> : <></>}
                                {currentStep <= maxSteps ? <button className='btn' onClick={nextStep}>Next &nbsp; &rarr;</button> : <></>}
                            </div>
                            <div className='space-50' />
                            <p className='fade-text'>This information will be displayed on your portfolio site</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Create 