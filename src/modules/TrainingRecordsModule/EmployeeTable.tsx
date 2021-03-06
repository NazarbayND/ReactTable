import React from "react";
import Table from "../../components/common/table/Table";

const EmployeeTable = ({ names, onRowClick }) => {
  const tableColumn = [
    {
      path: "name",
      label: "Full Name",
      filter: true,
      style: {
        width: "150px",
      },
    },
  ];
  return (
    <div className="employeeTable">
      <Table
        data={names}
        columns={tableColumn}
        tableName="Employee ATE"
        popup={null}
        rowClick={onRowClick}
        rowIcons={{ reorder: false, next: false, checkbox: false }}
      />
    </div>
  );
};

export default EmployeeTable;
