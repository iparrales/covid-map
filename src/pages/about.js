import React from 'react';
import ReactDOM from "react-dom";
import "react-simple-maps";
import { Helmet } from 'react-helmet';


import "../assets/stylesheets/pages/USAmap.css"
import MapChart from "../components/USAmap.js"


import { useSiteMetadata } from 'hooks';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Header from 'components/Header';


const SecondPage = () => {
  const { companyName, companyUrl, authorName, authorUrl, siteDescription } = useSiteMetadata();

  return (
    <>
    <Header />
      <MapChart />
      {/* <body>
          <iframe src="https://public.domo.com/cards/axpDJ" width="100%" height="600" marginheight="0" marginwidth="0" frameborder="0"></iframe>
          <iframe src="https://public.domo.com/cards/dyqEV" width="100%" height="600" marginheight="0" marginwidth="0" frameborder="0"></iframe>
          <iframe src="https://public.domo.com/cards/azrGr" width="100%" height="600" marginheight="0" marginwidth="0" frameborder="0"></iframe>

      </body> */}
    </>
  );
};

const rootElement = document.getElementById("root")
//ReactDOM.render(<SecondPage />, rootElement)

export default SecondPage;
