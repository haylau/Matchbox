import { React, useState, useSyncExternalStore } from 'react';
import './LandingPage.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import illustration from './../img/landing-img.svg'; // matchstick illustration
import { createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    anger: createColor('#F40B27'),
    apple: createColor('#5DBA40'),
    steelBlue: createColor('#5C76B7'),
    violet: createColor('#BC00A3'),
    black: createColor('#000000'),
  },
});

export default function LandingPage(){
    return(
        <div className='Starting'>
            <head>
                <title>landing</title>
            </head>
            <div className='navHome'> 
                {/* logo */}
                <div className ="logobox">
                <span className='logo'>Matchbox</span>
                {/* about us link */}
            </div>
            <Stack className = "LandingStack" direction="row">
               <Button sx = {{
                    color: 'black',
                }}> About Us</Button>
                {/* sign up link */}
                <Button component = {Link}  to = "/create-project" sx = {{
                    color: 'black',
                }}> Get Started</Button>
                {/* login button */}
                <Button variant='contained' 
                sx ={{
                    backgroundColor: '#6259b9',
                    color: 'white',
                    '&:hover': {
                        backgroundColor: '#716ab4',
                    }
                }}> Login</Button>
            </Stack>
            </div>
            <Stack className = "BoxStack" spacing={2} direction="row" > 
                <Stack className = "textStack" direction="column" spacing={1} sx={{ 
                    justifyContent: 'center',
                    width: '100%',
                }}>
                    {/* landing title & description */}
                    <p className='subtext'> Welcome to Matchbox </p>
                    <p className='leadingtext'> Discover a project </p>
                    <p className='leadingtext'> you'll love.</p>
                    <p className='subtext'> Get instantly matched with open source projects </p>
                    <p className='subtext'> with a straight-forward process </p>
                </Stack>

                <img className='firestick' src={illustration}></img>
            </Stack>

            <Button sx = {{
                backgroundColor: '#6259b9',
                marginLeft: '4rem',
                width: '8rem',
                height: '3rem',
                '&:hover': {
                    backgroundColor: '#716ab4',
                }
            }}
            variant="contained"> Get Started</Button>
        </div>
    );

}