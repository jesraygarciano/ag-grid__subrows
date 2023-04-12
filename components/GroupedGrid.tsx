import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";

interface GridData {
  group: string;
  name: string;
  age: number;
}

const rowData: GridData[] = [
  { group: "Group A", name: "John", age: 25 },
  { group: "Group A", name: "Mary", age: 30 },
  { group: "Group B", name: "Steve", age: 42 },
  { group: "Group B", name: "Susan", age: 35 },
];

const GroupedGrid: React.FC = () => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);

  const groupCellRenderer = (params: any) => {
    const isGrouped = params.node.expanded === undefined;
    if (isGrouped) {
      const groupTitle = params.value;
      const expandIcon = params.node.expanded ? "▼" : "▶";
      return `${expandIcon} ${groupTitle}`;
    }
    return "";
  };

  const onCellClicked = (params: any) => {
    if (
      params.column.getColId() === "group" &&
      params.node.expanded !== undefined
    ) {
      params.node.setExpanded(!params.node.expanded);
    }
  };

  const onGridReady = (params: any) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  };

  const columnDefs = [
    {
      field: "group",
      cellRenderer: groupCellRenderer,
      cellRendererParams: { innerRenderer: groupCellRenderer },
    },
    { field: "name" },
    { field: "age" },
  ];

  return (
    <div className="ag-theme-alpine" style={{ width: "100%", height: "400px" }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        onGridReady={onGridReady}
        onCellClicked={onCellClicked}
      />
    </div>
  );
};

export default GroupedGrid;
