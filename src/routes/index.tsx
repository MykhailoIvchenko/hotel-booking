import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router';

import DefaultLayout from '@/layout/DefaultLayout';
import { routerConfig } from './config';
import Home from '@/pages/home/Home';
import AppLayout from '@/layout/AppLayout';
import NotFound from '@/pages/NotFound';
import AuthLayout from '@/layout/authLayout/AuthLayout';
import Referral from '@/pages/referral/Referral';
import SignIn from '@/pages/signIn/SignIn';
import SignUp from '@/pages/signUp/SignUp';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route element={<DefaultLayout />}>
        <Route path={routerConfig.home.path} element={<Home />} />
        <Route path={routerConfig.booking.path} element={<Home />} />
        <Route path={routerConfig.visaApplication.path} element={<></>} />
        <Route path={routerConfig.whatsAppConcierge.path} element={<></>} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path={routerConfig.signIn.path} element={<SignIn />} />
        <Route path={routerConfig.signUp.path} element={<SignUp />} />
        <Route path={routerConfig.referralSignUp.path} element={<Referral />} />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Route>
  ),
  {
    basename: '/',
  }
);
