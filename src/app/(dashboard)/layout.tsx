import MainWrapper from '@/app/components/organisms/MainWrapper';

export default function Layout(props: {
  children: React.ReactNode;
  map: React.ReactNode;
  info: React.ReactNode;
  lastInfo: React.ReactNode; // 추가된 lastInfo prop 타입
}) {
  return (
    <MainWrapper>
      <div className="page-wrapper">
        <div className="container-fluid">
          {props.children}
          {/* <div className="row">
            <div className="col-lg-6">{props.map}</div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-12">{props.info}</div>
                <div className="col-lg-12">{props.lastInfo}</div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </MainWrapper>
  );
}
