import React, { useEffect, useState } from 'react';
import { Switch, Route, BrowserRouter as Router, useParams } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import Home from '../pages/Home';
import GlobalStyles from '../styled/GlobalStyles';

import CountriesService from '../services/countries';

import lightTheme from '../styled/themes/light';
import darkTheme from '../styled/themes/dark';
import Header from '../components/Header';
import Country from '../pages/Country';

const Container = styled.div`
  width: 100%;
  border: ${(props) => `1px solid ${props.theme.colors.onyx}`};
`;

const Main = styled.div`
  padding-top: 100px;
`;
const countriesService = new CountriesService();

const AppLayout = (props) => {
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

  console.log('AppLayout -> state', props.countries);
  return (
    <ThemeProvider theme={props.dark ? darkTheme : lightTheme}>
      <Router>
        <GlobalStyles />
        <Container>
          <Header />
          <Main>
            {/* <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
              </ul>
            </nav> */}
            <Switch>
              <Route path="/:country">
                <Country />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Main>
        </Container>
      </Router>
    </ThemeProvider>

  );
};

const mapStateToProps = ({ countries, dark }) => {
  return {
    countries,
    dark,
  };
};

export default connect(mapStateToProps)(AppLayout);
