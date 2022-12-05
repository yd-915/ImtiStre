// www/pages/login.js

import {Component} from 'react';
import {handleLogin} from '../utils/auth';
import logger from '../helpers/logger';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginAsDemo = this.loginAsDemo.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  }

  loginAsDemo() {
    this.setState({
      email: 'shop@missioncoffee.com',
      password: 'test',
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const url = `/api/login/token`;
    const {username, password} = this.state;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(this.state),
      });
      if (response.ok) {
        const {token} = await response.json();
        handleLogin(token);
      } else {
        logger.log('Login failed.');
        this.setState({
          error: response.statusText,
        });
      }
    } catch (error) {
      console.error(
        'You have an error in your code or there are Network issues.',
        error,
      );
      this.setState({
        error: response.statusText,
      });
    }
  }

  render() {
    return (
      <>
        <div className="login">
          <p className="supporting-text">
            You can sign in with your own account, or our demo account.
          </p>
          <form onSubmit={this.handleSubmit}>
            <button
              className="btn btn-secondary btn-full"
              onClick={this.loginAsDemo}
            >
              Login as Mission Coffee Co
            </button>

            <input
              className="icon-input new-section email"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <input
              className="icon-input password"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />

            <button type="submit" className="btn btn-primary btn-full">
              Sign in
            </button>

            <p className={`error ${this.state.error && 'show'}`}>
              {this.state.error && `Error: ${this.state.error}`}
            </p>
          </form>
        </div>
        <style jsx>{`
          .new-section {
            margin-top: 16px;
          }

          .email {
            background: url(/email.svg) no-repeat scroll 7px 6px;
            background-size: 20px 20px;
            background-position: 16px 14px;
          }

          .password {
            background: url(/lock.svg) no-repeat scroll 7px 6px;
            background-size: 20px 20px;
            background-position: 16px 14px;
          }

          .error {
            margin: 0.5rem 0 0;
            display: none;
            color: brown;
          }

          .error.show {
            display: block;
          }
        `}</style>
      </>
    );
  }
}
