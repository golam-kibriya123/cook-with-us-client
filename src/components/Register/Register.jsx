import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders/AuthProviders';

import { Link } from 'react-router-dom';

const Register = () => {

    const { createUsers } = useContext(AuthContext);


    const [passwordHide, setPasswordHide] = useState(true);
    const showHide = () => {
        setPasswordHide(!passwordHide)
    };

    const handelRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        createUsers(email, password)
            .then((result) => {

            })
            .catch(error => {
                console.log(error)
            })

    };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handelRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" placeholder="Your name" name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label relative">
                                    <span className="label-text">Password</span>
                                    <button onClick={showHide} className={`absolute -bottom-9  right-2 font-semibold ${passwordHide ? '' : 'hidden'}`} >Show</button>
                                    <button onClick={showHide} className={`absolute -bottom-9  right-2 font-semibold ${passwordHide ? 'hidden' : ''}`}>Hide</button>
                                </label>
                                <input type={`${passwordHide ? 'password' : 'text'}`} placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <Link to="/login" className="label-text-alt link link-hover">Already have an account?</Link>

                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn ">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;