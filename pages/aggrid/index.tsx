import Image from "next/image";
import { Inter } from "next/font/google";
import React, { useState } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import CustomGroupComponent from "../../components/CustomGroupComponent";

const IndexPage = () => {
  const rowData = [
    { category: "Fruits", name: "Apple", price: 0.5 },
    { category: "Fruits", name: "Banana", price: 0.3 },
    { category: "Vegetables", name: "Carrot", price: 0.2 },
    { category: "Vegetables", name: "Potato", price: 0.15 },
  ];

  return (
    <div className="w-full h-screen">
      <div
        className="ag-theme-alpine w-full h-full"
        style={{
          height: "500px",
          width: "800px",
          margin: "auto",
        }}
      >
        <AgGridReact
          rowData={rowData}
          groupUseEntireRow={true}
          groupDefaultExpanded={-1}
          groupRowRendererFramework={CustomGroupComponent}
          groupRowRendererParams={{
            groupDisplayName: "Category",
          }}
        >
          <AgGridColumn
            field="category"
            rowGroup={true}
            hide={true}
          ></AgGridColumn>
          <AgGridColumn field="name"></AgGridColumn>
          <AgGridColumn field="price"></AgGridColumn>
        </AgGridReact>
      </div>
    </div>
  );
};

export default IndexPage;
