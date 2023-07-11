import React from "react";

interface SidebarCategoryProps {
  categoryName: string | null;
  children: React.ReactNode;
}
const SidebarCategory = ({ categoryName, children }: SidebarCategoryProps) => {
  return (
    <div className="sidebar-category p-3 ps-0">
      {categoryName && <h5 className="d-inline-block">{categoryName}</h5>}
      <div>{children}</div>
    </div>
  );
};

export default SidebarCategory;
