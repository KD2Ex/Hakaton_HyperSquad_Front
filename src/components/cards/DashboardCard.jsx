import { Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material';
import React, { useState } from 'react'
import ModalDevicesPage from '../../pages/ModalDevicesPage';
import ModalPage from '../../pages/ModalPage';

const DashboardCard = ({Modal = null, currentCount, maxCount, icon, desc, xs, hideSlash}) => {

    const [open, setOpen] = useState(false);


    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

  return (
    <Grid item xs={xs} >
        <Card sx={{ borderRadius: 10, bgcolor: 'primary.gray'}}>
            <CardActionArea
                sx={{borderRadius: 'inherit', pl: 1, boxShadow: 2}} 
                onClick={handleOpen}>
                <CardContent>
                    {icon}
                    <Typography variant='h5' fontWeight='bold' flexWrap="nowrap">
                        {currentCount}
                        {hideSlash === true ? null : '/'}
                        {maxCount}
                    </Typography>
                    <Typography flexWrap="wrap" color="primary.main">{desc}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        {Modal === 'Flats'
            ? <ModalPage open={open} handleClose={handleClose}/>
            : Modal === 'Devices' 
            ? <ModalDevicesPage open={open} handleClose={handleClose}/>
            : null}
        
    </Grid>
  )
}

export default DashboardCard;