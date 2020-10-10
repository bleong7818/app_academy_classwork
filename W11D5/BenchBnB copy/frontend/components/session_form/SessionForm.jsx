import React from 'react';
import { Link } from 'react-router-dom'

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: '',
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors () {
        return (
            <ul>
                {this.props.errors.map((error) => (
                <li>
                   {error}
                </li>
                ))}
            </ul>
        )
    }

    render() {
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    Welcome to BenchBnB!
                    <br/>
                    {this.renderErrors()}
                    <div className="login-form">
                        <label>Username:
                            <input type="text"
                            value={this.state.name}
                            onChange={this.update('name')}
                            />
                        </label>
                        <br/>
                        <label>Email:
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                            />
                        </label>
                        <br/>
                        <label>Password:
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                        </label>
                        <br/>
                        <input type="submit" value={this.props.formType}/>
                    </div>
                </form>
                {this.props.formType === 'login' ? <Link to="/signup">Sign Up</Link> : <Link to="/login">Login</Link>}
            </div>
        )
    }
}

export default SessionForm;