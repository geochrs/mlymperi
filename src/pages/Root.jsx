import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import ScrollToTop from '../components/layout/ScrollToTop';

export default function Root() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
