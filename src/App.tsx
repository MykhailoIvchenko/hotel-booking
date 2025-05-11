import { Provider } from 'react-redux';
import './index.css';
import { store } from '@/redux/store';
import { RouterProvider } from 'react-router';
import { router } from '@/routes';
import { useInitIndexedDb } from './hooks/useInitIndexedDb';

function App() {
  useInitIndexedDb();
  
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
