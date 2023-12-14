import Script from 'next/script';
import BootstrapClient from '@/app/components/BootStrapClient';
import Header from '../components/organisms/Header';
import MainWrapper from '../components/organisms/MainWrapper';
import SideBarContainer from '../containers/SideBarContainer';
import { ToastContainer } from 'react-toastify';

export default function layout({
  children,
  map,
  detail,
}: {
  children: React.ReactNode;
  map: React.ReactNode;
  detail: React.ReactNode;
}) {
  return (
    <>
      <MainWrapper>
        <Header />
        <div className="page-wrapper">
          <SideBarContainer />
          {children}
          {map}
          {detail}
        </div>
      </MainWrapper>
      <BootstrapClient />
      <Script src="/assets/libs/jquery/dist/jquery.min.js" />
      <ToastContainer />
    </>
  );
}
