import { DevicesFoldOutlined, DevicesOutlined, LinkedCamera, LinkedCameraOutlined } from '@mui/icons-material';
import {Button, Card, CardContent, Grid, SvgIcon, Typography} from '@mui/material';
import { Box } from '@mui/material';
import React, { useState } from 'react'
import ChartCard from '../cards/ChartCard';
import DashboardCard from '../cards/DashboardCard';
import OrdersCard from '../cards/OrdersCard';
import cameraIcon from '../../assets/Icon.svg';
import deviceIcon from '../../assets/Icon (1).svg';
import lightIcon from '../../assets/Icon (2).svg';
import PieChartCard from '../cards/PieChartCard';
import ConsumptionCard from '../cards/ConsumptionCard';
import {Link} from "react-router-dom";
import SearchBar from "../SearchBar";


const Dashboard = () => {

    const [deviceCount, setDeviceCount] = useState(100);
    const [camerasCount, setCamersCount] = useState(50);

    

    const [orders, setOrders] = useState([
        {id: 1, name: 'Иванов Иван', price: '3000р.', date: '12 Янв, 2023'},
        {id: 2, name: 'Иванов Иван', price: '5000р.', date: '14 Янв, 2023'},
        {id: 3, name: 'Иванов Иван', price: '2000р.', date: '15 Янв, 2023'},
        {id: 4, name: 'Иванов Иван', price: '2000р.', date: '16 Янв, 2023'},
    ])

  return (
        <>
          <div style={{display: 'flex', flexDirection: 'row'}}>

              <Button component={Link} to="/" sx={{mr: 1, pr: 0}}>ЖК ТУРГЕНЕВ</Button>
              <Typography fontWeigth='bold' sx={{mt:0.5, color: 'primary.main'}}>/</Typography>
              <Button sx={{mr: 1, pr: 0}}>Панель управления</Button>

          </div>
        <div style={{display: 'flex', justifyContent:'space-between', alignItems:'center', width:'inherit',
            paddingRight:'8px'}}>

            <Typography variant="h4" fontWeight="bold" sx={{px:0, py: 0}}>Главная панель управления</Typography>
            <SearchBar/>
        </div>
        <Grid container spacing={2} sx={{bgcolor: 'white', px: 1 }} direction="row">


            <Grid container spacing={2} item xs={3} direction="column">
                    <OrdersCard
                        title="Заявки на ремонт"
                        orders={orders}
                        />
                    <PieChartCard debt={'200 000'}/>
            </Grid>

                   
            <Grid container  spacing={2} item direction="row" sx={{ height:"fit-content" }} xs>
                
                <DashboardCard
                    xs={4}
                    icon={<img  style={{marginBottom: "10px"}}  src={cameraIcon}></img>}
                    currentCount={deviceCount- 7}
                    maxCount={deviceCount}
                    desc="Камер активно"
                    />

                <DashboardCard
                    xs={4}
                    icon={<img style={{marginBottom: "10px"}} src={deviceIcon}></img>}
                    currentCount={camerasCount - 5}
                    maxCount={camerasCount}
                    Modal='Devices'
                    desc="Оборудования исправно"
                    />

                <DashboardCard
                    xs={4}
                    icon={<img style={{marginBottom: "10px"}}  src={lightIcon}></img>}
                    title={camerasCount}
                    currentCount={camerasCount}
                    maxCount={camerasCount}
                    desc="Ламп освещения работают"
                    />
                <ChartCard
                    income={'250 000'}
                    xs={12}/>
                
                <ConsumptionCard xs={12}/>
                
                
                        
            </Grid>

           

        </Grid>
        </>
  )
}

export default Dashboard;