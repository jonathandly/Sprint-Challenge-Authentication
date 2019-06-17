import React from 'react';
import { withRouter } from 'react-router-dom';
import api from '../helpers/api';

class Register extends React.Component {
    state = {
        username: '',
        password: '',
    }

    submit = async (evt) => {
        evt.preventDefault();

        try {
            const { username, password } = this.state;

            const result = await api.post('/register', {
                username,
                password
            });
            localStorage.setItem('token', result.data.token);
            this.props.history.push('/jokes');
        } catch(err) {
            console.error(err);
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return (

            <>
                <h1>Register</h1>

                <form onSubmit={this.submit}>
                    <input 
                        type="text"
                        id="username"
                        placeholder="Username"
                        onChange={this.handleChange}
                        value={this.state.username}
                    />
                    <input 
                        type="password"
                        id="password"
                        placeholder="Password"
                        onChange={this.handleChange}
                        value={this.state.password}
                    />
                    <button type="submit">Register</button>
                </form>
            </>
        );
    }
}

export default withRouter(Register);
