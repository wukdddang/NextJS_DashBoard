import { BiChevronRight } from "react-icons/bi";

export type SideBarItemProps = {
  text: string;
  icon: React.ReactElement;
  isHover: boolean;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  handleClick: () => void;
};

const SideBarItem = ({
  text,
  icon,
  isHover,
  handleMouseEnter,
  handleMouseLeave,
  handleClick,
}: SideBarItemProps) => {
  return (
    <>
      <div
        style={{
          height: "50px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor: isHover ? "lightblue" : "",
          width: "100%",
          cursor: "pointer",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <div
          style={{
            display: "flex",
            width: "60px",
            height: "50px",
            padding: "10px",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          {icon}
        </div>
        <span
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {text}
        </span>
      </div>
    </>
  );
};

export default SideBarItem;
