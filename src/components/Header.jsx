import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Container = styled.header`
  position:fixed;
  top:0;
  left:0;
  right:0;
  width:100%;
  height:auto;
  background:${(props) => props.theme.colors.ui};
  padding:15px 0;
  box-shadow: 10px 10px 16px -8px rgba(0,0,0,0.25);
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
  color:black;
  text-decoration:none;
`;

const Anchor = styled.a`
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
        <Anchor href="/"><Title>Where in the World</Title></Anchor>
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
