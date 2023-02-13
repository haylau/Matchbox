import * as React from 'react'
import { Link } from 'react-router-dom'
import './CSS/LandingPage.css'
import illustration from '../img/landing-img.svg' // matchstick illustration 

// aws imports
import awsconfig from '../aws-exports'
import {Amplify} from 'aws-amplify'
import { CreateNewsletterEmailModelInput  } from "../API";
import { CreateNewsletterEmailModelPayload } from "../backend/types";
import { createNewsletterEmail } from "../../src/backend/mutations/newsletterMutations"

// component imports
import LandingPopupLogin from '../components/LandingPopupLogin';
import LandingPopupConfirm from '../components/LandingPopupConfirm';

// MUI imports
import { TextField } from '@mui/material'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

// form control imports
import { useFormik } from "formik";
import * as yup from "yup";

// animation imports
import Aos from 'aos';
import 'aos/dist/aos.css';

// data import 
import { about } from './LandingPageData' 


Amplify.configure(awsconfig)
const payload: CreateNewsletterEmailModelPayload = {
  input: {
    email: ''
  }
}

export default function LandingPage() {
  // email signup textfield handling [leave this here, will be used later]
  // const [userEmail, setUserEmail] = React.useState("");
  // const handleEmailChange = (event : any) => {
  //   setUserEmail(event.target.value);
  // }
  
  // email signup database mutation
  async function sendToDatabase(values : any) {
    console.log(values.email);
    payload.input.email = values.userEmail;
    const request = await createNewsletterEmail(payload);
  }

  // login popup handling
  const [isLoginOpen, setIsLoginOpen] = React.useState(false)
  const [isConfirmOpen, setIsConfirmOpen] = React.useState(false);
  function NoAccount() {
    setIsLoginOpen(false);
    setIsConfirmOpen(false);
  }

  // page animations
  Aos.init({
    duration: 2500,
    delay: 400,
  });

  // remake object for about section [leave this here]
  const { title, subtext } = about;

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      sendToDatabase(values);
      setIsConfirmOpen(true); // trigger confirmation popup
      formik.resetForm();
    },
  });

  return (
    <div className='landing'>
      <LandingPopupLogin trigger={isLoginOpen} setTrigger={setIsLoginOpen} setCreateOpen = {NoAccount}/>
      <LandingPopupConfirm trigger={isConfirmOpen} setTrigger={setIsConfirmOpen}/>
      <div className='top-container'>
        <div className='header-stack'>
          <div className='logobox'>
            <span className='logo'>Matchbox</span>
          </div>
          <Stack className='nav-stack' direction='row'>
            {/* TODO link scoll animation here later */}
            {/* <Button
              sx={{
                color: '#000000',
                fontSize: 'max(20px, 10px);',
              }}
            >
              {' '}            
              <Link to="#about" /> 
              About Us
            </Button> */}
            {/* login button */}
            <Button
              sx={{
                color: '#000000',
                fontSize: 'max(20px, 10px);',
              }}
              onClick={() => setIsLoginOpen(true)}
            >
              {' '}
              Login
            </Button>
          </Stack>
        </div>
        <div className='landing-container'>
          <Stack
            className='text-stack'
            direction='column'
            sx={{
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <h1 
              className='title-text'          
              data-aos='fade-down'
              data-aos-delay='600'
            > 
              Matchbox: Bridging between ideas and execution 
            </h1>
            <p
              className='sub-text'           
              data-aos='fade-down'
              data-aos-delay='800'
            >
              Matchbox is a project collaboration platform that curates
              countless relevant projects in seconds. 
            </p>
          </Stack>
          <img className='matchstick' src={illustration}         
              data-aos='fade-right'
              data-aos-delay='900'></img>
        </div>
      </div>     
      <div className='about-section'>
        <div className="about-container">
          <div className='signup-stack'>
          <h2 className='signText'>Sign up to get free access to preview upon release.</h2>
          <div className='signup-entry'>
            <form className='signup-entry' onSubmit={formik.handleSubmit}>
              <TextField 
                id="email"
                variant="filled"  
                color="#FFFFFF" 
                placeholder="Email" 
                sx={{ backgroundColor: '#FFFFFF', width:'35em'}}
                value = {formik.values.email}
                onChange = {formik.handleChange} 
                error={
                  formik.touched.email && Boolean(formik.errors.email)
                }
                helperText={formik.touched.email && formik.errors.email} 
              /> 
           
            <Button onClick={() => formik.handleSubmit()}
              id='submit-btn'
              disabled={formik.isSubmitting}
                sx={{
                  backgroundColor: '#F68084',
                  width:'15%',
                  height :'55px',
                  fontSize:'max(14px, 5px);', '&:hover': {
                  backgroundColor:'#f59da0',
                  },
                  mx:'10px',
                }}
                variant='contained'
              > 
                Sign Up
              </Button>
            </form>
            
          </div>
        </div>
        {/* TODO about information to add about section in the future */}
        {/* <div className="about-text-container">
        <a href="#about"> </a>

        <p className='about-title-text' 
        data-aos='fade-up'
        data-aos-delay='100'>About us</p>
        <p className='about-sub-text'
        data-aos='fade-up'
        data-aos-delay='200'>
        {subtext} 

        Matchbox is a platform connecting developers to open source projects and connecting project owners and organizations to qualified developers. 
        Our mission is to empower developers and project owners by streamlining the process of finding and collaborating on open source projects. 
        </p>
        </div> */}          
        </div>
      </div>       
  </div>
  );
}
