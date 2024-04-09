


import Buttons from "../Button/Button"
import { LoginForm } from '../LoginForm/LoginForm';
import WelcomeContent from '../Wellcome/WellcomeComponent';
import { AuthContent } from '../AuthContent/AuthContent'
import { useState } from "react";
import axios from 'axios'

const AppContent = () => {

    const [showContent, setShowContent] = useState("welcome")


    const onRegister = (email, password, role) => {

        axios.post('http://localhost:8080/auth/signup', {
            email,
            password,
            role
        })
            .then(response => console.log(response))
            .catch(e => console.error(e))
    }

    return (
        <>

            <Buttons
                login={() => setShowContent('auth')}
                logout={() => setShowContent('welcome')}
            />

            {showContent == "welcome" && <WelcomeContent />}
            {showContent == "auth" && <LoginForm onLogin={() => { }} onRegister={onRegister} />}
            {showContent == "content" && <AuthContent />}

        </>
    );
}

export default AppContent;