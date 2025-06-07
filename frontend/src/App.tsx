import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { RouterProvider } from 'react-router';
import { router } from '@/routes';
import './index.css';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
