import React from 'react';

import { USCards, USChart, StatePicker } from '../components2';
import { fetchUSData } from '../api';
import styles from './about3.module.css';
import Header from 'components/Header';
import covidImg from '../assets/images/covid.png';



class About extends React.Component {

  state ={
    data: {},
    state:'',
    
  }

  async componentDidMount() {
    const fetchedUSdata = await fetchUSData();

    this.setState({ data: fetchedUSdata });
  }

  handleStateChange = async (state) => {
    const fetchedUSdata = await fetchUSData(state);

    this.setState({data: fetchedUSdata, state: state });    
  }



  render() {
    const {data, state} = this.state;

    return (
      <div className={styles.container}>
        <Header />
        <h1 className='Title'>United States Covid-19 Data</h1>
        <img className={styles.image} src={covidImg} alt="CORONA VIRUS"></img>
        <USCards data={data}/>
        <StatePicker handleStateChange={this.handleStateChange}/>
        < USChart data={data} state={state}/>
      </div>
    );
  }
}

export default About;
































// import React from 'react';
// import ReactDOM from "react-dom";
// import "react-simple-maps";
// import { Helmet } from 'react-helmet';


// import "../assets/stylesheets/pages/USAmap.css"
// import MapChart from "../components/USAmap.js"


// import { useSiteMetadata } from 'hooks';

// import Layout from 'components/Layout';
// import Container from 'components/Container';
// import Header from 'components/Header';


// const SecondPage = () => {
//   const { companyName, companyUrl, authorName, authorUrl, siteDescription } = useSiteMetadata();

//   return (
//     <>
//     <Header />
//       <MapChart />
//       {/* <body>
//           <iframe src="https://public.domo.com/cards/axpDJ" width="100%" height="600" marginheight="0" marginwidth="0" frameborder="0"></iframe>
//           <iframe src="https://public.domo.com/cards/dyqEV" width="100%" height="600" marginheight="0" marginwidth="0" frameborder="0"></iframe>
//           <iframe src="https://public.domo.com/cards/azrGr" width="100%" height="600" marginheight="0" marginwidth="0" frameborder="0"></iframe>

//       </body> */}
//     </>
//   );
// };

// const rootElement = document.getElementById("root")
// //ReactDOM.render(<SecondPage />, rootElement)

// export default SecondPage;
