import React, { useState, useEffect } from 'react';
import { Select, MenuItem, FormControl, InputLabel, TextField, Button, Stepper, Step, StepLabel, Box, InputAdornment, useMediaQuery,CircularProgress,LinearProgress,Typography, IconButton, Paper } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import ChartCard from "../shared/ChartCard";
import PageTitle from "../shared/PageTitle";
import desaData from './../data/desa.json';
import { Delete, Close } from '@mui/icons-material';

const steps = ['Data Diri', 'Alamat', 'Data Pendukung', 'Upload Berkas'];

function PermohonanBlokir() {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [activeStep, setActiveStep] = useState(0);
  const [kecamatan, setKecamatan] = useState('');
  const [desa, setDesa] = useState('');
  const [desaOptions, setDesaOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState([]);
  const [retryIndex, setRetryIndex] = useState(null);

  useEffect(() => {
    if (kecamatan) {
      const filteredDesa = desaData.data.filter(item => item.NAMAKECAMATAN === kecamatan);
      setDesaOptions(filteredDesa);
    } else {
      setDesaOptions([]);
    }
  }, [kecamatan]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  const handleRetry = (index) => {
    setRetryIndex(index);
    document.getElementById('file-input').click();
  };

  const handleDelete = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleFileUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    const updatedFiles = uploadedFiles.map(file => {
      const sizeInMB = file.size / (1024 * 1024);
      if (file.type !== 'application/pdf') {
        return { name: file.name, size: 'Invalid file type', type: file.type, status: 'failed' };
      } else if (sizeInMB > 5) {
        return { name: file.name, size: `${sizeInMB.toFixed(2)}MB`, type: file.type, status: 'failed' };
      } else {
        return { name: file.name, size: `${sizeInMB.toFixed(2)}MB`, type: file.type, status: 'uploaded' };
      }
    });

    if (retryIndex !== null) {
      setFiles(files.map((file, index) => index === retryIndex ? updatedFiles[0] : file));
      setRetryIndex(null);
    } else {
      setFiles([...files, ...updatedFiles]);
    }
  };


  const kecamatanOptions = Array.from(new Set(desaData.data.map(item => item.NAMAKECAMATAN)));

  return (
    <div className="grid gap-6 mt-5 mb-6 grid-cols-1 xl:grid-cols-1">
    <PageTitle>Isi Formulir Permohonan Blokir</PageTitle>
      <ChartCard>
        <Stepper activeStep={activeStep} orientation={isMobile ? 'vertical' : 'horizontal'}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </ChartCard>

      <ChartCard>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          {activeStep === 0 && (
            <>
               <div className="grid gap-6 mt-2 mb-2 grid-cols-1 xl:grid-cols-2">
              <TextField
                required
                fullWidth
                id="name"
                label="Nama Pemilik"
                margin="normal"
              />
    
              <TextField
                required
                fullWidth
                id="name"
                label="NIK Pemilik"
                margin="normal"
              />
              </div>

              <div className="grid gap-6 mt-2 mb-2 grid-cols-1 xl:grid-cols-2">
              <TextField
                required
                fullWidth
                id="phone-number"
                label="Phone Number (WA)"
                margin="normal"
                sx={{ marginTop: '20px' }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon />
                    </InputAdornment>
                  ),
                }}
              />
               <TextField
                required
                fullWidth
                id="email-address"
                label="Email Address"
                margin="normal"
                sx={{ marginTop: '20px' }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocalPostOfficeOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />
                </div>
            </>
          )}

          {activeStep === 1 && (
            <div className="grid gap-6 mt-2 mb-2 grid-cols-1 xl:grid-cols-2">
              <FormControl fullWidth sx={{ marginTop: '20px' }}>
                <InputLabel id="kecamatan-select-label">Kecamatan</InputLabel>
                <Select
                  labelId="kecamatan-select-label"
                  variant="outlined"
                  label="Kecamatan"
                  value={kecamatan}
                  onChange={(e) => setKecamatan(e.target.value)}
                  MenuProps={{ PaperProps: { style: { maxHeight: 200 } } }}
                >
                  {kecamatanOptions.map((kec) => (
                    <MenuItem key={kec} value={kec}>{kec}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth sx={{ marginTop: '20px' }}>
                <InputLabel id="desa-select-label">Desa</InputLabel>
                <Select
                  labelId="desa-select-label"
                  variant="outlined"
                  label="Desa"
                  value={desa}
                  onChange={(e) => setDesa(e.target.value)}
                  MenuProps={{ PaperProps: { style: { maxHeight: 200 } } }}
                >
                  {desaOptions.map((desa) => (
                    <MenuItem key={desa.NAMADESA} value={desa.NAMADESA}>{desa.NAMADESA}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <div className="grid gap-6  grid-cols-1 xl:grid-cols-2">
              <TextField
                required
                fullWidth
                id="rt"
                label="RT"
                margin="normal"
              />
              <TextField
                required
                fullWidth
                id="rw"
                label="RW"
                margin="normal"
              />
              </div>
              <TextField
                required
                fullWidth
                id="alamat"
                label="Alamat"
                margin="normal"
              />
            </div>
            
          )}
             {activeStep === 2 && (
            <div className="grid gap-6  grid-cols-1 xl:grid-cols-1">
                <div className="grid gap-6  grid-cols-1 xl:grid-cols-3">
                    <TextField
                        required
                        fullWidth
                        id="tipe"
                        label="Tipe Hak"
                        margin="normal"
                    />
                        <TextField
                        required
                        fullWidth
                        id="nomor"
                        label="Nomor Hak"
                        margin="normal"
                    />
                    <TextField
                        required
                        fullWidth
                        id="luas"
                        label="Luas (m2)"
                        margin="normal"
                    />                
                </div>
                    <TextField
                        required
                        fullWidth
                        id="catatan"
                        label="Catatan"
                        margin="normal"
                    />
            </div>
               )}
                {activeStep === 3 && (
                   <div className="grid gap-6 mt-2 mb-2 grid-cols-1 xl:grid-cols-1">
                   <Box p={3}>
                     {files.map((file, index) => (
                       <Paper key={index} variant="outlined" sx={{ p: 2, mb: 2, display: 'flex', alignItems: 'center' }}>
                         <Box flexGrow={1}>
                           <Typography variant="body1">{file.name}</Typography>
                           <Typography variant="body2" color="textSecondary">{file.size}</Typography>
                           {file.status === 'uploading' && (
                             <Box mt={1}>
                               <LinearProgress variant="determinate" value={file.progress} />
                             </Box>
                           )}
                           {file.status === 'failed' && (
                             <Box mt={1} color="error.main">
                               <Typography variant="body2">Failed to upload</Typography>
                             </Box>
                           )}
                         </Box>
                         {file.status === 'uploaded' && (
                           <IconButton onClick={() => handleDelete(index)}>
                             <Delete />
                           </IconButton>
                         )}
                         {file.status === 'failed' && (
                           <Button onClick={() => handleRetry(index)} variant="contained" color="primary" size="small">
                             Retry
                           </Button>
                         )}
                         {file.status === 'uploading' && (
                           <IconButton onClick={() => handleDelete(index)}>
                             <Close />
                           </IconButton>
                         )}
                       </Paper>
                     ))}
                     <Box
                       sx={{
                         border: '2px dashed #ccc',
                         borderRadius: 2,
                         p: 3,
                         textAlign: 'center',
                         cursor: 'pointer'
                       }}
                       onClick={() => document.getElementById('file-input').click()}
                     >
                       <Typography>Drop your files here or choose file</Typography>
                       <input type="file" id="file-input" style={{ display: 'none' }} multiple onChange={handleFileUpload} />
                     </Box>
                   </Box>
                 </div>
                )}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mt: 3, ml: 1 }}
            >
              Back
            </Button>
            <Button
              variant="contained"
              onClick={handleNext}
              sx={{ mt: 3, ml: 1 }}
            >
              {loading ? <CircularProgress size={24} /> : (activeStep === steps.length - 1 ? 'Finish' : 'Next')}
            </Button>
          </Box>
        </Box>
      </ChartCard>
    </div>
  );
}

export default PermohonanBlokir;
