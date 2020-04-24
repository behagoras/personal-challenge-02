import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import lightTheme from './styles/light';
import Home from './pages/Home';
import GlobalStyles from './styles/GlobalStyles';
import reducers from './reducers';

const Container = styled.div`
  width: 100%;
  border: ${(props) => `1px solid ${props.theme.colors.onyx}`};
  font-family: ${(props) => props.theme.fonts[0]};
`;

const store = createStore(reducers, []);

const App = () => {

  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <Container>
          <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/users">Users</Link>
                  </li>
                </ul>
              </nav>

              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/users">
                  <Users />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </Router>
        </Container>
      </ThemeProvider>
    </Provider>
  );
};

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
