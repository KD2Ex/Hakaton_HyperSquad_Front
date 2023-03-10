import { Box, Card, CardActionArea, CardContent, Container, FormControl, Grid, MenuItem, Select, Stack, Typography } from '@mui/material';
import React, { useState } from 'react'
import logo from '../../assets/Ellipse 75.svg';

const OrdersCard = ({orders, xs, title}) => {

    
    const handleOpen = () => {
        console.log('close');
        setOpen(true);
    }
    const [selectedMonth, setSelectedMonth] = useState(0);

    const selectItems = [
        {label: 'Январь'},
        {label: 'Февраль'},
        {label: 'Март'},
        {label: 'Апрель'},
        {label: 'Май'},
        {label: 'Июнь'},
    ]

  return (
    <Grid item xs={xs}>

        <Card sx={{ borderRadius: 8,bgcolor: 'primary.gray'}}>
            
                <CardContent>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>

                        <Typography  fontWeight='bold' flexWrap="nowrap" width="fit-content" sx={{mb: 1}}>{title}</Typography>

                        <FormControl size='small' variant="filled" sx={{borderBottom: 'none', borderRadius: 12}}>
                            
                            <Select value={selectedMonth}
                                    onChange={(e) => setSelectedMonth(e.target.value)} 
                                    disableUnderline={true} 
                                    sx={{borderRadius: 12, fontSize: 14}}>
                                {selectItems.map((item, index) => (
                                    <MenuItem value={index}>{item.label}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <CardActionArea
                        sx={{borderRadius: 'inherit', pl: 0 }} 
                        onClick={handleOpen}>
                    {orders.map(order => (
                        <div key={order.id}
                            style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>

                                <div style={{display: 'flex', alignItems:'center'}}>

                                    <img style={{width: '30px'}} src={logo}></img>
                                    <Stack sx={{ml: 2}}>
                                        <Typography fontWeight="bold" color="primary.main" >{order.name}</Typography>
                                        <Typography fontSize={12} color='rgba(0,0,0,0.5)'>{order.date}</Typography>
                                    </Stack>
                                </div>

                            <Typography fontWeight="bold">{order.price}</Typography>
                        </div>
                    ))}
                    </CardActionArea>
                </CardContent>
        </Card>
        
    </Grid>
  )
}

export default OrdersCard