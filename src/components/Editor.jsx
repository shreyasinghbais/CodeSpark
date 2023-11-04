import React from 'react';
import { useState } from 'react';
import { Box, styled } from '@mui/material';
// import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import {Controlled as ControlledEditor} from 'react-codemirror2';
import '../App.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

const Container = styled(Box)`
  flex-grow: 1;
  flex-basic: 0;
  display: flex;
  flex-direction: column;
  padding: 0px 8px 8px;
`;
const Header =styled(Box)`
    display: flex;
    background: #210338;
    color: #AAAEBC;
    justify-content: space-between;
    font-weight: 700;
`;
const Heading = styled(Box)`
    background: #3e0669;
    display: flex;
    padding: 9px 12px;
`;
const Editor = ({heading, icon, color, value, onChange}) => {
  
  // const [open, setOpen] = useState(true);
  const handleChange = (editor, data, value) => {
    onChange(value);
  }
  return (
    <Container> {/*style={open ? null : {flexFlow: 0}}*/}
      <Header>
        <Heading>
            <Box component='span'
              style={{
                background: color,
                borderRadius: 5,
                marginRight: 5,
                height: 20,
                width: 20,
                display: 'flex',
                placeContent: 'center',
                paddingBottom: 2,
                color: '#000'
              }}
            >{icon}</Box>
            {heading}
        </Heading>
        {/* <CloseFullscreenIcon 
          fontSize='small'
          style={{alignSelf: 'center'}}
          onClick={() => setOpen(prevState => !prevState)}
        /> */}
      </Header>
      <ControlledEditor 
        className='controlled-editor'
        onBeforeChange={handleChange}
        value={value}
        options={{
          theme: 'material',
          lineNumbers: true
        }}
      />
    </Container>
  );
}

export default Editor;
