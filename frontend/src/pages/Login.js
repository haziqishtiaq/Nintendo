import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
    return (
        <div className="login-page">
            <div>
                <form className="login-form">
                    <fieldset>
                        <legend>LogIn</legend>
                        <label htmlFor="fname">First Name:</label>
                        <input type="text" id="fname" name="fname" />
                        <label htmlFor="pw">Password:</label>
                        <input type="password" id="pw" name="pass" />
                        <input type="submit" value="Submit" />
                    </fieldset>
                </form>
                <Link to="/" className="home-link">Home</Link>
            </div>
        </div>
    );
};

export default Login;