import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/rOOT.JSX';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Root />,
        children: [
          { index: true, element: <HomePage /> },
          { path: '/about', element: <AboutPage /> },
        ],
      },
    ],
    { basename: '/mlymperi/' }
  );

  return <RouterProvider router={router} />;
}

export default App;
