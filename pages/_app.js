import React from 'react';
import App, {Container} from 'next/app';
import API from '../helpers/api';
import logger from '../helpers/logger';
import nextCookie from 'next-cookies';
import Layout from '../components/layout';
import cookie from 'js-cookie';

export default class GlobalApp extends App {
  static getAuthenticationState(appContext) {
    let token = '';

    if (appContext && appContext.ctx) {
      token = nextCookie(appContext.ctx)['token'];
    } else {
      token = cookie.get('token');
    }

    const isAuthenticated = token !== undefined;

    return {
      token,
      isAuthenticated,
    };
  }

  static async getInitialProps(appContext) {
    let {token, isAuthenticated} = this.getAuthenticationState(appContext);

    // Ensure API is set for server-side-side
    API.setContext(appContext.ctx);
    API.setToken(token);

    let userProfile;
    if (token) {
      userProfile = await API.makeRequest('get', '/api/profile');
    }

    let appProps = await App.getInitialProps(appContext);
    let props = {...appProps, token, isAuthenticated, userProfile};

    return props;
  }

  render() {
    const {
      Component,
      pageProps,
      token,
      isAuthenticated,
      userProfile,
    } = this.props;

    if (token) {
      // Ensure token is set for client-side
      API.setToken(token);
    }

    let renderProps = {...pageProps, token, isAuthenticated, userProfile};

    return <Component {...renderProps} />;
  }
}
