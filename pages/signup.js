import React from 'react';
import Layout from '../components/layout';
import SignupForm from '../components/signupForm';
import StripeBanner from '../components/stripeBanner';

class Signup extends React.Component {
  render() {
    return (
      <Layout
        isAuthenticated={this.props.isAuthenticated}
        userProfile={this.props.userProfile}
        title="Signup"
        isSplashPage="true"
      >
        <div className="page-signup center-center">
          <div className="box popover">
            <h1>Create account</h1>
            <p className="supporting-text">
              Create a new account, or sign in with a{' '}
              <a href="/login">demo account</a>
            </p>
            <SignupForm />
          </div>
          <StripeBanner />
        </div>
        <style jsx>{`
          .page-signup {
          }
        `}</style>
      </Layout>
    );
  }
}

export default Signup;
