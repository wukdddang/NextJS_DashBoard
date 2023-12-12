import { FaEarthAsia, FaRegFolder } from 'react-icons/fa6';
import { SlReload } from 'react-icons/sl';
import SideBarItemContainer from '@/app/containers/SideBarItemContainer';

export default function SideBar() {
  return (
    <nav
      className="bg-white h-100 position-fixed no-scrollbar tw-w-[250px] tw-z-1 tw-left-0 tw-overflow-y-scroll tw-border"
      style={{
        transition: '0.3s ease',
      }}
    >
      <div className="tw-flex tw-top-10 tw-flex-col tw-absolute tw-w-full">
        {/* SideBar의 각 Item들을 렌더링하는 SideBarItemContainer 컴포넌트 */}
        <SideBarItemContainer text="Dashboard" icon={<FaEarthAsia size={20} role="Dashboard" />} />
        <SideBarItemContainer text="History" icon={<FaRegFolder size={20} role="History" />} />
        <SideBarItemContainer text="Refresh" icon={<SlReload size={20} role="Refresh" />} />
      </div>
    </nav>
  );
}
