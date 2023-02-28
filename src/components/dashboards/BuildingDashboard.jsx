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
import buildingIcon from '../../assets/Icon (4).svg';
import PieChartCard from '../cards/PieChartCard';
import ConsumptionCard from '../cards/ConsumptionCard';
import {Link} from "react-router-dom";


const BuildingDashboard = () => {

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
      <div style={{display: 'flex', justifyContent:'flex-start', alignItems: 'center', width:'inherit', paddingLeft: '16px', marginBottom: '8px'}}>


          <Button component={Link} to={`/complex/buildings`} sx={{fontSize: '20px'}}>
              Назад
          </Button>

          <Typography
              fontSize={20}
              fontWeight='bold'
              sx={{mx: 1}}
          >
              /
          </Typography>

          <Typography
              fontSize={24}
              fontWeight='bold'>
                Северная 401
          </Typography>


      </div>
        <Grid container spacing={2} sx={{bgcolor: 'white', px: 1 }} direction="row">

            <Grid container spacing={2} item xs={3} direction="column">
                <DashboardCard
                    currentCount={50}
                    hideSlash={true}
                    icon={<img style={{marginBottom: '10px'}} src={buildingIcon}></img>}
                    desc="Квартир в здании"
                    Modal='Flats'/>
                    <OrdersCard
                        title="Заявки на ремонт"
                        orders={orders}
                        />
                    <PieChartCard debt={'30 000'}/>
            </Grid>

                   
            <Grid container  spacing={2} item direction="row" sx={{ height:"fit-content" }} xs>
                
                <DashboardCard
                    xs={4}
                    icon={<img  style={{marginBottom: "10px"}}  src={cameraIcon}></img>}
                    currentCount={deviceCount -5}
                    maxCount={deviceCount}
                    desc="Камер активно"
                    />

                <DashboardCard
                    xs={4}
                    icon={<img style={{marginBottom: "10px"}} src={deviceIcon}></img>}
                    currentCount={camerasCount - 7}
                    maxCount={camerasCount}
                    desc="Оборудования исправно"
                    />

                <DashboardCard
                    xs={4}
                    icon={<img style={{marginBottom: "10px"}}  src={lightIcon}></img>}
                    title={camerasCount}
                    currentCount={camerasCount - 2}
                    maxCount={camerasCount}
                    desc="Ламп освещения работают"
                    />
                <ChartCard
                    income={'50 000'}
                    xs={12}/>
                
                <ConsumptionCard xs={12}/>
                
                
                        
            </Grid>

           

        </Grid>
    </>
  )
}

export default BuildingDashboard;