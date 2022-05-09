import styles from '../styles/login.module.css';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useAuth } from '../hooks';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginIn, setLoginIn] = useState(false);
  const auth = useAuth();
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginIn(true);
    if (!email || !password) {
      return toast('Please enter both email and password');
    }
    const response = await auth.login(email, password);
    console.log(response);
    if (response.success) {
      toast('Successfully logged in');
    } else {
      toast(response.message);
    }

    setLoginIn(false);
  };
  return (
    <form className={styles.loginForm} onSubmit={handleLogin}>
      <span className={styles.loginSignupHeader}>Log In</span>

      <div className={styles.field}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <div className={styles.field}>
        <input
          type="password"
          placeholder="Paasword"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>

      <div className={styles.field}>
        <button>{loginIn ? 'Logging in...' : 'Log In'}</button>
      </div>
    </form>
  );
};

export default Login;
