import { UndoOutlined } from '@mui/icons-material';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { FlatDashboardContext } from '../context';
import BuildingDashboard from './dashboards/BuildingDashboard';
import {Link} from "react-router-dom";

const BuildingsTable = () => {

    const rows = [
        {id: 1, name: '16-ти этажный жилой дом', adress: 'Северная 401'},
        {id: 2, name: '16-ти этажный жилой дом', adress: 'Северная 402'},
        {id: 3, name: '16-ти этажный жилой дом', adress: 'Северная 403'},
        {id: 4, name: '16-ти этажный жилой дом', adress: 'Северная 404'},
        {id: 5, name: '16-ти этажный жилой дом', adress: 'Северная 405'},
        {id: 6, name: '16-ти этажный жилой дом', adress: 'Северная 406'},
        
    ]
    

  return (
    <>

            <>
            <Typography variant="h4" fontWeight='bold' sx={{pb: 2}}>
                Список зданий
            </Typography>
        
            <TableContainer component={Paper} sx={{width:'100%'}}>
                <Table 
                    sx={{minWidth: 'inherit'}}>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{maxWidth: 30}}>Номер</TableCell>
                                <TableCell>Адрес</TableCell>
                                <TableCell>Категория</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow 
                                    key={row.id}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.adress}</TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell sx={{textAlign: 'right'}}>{<Button id={row.id} component={Link} to={`/complex/buildings/${row.id}`}> Перейти</Button>}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                </Table>
            </TableContainer>
            
            <Button sx={{color: '#fff', bgcolor: 'secondary.main', my: 2, fontWeight:'400'}} variant='contained'>Добавить объект</Button>
        </>

    </>

  )
}

export default BuildingsTable