import classNames from 'classnames';
import { useState } from 'react';

export const LoginForm = ({ onLogin, onRegister }) => {

    const [active, setActive] = useState('login')

    const [loginData, setLoginData] = useState({ email: "", password: "" })
    const [registerData, setRegisterData] = useState({ email: "", password: "", role: "ADMIN" });


    const changeLoginInfo = (event) => {
        const { name, value } = event.target;
        setLoginData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const changeRegisterInfo = (event) => {
        const { name, value } = event.target;
        setRegisterData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const onSubmitLogin = (e) => {
        e.preventDefault()
        console.log(loginData)
    }
    const onSubmitRegister = (e) => {
        e.preventDefault()
        onRegister(registerData.email, registerData.password, registerData.role)
    }
    return (
        <div className="row justify-content-center">
            <div className="col-4">
                <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className={classNames("nav-link", active === "login" ? "active" : "")} id="tab-login"
                            onClick={() => setActive("login")}>Login</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className={classNames("nav-link", active === "register" ? "active" : "")} id="tab-register"
                            onClick={() => setActive("register")}>Register</button>
                    </li>
                </ul>

                <div className="tab-content">
                    <div className={classNames("tab-pane", "fade", active === "login" ? "show active" : "")} id="pills-login" >
                        <form onSubmit={onSubmitLogin}>

                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="loginName">email</label>
                                <input type="login" id="loginName" name="email" className="form-control" value={loginData.email} onChange={changeLoginInfo} />
                            </div>

                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="loginPassword">Password</label>
                                <input type="password" id="loginPassword" name="password" className="form-control" value={loginData.password} onChange={changeLoginInfo} />
                            </div>

                            <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

                        </form>
                    </div>
                    <div className={classNames("tab-pane", "fade", active === "register" ? "show active" : "")} id="pills-register" >
                        <form onSubmit={onSubmitRegister}>

                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="email">email</label>
                                <input type="text" id="email" name="email" className="form-control" onChange={changeRegisterInfo} />
                            </div>


                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="password">Password</label>
                                <input type="password" id="password" name="password" className="form-control" onChange={changeRegisterInfo} />
                            </div>

                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="role">role</label>
                                <input type="text" id="role" name="role" className="form-control" onChange={changeRegisterInfo} />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block mb-3">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
