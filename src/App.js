import 'react-perfect-scrollbar/dist/css/styles.css';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import routes from 'src/routes';
import { Route, BrowserRouter } from 'react-router-dom';


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
import Trendup_Keyword from 'src/views/Trendup/keyword'


const App = () => {
  const routing = useRoutes(routes);
  console.log(routing)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        {routing}
    </ThemeProvider>
  );
};

export default App;
  