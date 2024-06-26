import React, { useState } from 'react';
import { Avatar, TextField, Button, Typography, Link } from '@mui/material';
import ChartCard from "../shared/ChartCard";
import PageTitle from "../shared/PageTitle";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const IndexProfil = () => {
  const [showChangePassword, setShowChangePassword] = useState(false);

  const handleChangePasswordClick = () => {
    setShowChangePassword(true);
  };

  const handleCancelClick = () => {
    setShowChangePassword(false);
  };

  return (
    <div className="grid gap-6 mt-5 mb-6 grid-cols-1 xl:grid-cols-2">
      <div className="grid gap-6 mt-2 mb-2 grid-cols-1 xl:grid-cols-1">
        <PageTitle>Profil Saya</PageTitle>
        <ChartCard>
          <Avatar sx={{ width: 200, height: 200, margin: 'auto', bgcolor: '#BDCFFF' }}>
            <AccountCircleIcon sx={{ fontSize: 210, color: '#6993FF' }} />
          </Avatar>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Button variant="text" color="error">
              Belum Verifikasi
            </Button>
          </div>
          <Typography variant="h5" component="div" sx={{ marginTop: 2, textAlign: 'center' }}>
            <strong>Ridwan Kamil</strong>
          </Typography>
          {!showChangePassword && (
            <>
              <TextField
                fullWidth
                label="Email"
                disabled
                sx={{ marginTop: '20px' }}
              />
              <TextField
                fullWidth
                label="Password"
                disabled
                sx={{ marginTop: '20px' }}
              />
              <Typography variant="body2" style={{ marginTop: 10 }}>
                Apakah anda ingin merubah akun?{' '}
                <Link href="#" onClick={handleChangePasswordClick}>
                  Change Password
                </Link>
              </Typography>
            </>
          )}
          {showChangePassword && (
            <div>
              <TextField
                fullWidth
                label="Email"
                sx={{ marginTop: '20px' }}
              />
              <TextField
                fullWidth
                label="Password"
                sx={{ marginTop: '20px' }}
              />
              <TextField
                fullWidth
                label="Konfirmasi Password"
                sx={{ marginTop: '20px' }}
              />
              <Button variant="contained" color="primary" sx={{ marginTop: '20px' }}>
                Update
              </Button>
              <Button variant="contained" color="warning" sx={{ marginTop: '20px', marginLeft: '20px' }}  onClick={handleCancelClick}>
                Cancel
              </Button>
            </div>
          )}
        </ChartCard>
      </div>
      <div className="grid gap-6 mt-2 mb-2 grid-cols-1 xl:grid-cols-1">
        <PageTitle>Verifikasi Data Diri</PageTitle>
        <ChartCard>
          <form style={{ display: 'flex', flexDirection: 'column' }}>
            <TextField
              fullWidth
              label="First Name"
            />
            <TextField
              fullWidth
              label="Last Name"
              sx={{ marginTop: '20px' }}
            />
            <TextField
              fullWidth
              label="Phone Number (WA)"
              sx={{ marginTop: '20px' }}
            />
            <TextField
              fullWidth
              label="NIK"
              sx={{ marginTop: '20px' }}
            />
            <TextField
              fullWidth
              label="Kecamatan"
              sx={{ marginTop: '20px' }}
            />
            <TextField
              fullWidth
              label="Desa"
              sx={{ marginTop: '20px' }}
            />
            <Button variant="contained" color="primary" sx={{ marginTop: '20px' }}>
              Submit
            </Button>
          </form>
        </ChartCard>
      </div>
    </div>
  );
};

export default IndexProfil;
