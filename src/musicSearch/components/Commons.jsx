import React, { createRef, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../logo.svg';
import styleProps from '../style/styleProps';

const PageHeader = (props) => (
  <header className={props.className}>
    <NavLink to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{ display: 'flex' }}>
        <img style={{ width: '50px' }} src={logo} alt='LOGO' />
        <div
          style={{
            fontFamily: styleProps.logoFont,
            fontSize: styleProps.logoSize,
          }}
        >
          Musify
        </div>
      </div>
    </NavLink>
    <StyledSearchBox />
  </header>
);

const SearchBox = (props) => {
  const [clicked, setClicked] = useState(false);
  const [searchText, setSearchText] = useState('');
  const focusRef = createRef();

  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  }, [focusRef]);

  if (clicked) {
    return (
      <div
        className={props.className}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '500px',
          borderColor: styleProps.outlineColor,
        }}
      >
        <StyledInput
          type='text'
          onChange={(event) => setSearchText(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              setClicked(false);
            }
          }}
          value={searchText}
          ref={focusRef}
        />
        <div onClick={() => setClicked(false)}>Close</div>
      </div>
    );
  }

  return (
    <div className={props.className} onClick={() => setClicked(!clicked)}>
      Search...
    </div>
  );
};

const Sidebar = (props) => {
  const highlight = { backgroundColor: 'red' };
  const linkStyle = {
    display: 'block',
    fontSize: '1.5em',
    textDecoration: 'none',
    backgroundColor: `${styleProps.overlayColor}`,
    color: 'inherit',
    width: '100%',
    borderRadius: '10px',
    padding: '10px',
  };

  const styler = ({ isActive }) =>
    isActive ? { ...linkStyle, ...highlight } : linkStyle;

  return (
    <div className={props.className}>
      <NavLink to='/home' style={styler}>
        Home
      </NavLink>
      <NavLink to='/top-artists' style={styler}>
        Top Artists
      </NavLink>
    </div>
  );
};

const Heading = (props) => (
  <h1 style={{ fontSize: '2em', paddingBlock: '1em' }}>{props.heading}</h1>
);

const StyledSidebar = styled(Sidebar)`
  display: flex;
  flex-wrap: wrap;
  margin-right: 2em;
  border-right: 0.5px solid white;
  align-content: flex-start;
  gap: 10px;
  padding: 15px;
  height: 100%;
`;

const StyledHeader = styled(PageHeader)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledInput = styled.input`
  color: inherit;
  background-color: inherit;
  font-size: inherit;
  width: 100%;
  height: 100%;
  border-style: none;
  outline: none;
`;

const StyledSearchBox = styled(SearchBox)`
  border: 1px solid grey;
  width: 100px;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 20px;
  font-size: 1.2em;
  transition: 500ms ease;
  cursor: pointer;
  height: 40px;
  &:hover {
    width: 500px;
  }
`;

export { StyledHeader, StyledSearchBox, Heading, StyledSidebar };
