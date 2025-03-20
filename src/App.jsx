import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root.jsx';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DetailPage from './pages/DetailPage';

function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Root />,
        children: [
          { index: true, element: <HomePage /> },
          { path: '/about', element: <AboutPage /> },
          { path: '/details/:id', element: <DetailPage /> },
        ],
      },
    ],
    { basename: '/mlymperi/' }
  );

  return <RouterProvider router={router} />;
}

export default App;
