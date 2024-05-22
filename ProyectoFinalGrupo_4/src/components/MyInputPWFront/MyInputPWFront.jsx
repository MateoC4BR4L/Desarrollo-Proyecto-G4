import App from "../../App";
function MyInputsPWFront(){
    return(
        <div className="MyInputsPWFront">
            <input placeholder="Password" type="pas"></input>
        </div>
    );
}

// ESTO ES UNA ESTRUCTURA GPT PARA VER Y NO VER LA CONTRASEÑA INGRESADA PORQUE LA DE ARRIBA, NO PERMITE VER LA CONTRASEÑA.

/*
import React, { useState } from 'react';

const PasswordToggleInput = () => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
    };

    return (
        <div className="PasswordToggleInput">
            <label htmlFor="passwordInput">Contraseña:</label>
            <input
                type={showPassword ? "text" : "password"}
                id="passwordInput"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Introduce tu contraseña"
            />
            <button type="button" onClick={togglePasswordVisibility}>
                {showPassword ? "Ocultar" : "Mostrar"}
            </button>
        </div>
    );
};

export default PasswordToggleInput;


*/