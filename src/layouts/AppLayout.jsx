import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import Home from '../pages/Home';
import GlobalStyles from '../styles/GlobalStyles';

import lightTheme from '../styles/light';
import darkTheme from '../styles/dark';

const Container = styled.div`
  width: 100%;
  border: ${(props) => `1px solid ${props.theme.colors.onyx}`};
`;

const AppLayout = ({ countries, theme }) => {
  console.log('AppLayout -> state', countries);
  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Container>
        <Router>
          {/* <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
              </ul>
            </nav> */}
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
        </Router>
      </Container>
    </ThemeProvider>

  );
};

const mapStateToProps = ({ countries, theme }) => {
  return {
    countries,
    theme,
  };
};

export default connect(mapStateToProps)(AppLayout);
