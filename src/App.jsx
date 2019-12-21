import React, { useState}  from 'react';
import logo from './logo.svg';
import './App.css';
import CardDefaul from './components/card-default/CardDefault';
import InputEmail from './components/input-email/InputEmail';
import InputPasword from './components/input-password/InputPassword';

function App() {
  //const [title, setTitle] = useState(props.title);  
  const [email, setEmail] = useState('');
  const [emailConfirm, setEmailConfirm] = useState('');
  const [password, setPassword] = useState('');

  // primero el valor segundo el metodo
  //const handlerEmail = (event) => {
  //  const target = event.target;
  //  const value = event.value;
  //  setEmail(event.value);
  //}

  //const handlerButton = () => setTitle('valor nuevo');

  return (
    <div className="App">
      <InputEmail value={email} onChange={setEmail}></InputEmail>
      
      <InputPasword e={password} x={setPassword}></InputPasword>
    </div>
    
  );
}

export default App;
