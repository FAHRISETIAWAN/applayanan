import React, { useState, useEffect } from 'react';
import { Select, MenuItem, FormControl, InputLabel, TextField, Button, Stepper, Step, StepLabel, Box, InputAdornment, useMediaQuery,CircularProgress,Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ChartCard from "../shared/ChartCard";
import PageTitle from "../shared/PageTitle";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import desaData from './../data/desa.json';

const steps = ['Data Diri', 'Alamat', 'Data Pendukung', 'Upload Eviden'];

function IndexPTSL() {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [activeStep, setActiveStep] = useState(0);
  const [startDate, setStartDate] = useState(null);
  const [kecamatan, setKecamatan] = useState('');
  const [desa, setDesa] = useState('');
  const [tahun, setTahun] = useState('');
  const [desaOptions, setDesaOptions] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const startYear = 2010;
  const currentYear = new Date().getFullYear();
  const years = [];

  for (let year = currentYear; year >= startYear; year--) {
    years.push(year);
  }

  useEffect(() => {
    if (kecamatan) {
      const filteredDesa = desaData.data.filter(item => item.NAMAKECAMATAN === kecamatan);
      setDesaOptions(filteredDesa);
    } else {
      setDesaOptions([]);
    }
  }, [kecamatan]);

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      // Handle final upload here
      if (selectedFile) {
        setIsUploading(true);
        // Simulate file upload
        const interval = setInterval(() => {
          setUploadProgress((prevProgress) => {
            if (prevProgress >= 100) {
              clearInterval(interval);
              setIsUploading(false);
              alert('File uploaded successfully');
              return 100;
            }
            return prevProgress + 10;
          });
        }, 200);
      }
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const kecamatanOptions = Array.from(new Set(desaData.data.map(item => item.NAMAKECAMATAN)));

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file));
      setFileName(file.name);
    }
  };


  return (
    <div className="grid gap-6 mt-5 mb-6 grid-cols-1 xl:grid-cols-1">
    <PageTitle>Entri Data Tanda Terima</PageTitle>
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
              <TextField
                required
                fullWidth
                id="name"
                label="Nama Lengkap Pemohon"
                margin="normal"
              />
              <div className="grid gap-6 mt-2 mb-2 grid-cols-1 xl:grid-cols-2">
                <FormControl fullWidth sx={{ marginTop: '10px' }}>
                  <InputLabel id="tahun-select-label">Tahun Tanda Terima</InputLabel>
                  <Select
                    labelId="tahun-select-label"
                    variant="outlined"
                    label="Tahun Tanda Terima"
                    value={tahun}
                    onChange={(e) => setTahun(e.target.value)}
                    MenuProps={{ PaperProps: { style: { maxHeight: 200 } } }}
                  >
                    {years.map((year) => (
                      <MenuItem key={year} value={year}>
                        {year}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']} style={{ width: '80%' }}>
                    <DatePicker
                      id="tanggal"
                      label="Tanggal Tanda Terima"
                      className="w-full"
                      value={startDate}
                      onChange={date => setStartDate(date)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
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
          )}
             {activeStep === 2 && (
              <div className="grid gap-6 mt-2 mb-2 grid-cols-1 xl:grid-cols-3">
                  <TextField
                    required
                    fullWidth
                    id="nib"
                    label="NIB"
                    margin="normal"
                  />
                    <TextField
                    required
                    fullWidth
                    id="nub"
                    label="NUB"
                    margin="normal"
                  />
                  <TextField
                    required
                    fullWidth
                    id="petugas"
                    label="Petugas BPN"
                    margin="normal"
                  />
              </div>
               )}
                {activeStep === 3 && (
             <div className="grid gap-6 mt-2 mb-2 grid-cols-1 xl:grid-cols-1">
             <ChartCard>
               <Typography variant="h6" gutterBottom>
                 Upload Foto Evidence
               </Typography>
               <Box 
                 display="flex" 
                 flexDirection="column" 
                 alignItems="center" 
                 justifyContent="center" 
                 p={2}
                 border="2px dashed #ddd"
                 borderRadius="4px"
                 width="100%"
                 position="relative"
                 minHeight="300px"
               >
                 <input
                   accept="image/*"
                   style={{ display: 'none' }}
                   id="upload-file"
                   type="file"
                   onChange={handleFileUpload}
                 />
                  {selectedFile && (
                   <Box mt={2} textAlign="center">
                     <img src={selectedFile} alt="Selected" style={{ maxWidth: '100%', maxHeight: 200, marginBottom: 10 }} />
                   </Box>
                 )}
                 <label htmlFor="upload-file">
                   <Button
                     variant="contained"
                     component="span"
                     size="large"
                     startIcon={<CloudUploadIcon />}
                     disabled={isUploading}
                   >
                     Upload Foto
                   </Button>
                 </label>
       
                    {isUploading && (
                    <Box 
                      display="flex" 
                      flexDirection="column" 
                      alignItems="center" 
                      justifyContent="center" 
                      position="absolute"
                      top="50%"
                      left="50%"
                      transform="translate(-50%, -50%)"
                    >
                      <CircularProgress variant="determinate" value={uploadProgress} />
                      <Box mt={1}>
                        <Typography variant="body2" color="textSecondary">{uploadProgress}%</Typography>
                      </Box>
                    </Box>
                  )}
                  </Box>
                  <Box mt={2} width="100%">
                  <TextField
                    required
                    fullWidth
                    id="namafile"
                    label="Nama File"
                    margin="normal"
                    value={fileName}
                    onChange={(e) => setFileName(e.target.value)}
                  />
                    </Box>
                    <Typography variant="body2" style={{ marginTop: 10 }}>
                        Contoh Format Nama : Foto_Eviden_Ridwan.jpg
                    </Typography>
              </ChartCard>
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
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </Box>
      </ChartCard>
    </div>
  );
}

export default IndexPTSL;
