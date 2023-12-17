type Props = {
  tableTitle: string;
};

export default function EarthquakeDashboard({ tableTitle }: Props) {
  return (
    <div className="table-responsive">
      <div>
        <h4 className="tw-text-[24px] tw-font-bold tw-tracking-[-1px]">{tableTitle} </h4>
      </div>
      <table className="table mb-0 table-hover align-middle text-nowrap">
        <thead>
          <tr>
            <th rowSpan={2} colSpan={1} className="border-top-0">
              Magnitude
            </th>
            <th rowSpan={2} colSpan={1} className="border-top-0">
              Date
            </th>
            <th rowSpan={2} colSpan={1} className="border-top-0">
              Location
            </th>
            <th rowSpan={2} colSpan={1} className="border-top-0">
              Processed
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <div className="tw-mr-2">
                  <a href="#" className="btn btn-circle d-flex btn-info text-white">
                    6.5
                  </a>
                </div>
              </div>
            </td>
            <td>2024-01-04T01:23:19</td>
            <td>Kanyakumari, India</td>
            <td>
              <div className="d-flex justify-content-between">
                <span className="badge bg-danger">Failed</span>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <div className="tw-mr-2">
                  <a href="#" className="btn btn-circle d-flex btn-orange text-white">
                    6.5
                  </a>
                </div>
              </div>
            </td>
            <td>2024-01-01T11:49:32</td>
            <td>Bardufoss, Norway</td>
            <td>
              <div className="d-flex justify-content-between">
                <span className="badge bg-info">Waiting</span>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <div className="tw-mr-2">
                  <a href="#" className="btn btn-circle d-flex btn-orange text-white">
                    6.5
                  </a>
                </div>
              </div>
            </td>
            <td>2024-01-01T11:49:32</td>
            <td>Bardufoss, Norway</td>
            <td>
              <div className="d-flex justify-content-between">
                <span className="badge bg-info">Waiting</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
