import React from "react";
import MyLogin from "../../components/MyLogin";
import BackgroundCarousel from '../../components/MyBackgroundCarrousel';

function Login() {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    return (
        <div>
            <BackgroundCarousel darkMode={darkMode}>
                <MyLogin />
            </BackgroundCarousel>
        </div>
    );
}

export default Login