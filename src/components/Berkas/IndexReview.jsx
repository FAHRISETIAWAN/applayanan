import React, { useState, useEffect } from 'react';
import ChartCard from "../shared/ChartCard";
import PageTitle from "../shared/PageTitle";
import InfoCard from "../shared/InfoCard";
import RoundIcon from "../shared/RoundIcon";
import { BsNewspaper } from "react-icons/bs";
import { MdSwitchAccount } from "react-icons/md";
import { CircularProgress, Table, TableBody, TableCell, TableContainer, TableRow, TableHead,
} from '@mui/material';

const IndexReview = () => {
    const [bukutanah, setBukuTanah] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

  return (
        <div className="grid gap-6 mt-5 mb-6 grid-cols-1 xl:grid-cols-1">
            <PageTitle>Review Berkas</PageTitle>
            <div className="grid gap-6 mt-5 mb-6 grid-cols-2 xl:grid-cols-2">
            <InfoCard
            title="Permohonan Masuk"
            satuan='Berkas'
            // value={jumlahLaporanBT.length > 0 ? jumlahLaporanBT[0].jumlah: ''}
            >
            <RoundIcon
                icon={BsNewspaper}
                iconColorClass="text-[#6993FF]"
                bgColorClass="bg-[#BDCFFF]"
                className="mr-4"
            />
            </InfoCard>
            <InfoCard
            title="User Masuk"
            satuan='User'
            // value={jumlahLaporanBT.length > 0 ? jumlahLaporanBT[0].jumlah: ''}
            >
            <RoundIcon
                icon={MdSwitchAccount}
                iconColorClass="text-[#6993FF]"
                bgColorClass="bg-[#BDCFFF]"
                className="mr-4"
            />
            </InfoCard>
            </div>
            <div className="grid gap-6 mt-5 mb-6 grid-cols-2 xl:grid-cols-1">
            <ChartCard>
                    <div className="grid gap-6 mb-1 md:grid-cols-1">
                        {/* {isLoading ? ( 
                            <CircularProgress style={{ margin: '50px auto', display: 'block' }} />
                        ) : (
                            <>
                            {bukutanah && bukutanah.length > 0 ? ( */}
                            <TableContainer >
                                <Table >
                                    <TableHead>
                                        <TableRow>                   
                                            <TableCell align='center' style={{ backgroundColor: '#0288d1', color: 'white'}}>No</TableCell>
                                            <TableCell align='center' style={{ backgroundColor: '#0288d1', color: 'white'}}>Nama Pemohon</TableCell>
                                            <TableCell align='center' style={{ backgroundColor: '#0288d1', color: 'white'}}>Tanggal Masuk</TableCell>
                                            <TableCell align='center' style={{ backgroundColor: '#0288d1', color: 'white'}}>Jenis Permohonan</TableCell>
                                            <TableCell align='center' style={{ backgroundColor: '#0288d1', color: 'white'}}>Detail</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    {/* <TableBody>
                                        {bukutanah?.map((item, index) => (
                                            <TableRow key={index}>
                                                <TableCell align="center" >{index + 1}</TableCell>               
                                                <TableCell align="center" >{item.nomorhak}</TableCell>
                                                <TableCell align="center" >{item.namapeminjam}</TableCell>
                                                <TableCell align="center" >{item.keperluan}</TableCell>
                                                <TableCell align="center" >{item.tglpinjam}</TableCell>
                                                <TableCell align="center" >{item.durasi}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody> */}
                                </Table>
                            </TableContainer>
                            {/* ) : (
                                <ChartCard>
                                    <h6 className="text-center text-sm xl:text-lg font-medium">
                                        Sialahkan Menunggu Permohonan Masuk
                                    </h6>
                                </ChartCard>
                            )}
                            </>
                        )} */}
                    </div>
                </ChartCard>
            </div>
        </div>

  );
}
export default IndexReview;