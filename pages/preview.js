import Link from "next/link";
import React, { useState } from "react";
import AppSideNav from "../components/appSideNav";
import Button from "../components/button";
import PageTitle from "../components/pageTitle";
import Style1 from "../components/previews/style-1";

const Preview = () => {
    return <Style1 />
    // return <div>
    //     <div className='app-main'>
    //         <AppSideNav />

    //         <div className='app-view'>
    //             {/* <PageTitle title='Create new portfolio' /> */}

    //             <div className='app-view-content'>
    //                 <div className='app-view-content-wrapper'>

    //                     <div className="flex-between">
    //                         <h1>Preview</h1>
    //                         {/* <Button label='Save changes' /> */}
    //                     </div>

    //                     <div className="space-50" />

    //                     <div className="preview-main flex">
    //                         <Style1 />

    //                         {/* <div className="width-100 preview-panel">
    //                             <div className="avatar-lg"></div>
    //                             <div className="space-50" />
    //                             <h1>Langford</h1>
    //                             <div className="space-20" />
    //                             <p>Web developer</p>
    //                             <div className="space-50" />
    //                             <textarea
    //                                 vaalue={aboutText}
    //                                 onChange={e => onAboutTextChange(e)}>
    //                             </textarea>
    //                         </div> */}
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
}

export default Preview