import React, { useState } from 'react';
import eyeIcon from '../../assets/Eye.svg';
import eyeOffIcon from '../../assets/EyeOff.svg';

const InputField = ({ type, placeholder, required }) => {
    const [inputType, setInputType] = useState(type);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        if (type === 'password') {
            setShowPassword(!showPassword);
            setInputType(showPassword ? 'password' : 'text');
        }
    };

    return (
        <div style={{ position: 'relative', width: '100%' }}>
            <input
                type={inputType}
                placeholder={placeholder}
                required={required}
                style={{ width: '100%', padding: '10px', paddingRight: type === 'password' ? '40px' : '10px', boxSizing: 'border-box' }}
            />
            {type === 'password' && (
                <img
                    src={showPassword ? eyeOffIcon : eyeIcon}
                    onClick={togglePasswordVisibility}
                    alt="Toggle Password Visibility"
                    style={{
                        position: 'absolute',
                        right: '10px',
                        top: '40%',
                        transform: 'translateY(-50%)',
                        cursor: 'pointer'
                    }}
                />
            )}
        </div>
    );
};

export default InputField;
