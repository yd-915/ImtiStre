import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout';
import StripeBanner from '../components/stripeBanner';

class Home extends React.Component {
  render() {
    return (
      <Layout
        isAuthenticated={this.props.isAuthenticated}
        userProfile={this.props.userProfile}
        title="ImtiStre"
        isSplashPage="true"
      >
        <div className="home">
          <div className="container">
            <div className="text">
              <h1>Sell and Subscribe to Apis with ease!</h1>
              <h2>
                Welcome to ImtiStre (not a typo, just trying to be cool). Here you can sell your apis and subscribe to other apis in our intergrated marketplace.
              </h2>
              <Link href="/signup">
                <a className="btn btn-primary">START</a>
              </Link>
            </div>
          </div>

          <StripeBanner />
        </div>
        <style jsx>{`
          .home {
            display: flex;
            height: 100%;
            align-items: center;
            padding-bottom: 30%;
          }

          h1 {
            font-size: 40px;
            font-weight: 600;
            color: #fff;
            width: 70%;
            margin-bottom: 30px;
          }

          h2 {
            font-size: 20px;
            font-weight: 600;
            color: #fff;
            width: 60%;
            margin-bottom: 30px;
          }

          .text {
            padding: 20px;
            position: relative;
            width: 100%;
            border: 0;
          }
          .btn btn-primary{
            background: #8956ff;
            color: #fff;
          }
        `}</style>
      </Layout>
    );
  }
}

export default Home;
