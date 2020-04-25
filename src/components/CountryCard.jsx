import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Property, Properties } from '../styles/components';
import { card } from '../styles/mixins';

const Container = styled(Link)`
  ${card};
  padding:0;
  width:calc(100% - 100px);
  margin:auto;
  overflow:hidden;
  @media screen and (min-width: 700px) {
    width:100%;
  }
`;

const Main = styled.div`
  padding:0 20px;
`;

const Flag = styled.img`
  width:100%;
  object-fit: cover;
  max-height: 160px;
`;

const Title = styled.p`
  font-weight: 800;
  font-size: 1.2em;
`;

const CountryCard = ({ data = {} }) => {
  const country = data ? data[0] : {};
  return (
    <Container to={`/${country.name}`}>
      <Flag src={country.flag} alt={country.name} />
      <Main>
        <Title>{country.name}</Title>
        <Properties>
          <Property>
            <b>population: </b>
            <span>
              {country.population}
            </span>
          </Property>
          <Property>
            <b>region: </b>
            <span>
              {country.region}
            </span>
          </Property>
          <Property>
            <b>capital: </b>
            <span>
              {country.capital}
            </span>
          </Property>
        </Properties>
      </Main>
    </Container>
  );
};

export default CountryCard;
