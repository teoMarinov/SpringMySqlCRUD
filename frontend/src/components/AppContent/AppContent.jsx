


import Buttons from "../Button/Button"
import { LoginForm } from '../LoginForm/LoginForm';
import WelcomeContent from '../Wellcome/WellcomeComponent';
import { AuthContent } from '../AuthContent/AuthContent'

const AppContent = () => {



    return (
        <>

            <Buttons
                login={() => { }}
                logout={() => { }}
            />

            { <WelcomeContent />}
            { <LoginForm onLogin={() => {}} onRegister={() => {}} />}
            { <AuthContent />}

        </>
    );
}

export default AppContent;