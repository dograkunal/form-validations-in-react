import {useState} from 'react';
function InputField({ type, placeholder, validations, inputChange }) {
    const [value, setvalue] = useState('')
    return (
        <>
            <input
                type={type}
                placeholder={placeholder}
                onChange={(e) => { setvalue(e.target.value); inputChange(e.target.value) }}
                value={value}
            >
            </input>
        </>
    )
}

export default InputField;
