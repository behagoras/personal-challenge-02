import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Countries from '../components/Countries';
import CountriesService from '../services/countries';
import Search from '../components/Search';
import Filters from '../components/Filters';

const countriesService = new CountriesService();

const Container = styled.div`
  padding: 15px;
  padding-top: 100px;
  font-size:14px;
`;

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
    <Container>
      <Search />
      <Filters />
      <Countries />
    </Container>
  );
};

export default connect()(Home);
