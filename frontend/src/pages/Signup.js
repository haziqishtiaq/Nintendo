import {Link} from 'react-router-dom';
import './signup.css';

const Signup = () => {    
    return (
        <div >
            <form className='signup'>
            <fieldset>
                <legend>SignUp</legend>
                <label for="name"> Name:</label>
                <input type="text" id="name" name="name" />
                <label for="pw">Password:</label>
                <input type="password" id="pw" name="pw" />
                <label for="age">Age:</label>
                <input type="number" id="age" name="age" />
                <input type="submit" value="Submit" />
            </fieldset>
            </form>
            <Link to='/'>Home</Link>
        </div>
        );
};

export default Signup;