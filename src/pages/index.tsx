import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = (props) => {
  return (
    <Layout>
      <Seo title="Home" />
      <h1>Hi people</h1>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={['AUTO', 'WEBP', 'AVIF']}
        alt="A Gatsby astronaut"
        style={{ marginBottom: '1.45rem' }}
      />
      <p>
        <Link to="/page-2/">Go to page 2</Link>
        {' '}
        <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
    </Layout>
  )
};

export default IndexPage;
