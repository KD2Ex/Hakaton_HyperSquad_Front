import React from 'react';
import AdminPage from './pages/AdminPage';
import MainPage from './pages/MainPage';
import Dashboard from "./components/dashboards/Dashboard";
import BuildingsTable from "./components/BuildingsTable";
import BuildingDashboard from "./components/dashboards/BuildingDashboard";
import FlatDashboard from "./components/dashboards/FlatDashboard";

export const routes = [
    {
        path: '/',
        element: <MainPage/>,
    },
    {
        path: '/complex',
        element: <AdminPage/>,
        children: [
            {
                path: '/complex/dashboard',
                element: <Dashboard/>,
            },
            {
                path: '/complex/buildings',
                element: <BuildingsTable/>,
            }
        ]
    },
    {
        path: '/complex/buildings/:buildingID',
        element: <BuildingDashboard/>
    },
    {
        path: '/complex/buildings/:buildingID/:flatID',
        element: <FlatDashboard/>
    }
]

