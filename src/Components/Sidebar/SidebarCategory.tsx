import React from "react";

interface SidebarCategoryProps {
  categoryName: string | null;
  children: React.ReactNode;
}
const SidebarCategory = ({ categoryName, children }: SidebarCategoryProps) => {
  return (
    <div className="sidebar-category col-10 p-3 ps-0">
      {categoryName && <h5>{categoryName}</h5>}
      <div>{children}</div>
    </div>
  );
};

export default SidebarCategory;
