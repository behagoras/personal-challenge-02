import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import CountryCard from './CountryCard';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap:75px;
  max-width:1275px;
  margin:auto;
  padding:15px;
`;

const Countries = ({ filtered: countries = [] }) => {
  return (
    <Container>
      {
        countries.map((country) => <CountryCard key={country.name} data={country} />)
      }
    </Container>
  );
};
const mapStateToProps = ({ filtered }) => {
  return {
    filtered,
  };
};

export default connect(mapStateToProps)(Countries);
