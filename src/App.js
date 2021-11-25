import logo from './logo.svg';
import './App.css';
import InputField from './InputField';
import { useState } from 'react';
function App() {
  const [formFields, setformFields] = useState({
    userName: '',
    email: ''
  });
  const [errorsList, seterrorsList] = useState([]);
  const hritikVar = [];
  const name = 'helo';
  const regExp = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
  const submitHandler = (e) => {
    const errList = [...errorsList];
    if (formFields.email) {
      if (!regExp.test(formFields.email)) {
        if (!errList.includes('Email Is not valid')) {
          errList.push('Email Is not valid');
        }
        console.log('this is not the corrent format for email bro');
      }
    } else {
      if (!errList.includes('Email is required')) {
        errList.push('Email is required');
      }
      console.log('email is required bro');
    }
    seterrorsList(errList);
    console.log(hritikVar);
    console.log(errorsList, 'error list')
  }

  return (
    <div className="App">
      <div className="form-field">
        <InputField
          type="email"
          placeholder="please enter your email"
          inputChange={(val) => { setformFields({ email: val }); console.log(formFields) }}
        />
      </div>
      <div className="form-field">
        <InputField
          type="text"
          placeholder="please enter your name"
          inputChange={(val) => { setformFields({ userName: val }); console.log(formFields) }}
        />
      </div>
      <div>
        <button onClick={submitHandler} >
          Submit
        </button>
      </div>
      <div>
        {errorsList.map((el, index) => (<h5 className="err" key={index}>{el}</h5>))}
      </div>
    </div>
  );
}

export default App;
