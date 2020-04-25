import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link as LinkRouter } from 'react-router-dom';
import { card } from '../styled/mixins';

const Container = styled.header`
  ${card};
  position:fixed;
  top:0;
  left:0;
  right:0;
  width:100%;
  height:auto;
  padding:15px 0;
`;

const Main = styled.div`
  /* width:100%; */
  max-width:1275px;
  display:grid;
  grid-template-columns: auto auto;
  justify-content:space-between;
  margin:auto;
  padding:0 15px;
`;

const Title = styled.h1`
  font-size:20px;
  color:${(props) => props.theme.colors.text};
`;

const Link = styled(LinkRouter)`
  text-decoration:none;
`;

const Button = styled.button`
  display:flex;
  font-weight:600;
  font-family: 'Nunito Sans', sans-serif;
  color: ${(props) => props.theme.colors.text};
  background:none;
  border:none;
  cursor: pointer;
  font-size:18px;
  & span{
  }
  & i{
    margin-right: 10px;
  }
`;

const Header = ({ dark, dispatch }) => {
  const handleClick = (event) => {
    event.preventDefault();
    dispatch({
      type: 'SET_THEME',
      payload: !dark,
    });
  };
  return (
    <Container>
      <Main>
        <Link to="/"><Title>Where in the World</Title></Link>
        {
          dark ? (
            <Button onClick={handleClick} type="button">
              <i className="fa fa-moon-o" aria-hidden="true" />
              <span>Dark Mode</span>
            </Button>
          ) : (
            <Button onClick={handleClick} type="button">
              <i className="fa fa-sun-o" aria-hidden="true" />
              <span>Light Mode</span>
            </Button>
          )
        }
      </Main>
    </Container>
  );
};

const mapStateToProps = ({ dark }) => {
  return {
    dark,
  };
};

export default connect(mapStateToProps)(Header);
