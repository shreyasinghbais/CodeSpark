import React from 'react';
import {AppBar, Toolbar, styled} from '@mui/material';

const Container = styled(AppBar)`
    background: #210338;
    position: static;
    border-bottom: 1px solid #2f2f2f;
    height: 10vh;
`;

const Header = () => {
    
  return (
    <div>
      <Container position='static'>
        <Toolbar>
            <h1>&lt;/&gt;&nbsp;CodeSpark</h1> 
        </Toolbar>
      </Container>
    </div>
  );
}

export default Header;
