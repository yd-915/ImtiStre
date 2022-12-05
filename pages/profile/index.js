import React from 'react';
import {redirect} from '../../utils/redirect';

import Layout from '../../components/layout';
import API from '../../helpers/api';
import DashboardHeader from '../../components/dashboardHeader';

class Profile extends React.Component {
  constructor(props) {
    super();
  }

  static async getInitialProps(context) {
    return {
      profile: await API.makeRequest('get', '/api/profile'),
    };
  }

  componentDidMount() {
    // TODO: Move this to a server side check
    if (!this.props.isAuthenticated) {
      redirect('/login');
    }
  }

  render() {
    let profile = this.props ? this.props.profile : {};
    let avatarUrl = profile ? profile.avatar : '/avatar.png';

    return (
      <Layout
        isAuthenticated={this.props.isAuthenticated}
        userProfile={this.props.userProfile}
        title="Profile"
      >
        <div className="profile">
          <h4>Your profile details</h4>
          <pre className="profile-details bg-light">
            <code>{JSON.stringify(profile, null, 2)}</code>
          </pre>
        </div>
        <style jsx>{`
          .profile h4 {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 30px;
          }

          .profile-details {
            padding: 10px;
          }
        `}</style>
      </Layout>
    );
  }
}

export default Profile;
