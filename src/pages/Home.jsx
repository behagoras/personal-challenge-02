import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Countries from '../components/Countries';
import CountriesService from '../services/countries';

const countriesService = new CountriesService();

const Home = (props) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const countriesPromises = await countriesService.getFullCountries();
      const localCountries = await Promise.all(countriesPromises);
      console.log('getData -> localCountries', localCountries);
      return localCountries;
    };
    getData().then((localCountries) => {
      setCountries(localCountries);
      props.dispatch({
        type: 'SET_STATE',
        payload: localCountries,
      });
      console.log('getData -> then -> countries', countries);
    });
  }, [null]);
  return (
    <div>
      <Countries />
    </div>
  );
};

export default connect()(Home);
