export default function StripeBanner(props) {
  return (
    <div className="annotation">
      <p>
        <img src="/IF.svg" width="60" />
        ImtiStre is a{' '}
        <a className="stripe" href="https://stripe.com">
          Subdivision
        </a>{' '}
        of{' '}
        <a href="https://stripe.com/connect" target="_blank">
          
        </a>{' '}
        IFTIIN.{' '}
        <a
          className="github arrow"
          href="https://iftiin.io"
          target="_blank"
        >
          Visit Us
        </a>.
      </p>

      <style jsx>
        {`
          .annotation {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 20px;
            min-height: 50px;

            background: #8956ff;
            text-align: center;
            font-size: 12px;
          }

          .annotation img,
          .annotation a,
          .annotation p {
            display: inline-block;
            margin: 0;
            color: #FFCE56;
          }

          .annotation img {
            margin-right: 10px;
          }

          .annotation a:link,
          .annotation a:visited {
            color: #fff;
          }

          @media (min-width: 820px) {
            .annotation {
              max-width: 800px;
              margin-left: auto;
              margin-right: auto;
              bottom: 30px;
              border-radius: 50px;
              padding: 10px;
            }

            h1 {
              font-size: 60px;
            }
          }
        `}
      </style>
    </div>
  );
}
