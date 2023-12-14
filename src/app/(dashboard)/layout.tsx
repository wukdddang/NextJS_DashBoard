import Header from '../components/organisms/Header';
import MainWrapper from '../components/organisms/MainWrapper';
import SideBarContainer from '../containers/SideBarContainer';

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
    </>
  );
}
