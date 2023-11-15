import React, { useState, useEffect } from 'react';
import { usePostLoginMutation, usePostSignUpMutation } from '@/state/api';

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [triggerLogin, resultLogin] = usePostLoginMutation();
  const [triggerSignup] = usePostSignUpMutation();

  const handleLogin = () => {
    triggerLogin({ username, password });
  };
  const handleRegister = () => {
    triggerSignup({ username, password });
  return <div>Login</div>;
};

export default Login;
