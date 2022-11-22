import React from 'react'

export default function Contact(props) {
    return (
        <section id="contact" className="mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 className="display-3 text-teal">Contact</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <form>
                                    <div className="form-group mt-2">
                                        <input type="text" name="name" id="name" placeholder='Your Name' className='form-control' required />
                                    </div>
                                    <div className="form-group mt-2">
                                        <input type="text" name="email" id="email" placeholder='Your E-mail' className='form-control' required />
                                    </div>
                                    <div className="form-group mt-2">
                                        <input type="number" name="mobile" id="mobile" placeholder='Your Mobile' className='form-control' required />
                                    </div>
                                    <div className="form-group mt-2">
                                        <textarea name="msg" id="msg" cols="30" rows="5" className='form-control' placeholder='Your Message' required></textarea>
                                    </div>
                                    <div className="form-group mt-2 text-center">
                                        <input type="submit" value="Submit" className='btn btn-outline-success' />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-sm-5">
                        <div className="card">
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <div className="contact-item d-flex align-items-center justify-content-start ">
                                            <i className="bi bi-geo-alt-fill"></i>
                                            <div className="contact-lable ms-5">
                                                <h4>City</h4>
                                                <p>Bengaluru, Karnataka</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="contact-item d-flex align-items-center justify-content-start ">
                                            <i className="bi bi-envelope-fill"></i>
                                            <div className="contact-lable ms-5">
                                                <h4>E-mail</h4>
                                                <p>ganesh@gmail.com</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="contact-item d-flex align-items-center justify-content-start ">
                                            <i className="bi bi-phone-fill"></i>
                                            <div className="contact-lable ms-5">
                                                <h4>Mobile</h4>
                                                <p>+91-7892475435</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
