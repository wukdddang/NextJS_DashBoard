export default function TableHeader({ tableSpan }: { tableSpan: number }) {
  return <div className={`col-lg-${tableSpan}`}></div>;
}
