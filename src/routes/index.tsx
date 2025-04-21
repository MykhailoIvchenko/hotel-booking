import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router';

import DefaultLayout from '@/layout/DefaultLayout';
import { routerConfig } from './config';
import Home from '@/pages/Home';
import AppLayout from '@/layout/AppLayout';
import NotFound from '@/pages/NotFound';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route element={<DefaultLayout />}>
        <Route path={routerConfig.home.path} element={<Home />} />
        <Route path={routerConfig.booking.path} element={<></>} />
        <Route path={routerConfig.visaApplication.path} element={<></>} />
        <Route path={routerConfig.whatsAppConcierge.path} element={<></>} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Route>
  ),
  {
    basename: '/',
  }
);
