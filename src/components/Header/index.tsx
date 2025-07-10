import React from 'react';
import HeaderList from './components/HeaderList';
import HeaderListItem from './components/HeaderListItem';
import Logo from '../Logo';
import HeaderLinks from './components/HeaderLinks';
import HeaderFormFilters from './components/HeaderFormFilters';
import HeaderAction from './components/HeaderAction';


const Header = () => {
  return (
  <header>
    <HeaderList>
      <HeaderListItem>
        <Logo src='/Logo.png' />
      </HeaderListItem>
      <HeaderListItem>
        <HeaderLinks />
      </HeaderListItem>
      <HeaderListItem>
        <HeaderFormFilters />
      </HeaderListItem>
      <HeaderListItem>
        <HeaderAction />
      </HeaderListItem>
    </HeaderList>
  </header>
  
  );
}

export default Header;
