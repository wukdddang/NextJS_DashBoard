import { FaCheck } from 'react-icons/fa6';
import Loader, { IconStyleClassName } from '@/app/components/atoms/Loader';
import { RxCross2 } from 'react-icons/rx';
import { processStatusObj } from '@/app/components/organisms/CurrentProcessInfo';

export default function StatusIcons({
  processStatus,
}: {
  processStatus: keyof typeof processStatusObj;
}) {
  switch (processStatus) {
    case 'Active':
      return <Loader />;
    case 'Completed':
      return <FaCheck className={IconStyleClassName} />;
    default:
      return <RxCross2 className={IconStyleClassName} />;
  }
}
