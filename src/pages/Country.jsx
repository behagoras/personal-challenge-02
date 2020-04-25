import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { card } from '../styles/mixins';
import { Property, Properties } from '../styles/components';

const Flag = styled.img`
  width:100%;
  object-fit: cover;
  max-height: 160px;
`;

const Container = styled.div``;
const Main = styled.div``;
const Title = styled.h1``;

const Borders = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(50px,1fr));
`;

const Border = styled.div`
  ${card};
`;

const Country = ({ countries = [] }) => {
  const [country, setCountry] = useState([{}]);
  const { country: countryName } = useParams();
  useEffect(() => {
    const localCountries = countries.filter((c) => c[0].name === countryName)[0];
    setCountry(localCountries && localCountries[0]);
  }, [countries]);
  console.log(useParams());
  console.log('my country', country);
  return (
    <Container>
      {
        country && (
          <Main>
            <Flag src={country.flag} alt={country.name} />
            <Title>{country.name}</Title>
            <Properties>
              <Property>
                <b>nativeName: </b>
                <span>
                  {country.nativeName}
                </span>
              </Property>
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
                <b>subregion: </b>
                <span>
                  {country.subregion}
                </span>
              </Property>
              <Property>
                <b>capital: </b>
                <span>
                  {country.capital}
                </span>
              </Property>

            </Properties>
            <Properties>
              <Property>
                <b>topLevelDomain: </b>
                <span>
                  {country.topLevelDomain}
                </span>
              </Property>
              <Property>
                <b>currencies: </b>
                <span>
                  {
                    country.currencies && country.currencies.map((currency) => `${currency.name},`)
                  }
                </span>
                <span>
                  {
                    country.languages && country.languages.map((currency) => `${currency.name},`)
                  }
                </span>
              </Property>
            </Properties>
            <Borders>
              {
                country.borders &&
                country.borders.map((border) => <Border>{border}</Border>)
              }
            </Borders>
          </Main>
        )
      }
    </Container>
  );
};

const mapStateToProps = ({ countries }) => {
  return {
    countries,
  };
};

export default connect(mapStateToProps)(Country);
