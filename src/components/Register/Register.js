import React from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Please Register</h2>
            <form>
                <input type="email" />
                <br />
                <input type="password" />
                <br />
                <input type="submit" value="submit" />
            </form>
            <NavLink to="/login">Already Register?</NavLink>
        </div>
    );
};

export default Register;