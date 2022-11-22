import React from 'react'

const profile_image = "https://cdn-icons-png.flaticon.com/512/3048/3048124.png";

function About() {
    return (
        <section id="about" className="d-flex align-items-start">
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 className="display-3 text-teal bg-light">About </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-secondary">
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo beatae error recusandae atque ab omnis. Libero debitis esse laudantium fugit mollitia sunt dignissimos autem quos! Labore officiis vitae expedita voluptatem!</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <img src={profile_image} alt="no_image" className="card-img-top" />
                        </div>
                    </div>

                    <div className="col-md-9">
                        <div className="card">
                            <div className="card-body bg-white">
                                <h5 className="text-center text-teal card-title">
                                    Personal Details
                                </h5>
                                <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Tenetur esse ex obcaecati</p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                <strong className="text-secondary">Birthday</strong>
                                                <span className="text-teal float-end">20/10/1999</span>
                                            </li>
                                            <li className="list-group-item">
                                                <strong className="text-secondary">Email</strong>
                                                <span className="text-teal float-end">gnshrb@gmail.com</span>
                                            </li>
                                            <li className="list-group-item">
                                                <strong className="text-secondary">Mobile</strong>
                                                <span className="text-teal float-end">7892475435</span>
                                            </li>
                                            <li className="list-group-item">
                                                <strong className="text-secondary">City</strong>
                                                <span className="text-teal float-end">Banglore, Karnataka</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                <strong className="text-secondary">Qualification</strong>
                                                <span className="text-teal float-end">Diploma in Computer Science </span>
                                            </li>
                                            <li className="list-group-item">
                                                <strong className="text-secondary">Father Name</strong>
                                                <span className="text-teal float-end">Basavarajaappa</span>
                                            </li>
                                            <li className="list-group-item">
                                                <strong className="text-secondary">Mother Name</strong>
                                                <span className="text-teal float-end">Sharadamma</span>
                                            </li>
                                            <li className="list-group-item">
                                                <strong className="text-secondary">Marital Status</strong>
                                                <span className="text-teal float-end">Unmarried</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-12 text-center">
                            <h3 className="display-3 text-teal bg-light">
                                Skills
                            </h3>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <p>
                                            <strong className="text-secondary">HTML</strong>
                                            <strong className="text-teal float-end">98%</strong>
                                        </p>
                                        <div className="progress">
                                            <div className="progress-bar bg-success" style={{ width: '98%' }}>98%</div>
                                        </div>                                    </li>
                                    <li className="list-group-item">
                                        <p>
                                            <strong className="text-secondary">CSS</strong>
                                            <strong className="text-teal float-end">70%</strong>
                                        </p>
                                        <div className="progress">
                                            <div className="progress-bar bg-danger" style={{ width: '70%' }}>70%</div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <p>
                                            <strong className="text-secondary">JavaScript</strong>
                                            <strong className="text-teal float-end">90%</strong>
                                        </p>
                                        <div className="progress">
                                            <div className="progress-bar bg-dark" style={{ width: '90%' }}>90%</div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <p>
                                            <strong className="text-secondary">jQuery</strong>
                                            <strong className="text-teal float-end">70%</strong>
                                        </p>
                                        <div className="progress">
                                            <div className="progress-bar bg-info" style={{ width: '70%' }}>70%</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <p>
                                            <strong className="text-secondary">react </strong>
                                            <strong className="text-teal float-end">70%</strong>
                                        </p>
                                        <div className="progress">
                                            <div className="progress-bar bg-secondary" style={{ width: '70%' }}>70%</div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <p>
                                            <strong className="text-secondary">node js</strong>
                                            <strong className="text-teal float-end">70%</strong>
                                        </p>
                                        <div className="progress">
                                            <div className="progress-bar bg-danger" style={{ width: '70%' }}>70%</div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <p>
                                            <strong className="text-secondary">bootstrap</strong>
                                            <strong className="text-teal float-end">70%</strong>
                                        </p>
                                        <div className="progress">
                                            <div className="progress-bar bg-warning" style={{ width: '70%' }}>70%</div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <p>
                                            <strong className="text-secondary">jQuery</strong>
                                            <strong className="text-teal float-end">70%</strong>
                                        </p>
                                        <div className="progress">
                                            <div className="progress-bar bg-success" style={{ width: '70%' }}>70%</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
export default About