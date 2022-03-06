import Link from "next/link";
import React, { useState } from "react";
import AppSideNav from "../components/appSideNav";
import Button from "../components/button";
import PageTitle from "../components/pageTitle";

const Preview = () => {
    const [aboutText, setAboutText] = useState('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum')

    const onAboutTextChange = (e) => {
        console.log(e)
    }

    return <div>
        <div className='app-main'>
            <AppSideNav />

            <div className='app-view'>
                {/* <PageTitle title='Create new portfolio' /> */}

                <div className='app-view-content'>
                    <div className='app-view-content-wrapper'>

                        <div className="flex-between">
                            <h1>Preview</h1>
                            <Button label='Save changes' />
                        </div>

                        <div className="space-50" />

                        <div className="preview-main flex">
                            <div className="width-100 preview-panel">
                                <div className="avatar-lg"></div>
                                <div className="space-50" />
                                <h1>Langford</h1>
                                <div className="space-20" />
                                <p>Web developer</p>
                                <div className="space-50" />
                                <textarea
                                    vaalue={aboutText}
                                    onChange={e => onAboutTextChange(e)}>
                                </textarea>
                            </div>

                            <div className="width-100 preview-panel">
                                <div className="avatar-lg"></div>
                                <div className="space-50" />
                                <h1>Langford</h1>
                                <div className="space-20" />
                                <p>Web developer</p>
                                <div className="space-50" />
                                <textarea
                                    vaalue={aboutText}
                                    onChange={e => onAboutTextChange(e)}>
                                </textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Preview