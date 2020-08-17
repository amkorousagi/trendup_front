import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/views/account/AccountView';
import CustomerListView from 'src/views/customer/CustomerListView';
import DashboardView from 'src/views/reports/DashboardView';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import ProductListView from 'src/views/product/ProductListView';
import RegisterView from 'src/views/auth/RegisterView';
import SettingsView from 'src/views/settings/SettingsView';

import Trendup_Home from 'src/views/Trendup'
import Trendup_Clothes from 'src/views/Trendup/clothes'
import Trendup_Clothes_Map from 'src/views/Trendup/clothes/trendmap'
import Trendup_Clothes_Rank from 'src/views/Trendup/clothes/trendrank'
import Trendup_Clothes_Future from 'src/views/Trendup/clothes/trendfuture'


const routes = [
  
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {path: 'clothes', element: <Trendup_Clothes/> },
      {path: 'food', element: <NotFoundView/>},
      {path: 'trendup', element: <Trendup_Home/>},
      {path: '/', element: <Navigate to="/trendup"/>}
    ]
  },
  
  {
    path: 'clothes',
    element: <MainLayout/>,
    children: [
      {path: 'map', element: <Trendup_Clothes_Map/>},
      {path: 'rank', element: <Trendup_Clothes_Rank/>},
      {path: 'future', element: <Trendup_Clothes_Future/>}
    ]
  }
  
  /*
  {
    
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <AccountView /> },
      { path: 'customers', element: <CustomerListView /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'products', element: <ProductListView /> },
      { path: 'settings', element: <SettingsView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> },
      { path: 'trendup', element: <Trendup_Clothes/>}
    ]
  }
  */
];

export default routes;
