import React from 'react'

const StepComponents = ({ currentStep }) => {
    // return <></>
    switch (currentStep) {
        case 0:
            return <div>
                <div>
                    <h1>Pick a username?</h1>
                    <div className='space-50' />
                    <div className='flex'>
                        <p>profilr.com/ </p> &nbsp; &nbsp; <input type='text' placeholder='langford' />
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

        default:
            return <></>
            break;
    }
}

export default StepComponents;