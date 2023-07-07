import React from "react";

interface SidebarCategoryItemProps {
  icon: React.ReactNode;
  title: string;
  url: string;
}

const SidebarCategoryItem = ({
  icon,
  title,
  url,
}: SidebarCategoryItemProps) => {
  return (
    <div className="sidebar-item">
      <div>
        <div className="d-flex  align-items-center px-2 py-1 rounded">
          <div>{icon}</div>
          <div className="mx-4">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default SidebarCategoryItem;
