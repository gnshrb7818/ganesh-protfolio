import React from 'react'

export default function Profile(props) {
    return (
        <section id="profile" className="mt-5 profile">
            <section className="section-title">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="display-3 text-teal text-center">Ganesh R B</h3>
                            <p className="text-justify text-secondary">Mern Fullstack Developer with a proven ability to adapt in bith self-starting  and collabrative envirnoments while staying focused on achiveing high quality results under strict deadline . This quality and results-based approach drove me to collaborate with the Teams to craete a responsive highly scalable web applications. Eager to obtain a challenging position at a prestigious company like  a dream version that will expand  my  learning  and build upon  my developer skills.  </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="eduction">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className="profile-title">Education</h3>
                            <div className="profile-item pb-0">
                                <h4>Diploma in Computer Science</h4>
                                <h4></h4>
                                <h5>Year : 2019</h5>
                                <p>Government Polytechnic Collage </p>
                                <p>Chitadurga</p>
                            </div>

                            <div className="profile-item pb-0">
                                <h4>SSLC  10 <sup>th</sup></h4>
                                <h5>Year : 2016</h5>
                                <p> Sri Rudreshwara English Medium High School</p>
                                <p>Hebbalu, Davanagere (T&D)</p>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <h3 className="profile-title">Training </h3>
                            <div className="profile-item pb-0">
                                <h4>MERN Fullstack Developer</h4>
                                <h5>Year : 2022</h5>
                                <p>Be-Practical Tech Solutions </p>
                                <p>Bengaluru</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
