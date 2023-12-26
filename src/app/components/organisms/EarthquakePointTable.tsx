// import { EarthquakePointTableType } from '@/app/containers/EarthquakePointTableContainer';
// import HistoryFilter from '@/app/history/HistoryFilter';
import { EqPointsType } from '@/app/store/GlobalStore';
import { ProcessStatusType } from '@/app/utils/getProcessStatus';
// import { getTableCellStyles } from '@/app/utils/getTableCellStyles';
// import { flexRender } from '@tanstack/react-table';
// import { Table } from '@tanstack/table-core';

type Props = {
  // table: Table<EarthquakePointTableType>;
  processStatus: ProcessStatusType[];
  currentEqPoint: EqPointsType;
  isHistoryPage?: boolean;
};

export default function EarthquakePointTable({
  // table,
  processStatus,
  currentEqPoint,
  isHistoryPage = false,
}: Props) {
  return (
    <>
      <div className="tw-flex tw-w-full tw-items-center tw-border-b-2 tw-pb-4">
        <h4 className="tw-mr-4 tw-text-[42px] tw-font-light tw-tracking-[-1px]">
          {currentEqPoint?.mag}
        </h4>
        <p className="tw-flex tw-flex-col">
          <span className="tw-text-[28px] tw-font-[300] tw-tracking-[-1px]">
            {currentEqPoint?.location}
          </span>
          <span className="tw-text-[14px] tw-tracking-[-1px] tw-opacity-50">
            {currentEqPoint?.createdAt}
          </span>
          {currentEqPoint && (
            <span className="tw-text-[14px] tw-tracking-[-1px] tw-opacity-50">
              latitude: {currentEqPoint?.lat}, longitude: {currentEqPoint?.lng}
            </span>
          )}
        </p>
      </div>
      <div className="tw-mt-[30px]">
        {processStatus.map((status, idx) => {
          return (
            <div key={idx} className="tw-mb-[24px] tw-flex tw-w-full tw-items-center tw-pl-4">
              {status?.status}
              <div className="tw-relative tw-ml-4 tw-flex tw-grow tw-justify-between">
                <p className="tw-flex tw-flex-col">
                  <span className="tw-text-[18px] tw-font-[700] tw-tracking-[-1px]">
                    {status?.phase}
                  </span>
                  <span className="tw-text-[12px] tw-font-[500] tw-tracking-[-1px] tw-opacity-50">
                    {status?.dataAcquisition} {status?.processingAlgorithms}
                  </span>
                </p>
                <p className="tw-absolute tw-right-4">
                  {status?.processButton && status.processButton}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {/* <table className="table table-striped">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <>
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? 'tw-cursor-pointer tw-select-none tw-font-bold tw-text-[12px]'
                              : '',
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(header.column.columnDef.header, header.getContext())}
                          {{
                            asc: ' 🔼',
                            desc: ' 🔽',
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
                        {header.column.getCanFilter() ? (
                          <div>
                            <HistoryFilter column={header.column} table={table} />
                          </div>
                        ) : null}
                      </>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  const cellStyle = getTableCellStyles(cell, isHistoryPage);
                  return (
                    <td key={cell.id} style={cellStyle}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table> */}
    </>
  );
}
