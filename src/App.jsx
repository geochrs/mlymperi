import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/rOOT.JSX';
import HomePage from './pages/HomePage';

function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Root />,
        children: [{ index: true, element: <HomePage /> }],
      },
    ],
    { basename: '/mlymperi/' } // Add basename here
  );

  return <RouterProvider router={router} />;
}

export default App;
