import React, { useState } from 'react';
import { connect } from 'react-redux';


import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import PhoneForm from '../../components/auth/PhoneForm';
import EmailForm from '../../components/auth/EmailForm';



// import { setAuth, login } from '../../redux/auth/auth.actions'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    titleRow: {
        marginTop: theme.spacing(6),
    }
}));

const LocalSignupPage = () => {
    const classes = useStyles();
    const [type, setType] = useState("email");

    const handleChange = (event, v) => {
        setType(v);
    }

    const handleSignup = (data) => {
        // setAuth(true);
        // login(data);
    }

    const handleSendCode = () => {

    }

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Tabs variant="fullWidth" value={type} onChange={handleChange}>
                    <Tab value="email" label="Email" />
                    <Tab value="phone" label="Phone" />
                </Tabs>
                <Typography className={classes.titleRow} component="h1" variant="h5">
                    Sign up
                </Typography>
                {type === "email" && (
                    // <Box p={3}>
                    <EmailForm type="signup" btnText="Sign up" onSubmit={handleSignup} />
                    // </Box>
                )}
                {type === "phone" && (
                    // <Box p={3}>
                    <PhoneForm btnText="Send code" onSubmit={handleSendCode} />
                    // </Box>
                )}
            </div>
        </Container>
    )    
}

export default LocalSignupPage;