import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Box, TextField, Button, Typography, Link, Grid, Paper, useMediaQuery } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import account from '../components/data/account.json';
import logo from '../assets/images/1.png';
import logolama from '../assets/images/2.png';

const Login = ({ handleLogin }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [emailLama, setEmailLama] = useState('');
    const [nip, setNip] = useState('');
    const [passwordLama, setPasswordLama] = useState('');
    const [error, setError] = useState('');
    const [showSignIn, setShowSignIn] = useState(true);
    const history = useHistory();

    const isMobile = useMediaQuery('(max-width:600px)');

    const resetForm = () => {
        setUsername('');
        setEmail('');
        setEmailLama('');
        setNip('');
        setPasswordLama('');
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = account.data.find(user => user.PASSWORD === email && user.NIPBARU === nip);
        if (user) {
            toast.success('Login Berhasil !');
            history.push('/dashboard');
            handleLogin();
        } else {
            setError('Invalid NIP or Email');
            toast.error('Login Gagal !');
        }
    };

    const handleSubmitLama = (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailLama)) {
            setError('Format Email Salah');
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
        if (!passwordRegex.test(passwordLama)) {
            setError('Password harus memiliki huruf besar, kecil, dan simbol');
            return;
        }

        if (username.length < 6) {
            setError('Username harus lebih dari 5 karakter');
            return;
        }
        setError('');
    };

    const backgroundImageStyle = {
        backgroundImage: `url(${require('../assets/images/bg.jpg')})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
    };

    return (
        <div style={backgroundImageStyle}>
            <Container maxWidth="md" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <ToastContainer />
                {showSignIn ? (
                    <Paper elevation={3} style={{ padding: 20, width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.3)', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)' }}>
                        <Grid container>
                            {!isMobile && (
                                <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Box style={{ textAlign: 'center', display: 'block', width: '100%', }}>
                                        <img src={logo} alt="Digital Transformation" style={{ maxWidth: '100%' }} />
                                    </Box>
                                </Grid>
                            )}
                            <Grid item xs={12} md={6}>
                                <Box style={{ padding: 20 }}>
                                    <Typography variant="h5" style={{ marginBottom: 20 }}>Sign In</Typography>
                                    <form noValidate onSubmit={handleSubmit}>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            label="NIP"
                                            autoComplete="nip"
                                            value={nip}
                                            onChange={(e) => setNip(e.target.value)}
                                        />
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            label="Password"
                                            autoComplete="password"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        {error && <Typography color="error">{error}</Typography>}
                                        <Button type="submit" fullWidth variant="contained" color="primary" style={{ margin: '20px 0' }}>Sign In</Button>
                                        <Typography variant="body2" style={{ marginTop: 10 }}>
                                            Don't have an account? <Link href="#" onClick={() => { resetForm(); setShowSignIn(false); }}>Sign up</Link>
                                        </Typography>
                                    </form>
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>
                ) : (
                    <Paper elevation={3} style={{ padding: 20, width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.3)', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)' }}>
                        <Grid container>
                            {!isMobile && (
                                <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Box style={{ textAlign: 'center', display: 'block', width: '100%', }}>
                                        <img src={logolama} alt="Digital Transformation" style={{ maxWidth: '100%' }} />
                                    </Box>
                                </Grid>
                            )}
                            <Grid item xs={12} md={6}>
                                <Box style={{ padding: 20 }}>
                                    <Typography variant="h5" style={{ marginBottom: 20 }}>Sign Up</Typography>
                                    <form noValidate onSubmit={handleSubmitLama}>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            label="Username"
                                            autoComplete="username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            label="Email Address"
                                            autoComplete="email"
                                            value={emailLama}
                                            onChange={(e) => setEmailLama(e.target.value)}
                                        />
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            label="Password"
                                            autoComplete="password"
                                            value={passwordLama}
                                            onChange={(e) => setPasswordLama(e.target.value)}
                                        />
                                        {error && <Typography color="error">{error}</Typography>}
                                        <Button type="submit" fullWidth variant="contained" color="primary" style={{ margin: '20px 0' }}>Sign Up</Button>
                                        <Typography variant="body2" style={{ marginTop: 10 }}>
                                            You have an account? <Link href="#" onClick={() => { resetForm(); setShowSignIn(true); }}>Sign In</Link>
                                        </Typography>
                                    </form>
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>
                )}
            </Container>
        </div>
    );
};

export default Login;
