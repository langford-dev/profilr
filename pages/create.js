import React from 'react'
import { useState } from 'react/cjs/react.development'
import AppSideNav from '../components/appSideNav'
import PageTitle from '../components/pageTitle'

const Create = () => {
    const [currentStep, setCurrentStep] = useState(0)
    const maxSteps = 3

    const stepComponents = () => {
        switch (currentStep) {
            case 0:
                return <div>
                    <div>
                        <h1>Pick a username?</h1>
                        <div className='space-50' />
                        <div className='flex'>
                            <p>profilr.com/ </p> &nbsp; &nbsp; <input type='text' placeholder='Langford Musk' />
                        </div>
                    </div>
                </div>
                break;
            case 1:
                return <div>
                    <div>
                        <h1>What is your name?</h1>
                        <div className='space-50' />
                        <input type='text' placeholder='Langford Musk' />
                    </div>
                </div>
                break;
            case 2:
                return <div>
                    <div>
                        <h1>Which work do you do?</h1>
                        <div className='space-50' />
                        <input type='text' placeholder='Web developer' />
                    </div>
                </div>
                break;
            case 3:
                return <div>
                    <div>
                        <h1>Pick your theme color</h1>
                        <div className='space-50' />
                        <input type='color' />
                    </div>
                </div>
                break;
            case 4:
                return <h1>3</h1>
                break;

            default:
                break;
        }
    }

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
                            {stepComponents()}
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