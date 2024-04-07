import classNames from 'classnames';
import { useState } from 'react';

export const LoginForm = () => {

    const [active, setActive] = useState('login')

    const [loginData, setLoginData] = useState({ login: "", password: "" })
    const [registerData, setRegisterData] = useState({ firstName: "", lastName: "", login: "", password: "" });


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
        console.log(registerData)
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
                                <label className="form-label" htmlFor="loginName">Username</label>
                                <input type="login" id="loginName" name="login" className="form-control" value={loginData.login} onChange={changeLoginInfo} />
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
                                <label className="form-label" htmlFor="firstName">First name</label>
                                <input type="text" id="firstName" name="firstName" className="form-control" onChange={changeRegisterInfo} />
                            </div>

                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="lastName">Last name</label>
                                <input type="text" id="lastName" name="lastName" className="form-control" onChange={changeRegisterInfo} />
                            </div>

                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="login">Username</label>
                                <input type="text" id="login" name="login" className="form-control" onChange={changeRegisterInfo} />
                            </div>

                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="registerPassword">Password</label>
                                <input type="password" id="registerPassword" name="password" className="form-control" onChange={changeRegisterInfo} />
                            </div>

                            <button type="submit" className="btn btn-primary btn-block mb-3">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
