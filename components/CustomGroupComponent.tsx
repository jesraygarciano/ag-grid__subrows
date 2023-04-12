// components/CustomGroupComponent.tsx
import React from "react";
import { ICellRendererParams } from "ag-grid-community";

interface CustomGroupComponentProps extends ICellRendererParams {
  groupDisplayName: string;
}

const CustomGroupComponent: React.FC<CustomGroupComponentProps> = ({
  groupDisplayName,
}) => {
  return (
    <div className="flex items-center">
      <span className="font-semibold mr-2">{groupDisplayName}</span>
    </div>
  );
};

export default CustomGroupComponent;
