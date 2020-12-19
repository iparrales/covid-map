import React from 'react';

import { Cards, Chart, CountryPicker } from '../components2';
import styles from './about2.module.css';
import { fetchData } from '../api';

import covidImg from '../assets/images/covid.png';

import Header from 'components/Header';


class About2 extends React.Component{

    state = {
        data: {},
        country: '',
    }

    async componentDidMount(){
        const fetchedData = await fetchData();

        this.setState({data: fetchedData});
    }


    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        
        this.setState({ data: fetchedData, country: country });
    }

    render() {
        const { data, country } = this.state;

        return(
            <div className={styles.container}>
                <Header />
                <h1 className='Title'>Global Covid-19 Data</h1>
                <img className={styles.image} src={covidImg} alt="CORONA VIRUS"></img>
                <Cards data={data}/>
                <CountryPicker  handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default About2;