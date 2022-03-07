import React from "react";
import AppSideNav from "../components/appSideNav";
import PersonalInfoContainer from "../components/edit/personalInfoContainer";
import PageTitle from "../components/pageTitle";

const Edit = () => {
    return <div className='app-main'>
        <AppSideNav />

        <div className='app-view'>
            {/* <PageTitle title='Edit your info' /> */}
            {/* <PageTitle title='Create new portfolio' /> */}

            <div className='app-view-content'>
                <div className='app-view-content-wrapper'>

                    <h1>Edit your profile</h1>
                    <div className="space-20" />
                    <p>These changes are public and will reflect in your profile page</p>
                    <div className="space-50" />

                    <div className="container">

                        <PersonalInfoContainer />

                        <div className="container-child personal-info-container">
                            <h2>Your socials</h2>
                            <div className="space-30" />

                            <div>
                                <b>Twitter Profile</b>
                                <input type='text' />
                                <div className="space-50" />
                            </div>

                            <div>
                                <b>GitHub Profile</b>
                                <input type='text' />
                                <div className="space-50" />
                            </div>

                            <div>
                                <b>LinkedIn Profile</b>
                                <input type='text' />
                                <div className="space-50" />
                            </div>

                            <div>
                                <b>Instagram Profile</b>
                                <input type='text' />
                                <div className="space-50" />
                            </div>

                            <div>
                                <b>Stackoverflow Profile</b>
                                <input type='text' />
                                <div className="space-50" />
                            </div>

                            <div>
                                <b>Behance profile</b>
                                <input type='text' />
                                <div className="space-50" />
                            </div>

                            <div>
                                <b>Hashnode Profile</b>
                                <input type='text' />
                                <div className="space-50" />
                            </div>

                            <div>
                                <b>Dev.to Profile</b>
                                <input type='text' />
                                <div className="space-50" />
                            </div>
                        </div>

                    </div>

                    {/* <div className="flex-between">
                        <h1>Preview</h1>
                        <Button label='Save changes' />
                    </div> */}

                    <div className="space-50" />

                    <div className="preview-main flex">
                        {/* <Style1 /> */}

                        {/* <div className="width-100 preview-panel">
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
                            </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div >
}

export default Edit