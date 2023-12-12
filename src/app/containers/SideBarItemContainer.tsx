'use client';

import { useState } from 'react';
import SideBarItem from '@/app/components/atoms/SideBarItem';

export type SideBarItemProps = {
  text: string;
  icon: React.ReactElement;
  // track?: UserTracker["track"];
};

const SideBarItemContainer = ({ text, icon }: SideBarItemProps) => {
  const [isMouseHovering, setIsMouseHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsMouseHovering(true);
  };
  const handleMouseLeave = () => {
    setIsMouseHovering(false);
  };

  const handleClick = () => {
    // track && track("homePage:sideBarItemContainer:click");
  };

  return (
    <SideBarItem
      text={text}
      icon={icon}
      isHover={isMouseHovering}
      handleMouseEnter={handleMouseEnter}
      handleMouseLeave={handleMouseLeave}
      handleClick={handleClick}
    />
  );
};

export default SideBarItemContainer;
