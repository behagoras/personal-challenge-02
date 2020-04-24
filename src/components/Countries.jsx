import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import CountryCard from './CountryCard';

const Container = styled.div``;

const Countries = ({ countries = [] }) => {
  return (
    <Container>
      {
        countries.map((country) => <CountryCard key={country.name} data={country} />)
      }
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    countries: state,
  };
};

export default connect(mapStateToProps)(Countries);
