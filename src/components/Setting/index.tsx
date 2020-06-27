import React, { useState } from 'react';
import '../../App.css';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from "react-router-dom";

import Header from '../common/header';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Setting() {
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const history = useHistory();

    const handleChangePassword = (event: any) => {
        event.preventDefault();
        if (username === 'demo' && oldPassword === 'demo') {
            alert('Password changed successfully');
            history.push("/login");
        } else {
            alert('Please enter valid details');
        }
    }

    return (
        <div className="App">
            <Header />
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Change Password
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Username"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            size="small"
                            onChange={e => setUsername(e.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="opassword"
                            label="Old Password"
                            type="password"
                            id="opassword"
                            autoComplete="current-password"
                            size="small"
                            onChange={e => setOldPassword(e.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="npassword"
                            label="New Password"
                            type="password"
                            id="npassword"
                            autoComplete="current-password"
                            size="small"
                            onChange={e => setNewPassword(e.target.value)}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={handleChangePassword}
                        >
                            Change Password
                        </Button>
                    </form>
                </div>
            </Container>
        </div>
    );
}
