import React, { useState } from 'react';
import ChartCard from "../shared/ChartCard";
import PageTitle from "../shared/PageTitle";
import { Avatar, Button, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import BlockIcon from '@mui/icons-material/Block';
import SourceIcon from '@mui/icons-material/Source';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import BallotIcon from '@mui/icons-material/Ballot';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

const IndexLayanan = () => {
  const [openDialog, setOpenDialog] = useState(false); // State untuk mengatur apakah dialog dibuka atau tidak
  const [selectedService, setSelectedService] = useState("");

  const handleOpenDialog = (service) => {
    setSelectedService(service);
    setOpenDialog(true);
};

// Fungsi untuk menutup dialog
const handleCloseDialog = () => {
    setOpenDialog(false);
};


const getPersyaratan = () => {
  if (selectedService === "Blokir") {
      return (
          <>
              <Typography variant="body1" gutterBottom>
                <CheckOutlinedIcon sx={{ color: 'green', verticalAlign: 'middle' }} /> Fotocopy KTP dan KK pemohon dan kuasa (apabila dikuasakan)
              </Typography>
              <Typography variant="body1" gutterBottom>
                <CheckOutlinedIcon sx={{ color: 'green', verticalAlign: 'middle' }} /> Surat Permintaan Blokir dari Perorangan atau Instansi Berwenang
              </Typography>
              <Typography variant="body1" gutterBottom>
                <CheckOutlinedIcon sx={{ color: 'green', verticalAlign: 'middle' }} /> Sertipikat Hak Atas Tanah
              </Typography>
              <Typography variant="body1" gutterBottom>
                <DescriptionOutlinedIcon sx={{ color: '#0046fe', verticalAlign: 'middle' }} /> Lain-Lain
              </Typography>
          </>
      );
  } else if (selectedService === "Ganti Nama") {
      return (
          <>
              <Typography variant="body1" gutterBottom>
                <CheckOutlinedIcon sx={{ color: 'green', verticalAlign: 'middle' }} /> Fotocopy KTP dan KK pemohon dan kuasa (apabila dikuasakan)
              </Typography>
              <Typography variant="body1" gutterBottom>
                <CheckOutlinedIcon sx={{ color: 'green', verticalAlign: 'middle' }} /> Sertipikat Hak Atas Tanah
              </Typography>
              <Typography variant="body1" gutterBottom>
                <CheckOutlinedIcon sx={{ color: 'green', verticalAlign: 'middle' }} /> Fotocopy PBB Tahun berjalan
              </Typography>
              <Typography variant="body1" gutterBottom>
                <DescriptionOutlinedIcon sx={{ color: '#0046fe', verticalAlign: 'middle' }} /> Surat Pernyataan Beda Nama
              </Typography>
              <Typography variant="body1" gutterBottom>
                <DescriptionOutlinedIcon sx={{ color: '#0046fe', verticalAlign: 'middle' }} /> Surat Keterangan Ganti Nama
              </Typography>
              <Typography variant="body1" gutterBottom>
                <DescriptionOutlinedIcon sx={{ color: '#0046fe', verticalAlign: 'middle' }} /> Surat Keputusan Pengadilan
              </Typography>
              <Typography variant="body1" gutterBottom>
                <DescriptionOutlinedIcon sx={{ color: '#0046fe', verticalAlign: 'middle' }} /> Akta Ganti Nama
              </Typography>
              <Typography variant="body1" gutterBottom>
                <DescriptionOutlinedIcon sx={{ color: '#0046fe', verticalAlign: 'middle' }} /> Lain-Lain
              </Typography>
          </>
      );
  } else if (selectedService === "Pendaftaran SK") {
    return (
        <>
            <Typography variant="body1" gutterBottom>
              <CheckOutlinedIcon sx={{ color: 'green', verticalAlign: 'middle' }} /> Tanda Terima Permohonan SK Asli
            </Typography>
            <Typography variant="body1" gutterBottom>
              <CheckOutlinedIcon sx={{ color: 'green', verticalAlign: 'middle' }} /> Fotocopy Bea Perolehan Hak Tanah dan Bangunan (BPHTB)
            </Typography>
            <Typography variant="body1" gutterBottom>
              <CheckOutlinedIcon sx={{ color: 'green', verticalAlign: 'middle' }} /> Fotocopy PBB Tahun berjalan
            </Typography>
            <Typography variant="body1" gutterBottom>
              <DescriptionOutlinedIcon sx={{ color: '#0046fe', verticalAlign: 'middle' }} /> Asli bukti kepemilikan tanah atau alas hak
            </Typography>
            <Typography variant="body1" gutterBottom>
              <DescriptionOutlinedIcon sx={{ color: '#0046fe', verticalAlign: 'middle' }} /> Lain-Lain
            </Typography>
        </>
    );
} else if (selectedService === "Peralihan Hak") {
  return (
      <>
          <Typography variant="body1" gutterBottom>
            <CheckOutlinedIcon sx={{ color: 'green', verticalAlign: 'middle' }} /> Fotocopy KTP dan KK pemohon dan kuasa (apabila dikuasakan)
          </Typography>
          <Typography variant="body1" gutterBottom>
            <CheckOutlinedIcon sx={{ color: 'green', verticalAlign: 'middle' }} /> Sertipikat Hak Atas Tanah
          </Typography>
          <Typography variant="body1" gutterBottom>
            <CheckOutlinedIcon sx={{ color: 'green', verticalAlign: 'middle' }} /> Fotocopy PBB Tahun berjalan
          </Typography>
          <Typography variant="body1" gutterBottom>
            <CheckOutlinedIcon sx={{ color: 'green', verticalAlign: 'middle' }} /> 	Fotocopy Bea Perolehan Hak Tanah dan Bangunan (BPHTB)
          </Typography>
          <Typography variant="body1" gutterBottom>
            <CheckOutlinedIcon sx={{ color: 'green', verticalAlign: 'middle' }} /> 		Fotocopy Surat Setoran Pajak / PPH
          </Typography>
          <Typography variant="body1" gutterBottom>
              <DescriptionOutlinedIcon sx={{ color: '#0046fe', verticalAlign: 'middle' }} /> Akta Jual Beli
           </Typography>
          <Typography variant="body1" gutterBottom>
            <DescriptionOutlinedIcon sx={{ color: '#0046fe', verticalAlign: 'middle' }} /> Lain-Lain
          </Typography>
      </>
  );
} else {
    return (
        <>
            <Typography variant="body1" gutterBottom>
                Pastikan anda memilih layanan dengan benar !
            </Typography>
        </>
    );
}
};

  return (
<div className="grid gap-6 mt-5 mb-6 grid-cols-1 xl:grid-cols-1">
    <PageTitle>Permohonan Layanan</PageTitle>
    <ChartCard>

    </ChartCard>
    <div className="grid gap-6 mt-5 mb-6 grid-cols-1 xl:grid-cols-4">
    <ChartCard>
      <Avatar sx={{ width: 100, height: 100, margin: 'auto', bgcolor: '#BDCFFF' }}>
        <BlockIcon sx={{ fontSize: 80, color: '#6993FF' }} />
      </Avatar>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Button variant="text" color="warning">
        PELAYANAN PENCATATAN
        </Button>
      </div>
      <Typography variant="h6" component="div" sx={{ textAlign: 'center' }}>
        <strong>Blokir</strong>
      </Typography>
      <Typography variant="body2" component="div" sx={{ textAlign: 'center', marginTop: '10px' }}>
        <strong>Waktu: 1 Hari  </strong>
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <Button variant="text" color="success"  onClick={() => handleOpenDialog("Blokir")}>
        Lihat Persyaratan
        </Button>
      </div>
    </ChartCard>
    <ChartCard>
    <Avatar sx={{ width: 100, height: 100, margin: 'auto', bgcolor: '#BDCFFF' }}>
        <SourceIcon sx={{ fontSize: 60, color: '#6993FF' }} />
      </Avatar>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Button variant="text" color="warning">
        PELAYANAN PEMELIHARAAN DATA
        </Button>
      </div>
      <Typography variant="h6" component="div" sx={{ textAlign: 'center' }}>
        <strong>Ganti Nama</strong>
      </Typography>
      <Typography variant="body2" component="div" sx={{ textAlign: 'center', marginTop: '10px' }}>
        <strong>Waktu: 7 Hari  </strong>
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <Button variant="text" color="success" onClick={() => handleOpenDialog("Ganti Nama")}>
        Lihat Persyaratan
        </Button>
      </div>
    </ChartCard>
    <ChartCard>
    <Avatar sx={{ width: 100, height: 100, margin: 'auto', bgcolor: '#BDCFFF' }}>
        <HowToRegIcon sx={{ fontSize: 70, color: '#6993FF' }} />
      </Avatar>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Button variant="text" color="warning">
        PELAYANAN SURAT KEPUTUSAN HAK
        </Button>
      </div>
      <Typography variant="h6" component="div" sx={{ textAlign: 'center' }}>
        <strong>Pendaftaran SK</strong>
      </Typography>
      <Typography variant="body2" component="div" sx={{ textAlign: 'center', marginTop: '10px' }}>
        <strong>Waktu: 7 Hari  </strong>
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <Button variant="text" color="success" onClick={() => handleOpenDialog("Pendaftaran SK")}>
        Lihat Persyaratan
        </Button>
      </div>
    </ChartCard>
    <ChartCard>
    <Avatar sx={{ width: 100, height: 100, margin: 'auto', bgcolor: '#BDCFFF' }}>
        <BallotIcon sx={{ fontSize: 60, color: '#6993FF' }} />
      </Avatar>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Button variant="text" color="warning">
        PELAYANAN PERALIHAN HAK
        </Button>
      </div>
      <Typography variant="h6" component="div" sx={{ textAlign: 'center' }}>
        <strong>Peralihan Hak</strong>
      </Typography>
      <Typography variant="body2" component="div" sx={{ textAlign: 'center', marginTop: '10px' }}>
        <strong>Waktu: 5 Hari  </strong>
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <Button variant="text" color="success" onClick={() => handleOpenDialog("Peralihan Hak")}>
        Lihat Persyaratan
        </Button>
      </div>
    </ChartCard>

    </div>
    <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Persyaratan</DialogTitle>
        <DialogContent>
            {getPersyaratan()}
        </DialogContent>
        <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
                Close
            </Button>
        </DialogActions>
    </Dialog>
</div>

  );
}
export default IndexLayanan;