import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Github, Linkedin, Twitter } from "../../assets/icons";

const Style1 = () => {
    return <div>
        <section className="template-main-view">
            <section className="width-100 template-panel">
                <div>
                    <div className='template-banner-container'>
                        <div className="template-banner-container">
                            <Image src='https://pbs.twimg.com/profile_banners/1469959806463131655/1644613168/600x200' layout='fill' objectFit='cover' />
                            {/* <Image src='https://pbs.twimg.com/profile_banners/1469959806463131655/1644613168/600x200' className="template-banner" layout='fill' /> */}
                        </div>
                        {/* <div className="template-banner"></div> */}
                        <div className='template-avatar-container'>
                            <div className="template-avatar-border">
                                <Image width="200px" height="200px" src="https://pbs.twimg.com/profile_images/1494065115628548099/IOVenzqn_400x400.jpg" alt="langford avatar" className="avatar-lg" id="avatar-lg" />
                            </div>
                        </div>
                    </div>

                    <section className="template-intro-text">
                        <div className="space-50" />
                        <div className="space-20" />
                        <h1>Langford Kwabena</h1>
                        {/* <div className="space-50" /> */}
                        {/* <h2>A UI designer focused on building usable, user centered interfaces that add value to your business.</h2> */}
                        <div className="space-20" />
                        <h2 className="fade-text">Web developer</h2>
                        <div className="space-20" />

                        <div className="flex flex-row-center">
                            <Github />
                            <div className="space-30" />
                            <Linkedin />
                            <div className="space-30" />
                            <Twitter />
                        </div>
                    </section>
                </div>

                <div className="space-50" />
                <div className="line" />
                <div className="space-50" />

                <section>
                    <h1 className="template-section-title">About me</h1>
                    <div className="space-30" />
                    <p>
                        Hello ???? I???m Langford. A self-taught Web(3) and Software developer, Content creator and Technical Writer ??????
                        I have over 3+ years of industry experience.
                        I enjoy learning new technologies and writing about what I discover ????
                        My favorite languages are JavaScript, HTML and CSS. I am well-versed in frameworks such as React, Vue.js, React Native, Flutter
                    </p>
                </section>

                <section>
                    <div className="space-50" />
                    <div className="line" />
                    <div className="space-50" />
                </section>

                {/* <section id="template-experience">
                <h1 className="template-section-title">My Experience</h1>
                <div className="space-50" />
                <div className="space-50" />

                <ul className="experience-container">
                    <li className="experience-item">
                        <h3>HTML - 95%</h3>
                        <input type="range" value="95" onChange={() => { }} />
                    </li>
                    <li className="experience-item">
                        <h3>CSS - 93%</h3>
                        <input type="range" value="93" onChange={() => { }} />
                    </li>
                    <li className="experience-item">
                        <h3>JavaScript - 90%</h3>
                        <input type="range" value="90" onChange={() => { }} />
                    </li>
                    <li className="experience-item">
                        <h3>React - 90%</h3>
                        <input type="range" value="90" onChange={() => { }} />
                    </li>
                </ul>
            </section> */}

                <section className="template-tools">
                    <h1 className="template-section-title">My tools</h1>
                    <div className="space-50" />
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Photoshop</li>
                        <li>C#</li>
                        <li>Adobe Illustrator</li>
                        <li>MongoDB</li>
                        <li>JavaScript</li>
                        <li>PHP</li>
                        <li>C++</li>
                    </ul>
                </section>

                <section>
                    <div className="space-50" />
                    <div className="line" />
                    <div className="space-50" />
                </section>

                <section className="template-projectplaces">
                    <h1 className="template-section-title">Places ive worked</h1>
                    <div className="space-50" />
                    <ul>
                        <details>
                            <summary>Google Enterprise</summary>
                            <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
                        </details>

                        <details>
                            <summary>Google Facebook</summary>
                            <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
                        </details>

                        <details>
                            <summary>Instagram Facebook</summary>
                            <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
                        </details>
                    </ul>
                </section>

                <section>
                    <div className="space-50" />
                    <div className="line" />
                    <div className="space-50" />
                </section>

                <section id="template-projects/">
                    <h1 className="template-section-title">My Works</h1>
                    <div className="space-50" />
                    <ul className="template-projects-container">
                        <li className="template-project-item">
                            <div className="template-project-img" />
                            <div className="space-20" />
                            <Link passHref={true} href="/">google.com</Link>
                            <p>Description</p>
                        </li>
                        <li className="template-project-item">
                            <div className="template-project-img" />
                            <div className="space-20" />
                            <Link passHref={true} href="/">google.com</Link>
                            <p>Description</p>
                        </li>
                        <li className="template-project-item">
                            <div className="template-project-img" />
                            <div className="space-20" />
                            <Link passHref={true} href="/">google.com</Link>
                            <p>Description</p>
                        </li>
                        <li className="template-project-item">
                            <div className="template-project-img" />
                            <div className="space-20" />
                            <Link passHref={true} href="/">google.com</Link>
                            <p>Description</p>
                        </li>
                    </ul>
                </section>

            </section>
        </section>
        <footer className="text-align-center fade-text">
            Profilr ??? Made with ???? ??? &copy;2022 All Rights Reserved
        </footer>
    </div>
}

export default Style1