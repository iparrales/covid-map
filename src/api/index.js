import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

const url2 = 'https://disease.sh/v3/covid-19/countries/USA'

const url3 = 'https://disease.sh/v3/covid-19/states'


export const fetchData = async (country) => {
    let changingURL = url;

    if(country){
        changingURL = `${url}/countries/${country}`;
    }

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate} } = await axios.get(changingURL);
        
        return {confirmed, recovered, deaths, lastUpdate  };

    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportedDate,
        }));

        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}

export const fetchCountries = async () => {
    try {
        const { data:  {countries }} = await axios.get(`${url}/countries`);
        
        return countries.map((country) => country.name);
    } catch (error) {
        console.log(error);
    }
}


export const fetchUSData = async (state) => {
    let tempURL = url2;

    if(state){ 
        tempURL = `${url3}/${state}`; 
    }

    try {
        const { data: {cases, deaths, recovered, population, updated}} = await axios.get(tempURL);

        return {cases, deaths, recovered, population, updated}
        
    } catch (error) {
        
    }
}

export const fetchDailyData2 = async () => {
    try {
      const { data } = await axios.get('https://api.covidtracking.com/v1/us/daily.json');

      return data.map(({ positive, recovered, death, dateChecked: date }) => ({ confirmed: positive, recovered, deaths: death, date }));
    } catch (error) {
      return error;
    }
  };

  export const fetchStates = async () => {
    try {
        const {data} = await axios.get(url3);

        return data.map((state) => state.state);        
    } catch (error) {
        
    }

  };

  export const fetchMapData = async () => {
      try {
        const { data: {state, cases, deaths, recovered, population, updated}} = await axios.get(url3);

        return {state, cases, deaths, recovered, population, updated} 
      } catch (error) {
        
      }
  }