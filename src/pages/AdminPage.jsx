import { HomeMaxOutlined, HomeMiniOutlined, InfoOutlined, LogoutOutlined, SettingsOutlined, UndoOutlined, ViewListOutlined } from '@mui/icons-material'
import { Box, Button, Container, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemText, Paper, Tab, Tabs, ToggleButton, ToggleButtonGroup, Toolbar, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import Dashboard from '../components/dashboards/Dashboard'
import dashIcon from '../assets/Icon (3).svg';
import officeIcon from '../assets/office-building.svg';
import SearchBar from '../components/SearchBar';
import BuildingsTable from '../components/BuildingsTable';
import logo from '../assets/Frame 1056 (1).png';
import { FlatDashboardContext } from '../context';
import FlatDashboard from '../components/dashboards/FlatDashboard';
import { Link, Outlet, useHref } from 'react-router-dom';


const AdminPage = () => {
    const [tabValue, setTabValue] = useState(window.location.href.split('/')[4])
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);


    const handleChange = (event, newValue) => {
        if (newValue !== null) {
            setTabValue(newValue);
        }
    }

  return (
    <Box sx={{flexGrow: 1, m: 0, height: '100vh'}}>

    <Grid container spacing={0} sx={{height: '100%'}}>

        <Grid container item xs={2} spacing={0} sx={{bgcolor: 'primary.gray', width: "inherit"}}>
                <Box sx={{position: 'sticky',alignSelf: 'flex-start', top: 0, width: 'inherit', m: 0, p: 0 }}>


                    <Box sx={{p: 4, display: 'flex', justifyContent: 'center'}}>
                        <img style={{m: 'auto'}}src={logo}></img>    
                    </Box>

                    <Divider/>

                    <Typography sx={{mt: 4, mb: 2, ml: 2}}
                        fontWeight='bold'
                        fontSize={16}
                        textAlign='left'>
                        АДМИНИСТРАТОР
                    </Typography>

                    <Tabs
                        value={tabValue}
                        sx={{ minWidth:'100%'}}
                        orientation="vertical"
                        onChange={handleChange}
                        indicatorColor="secondary"
                        >
                            <Tab component={Link} to='/complex/dashboard' value="dashboard" label="Панель управления" iconPosition="start" icon={<img src={dashIcon}></img>} />
                            <Tab component={Link} to='/complex/buildings' value="buildings" label="Здания" iconPosition="start"  icon={<img src={officeIcon}></img>} />
                            <Tab value="settings" label="Параметры" iconPosition="start"  icon={<SettingsOutlined/>} />
                            <Tab value="info" label="Справка" iconPosition="start"  icon={<InfoOutlined/>} />
                    </Tabs>
                    
                    <Button startIcon={<LogoutOutlined/>} sx={{
                        textTransform: 'none',
                        fontWeight: 'bold',
                        color: 'rgba(0,0,0,0.3)',
                        fontSize: 16,
                        ml:1.7,
                        mt: 1,
                    }}>Выход</Button>
                </Box>

        </Grid>

        <Grid container item xs={10} sx={{mt: 4, px: 2, height: 'fit-content'}}>

            <Outlet/>
            
        </Grid>
    </Grid>
    </Box>

  )
}

export default AdminPage