import MainWrapper from '@/app/components/organisms/MainWrapper';

export default function layout({
  children,
  map,
  info,
}: {
  children: React.ReactNode;
  map: React.ReactNode;
  info: React.ReactNode;
}) {
  return (
    <>
      <MainWrapper>
        <div className="page-wrapper">
          <div className="container-fluid">
            {children}
            <div className="row">
              <div className="col-lg-8">{map}</div>
              <div className="col-lg-4">{info}</div>
            </div>
          </div>
        </div>
      </MainWrapper>
    </>
  );
}
