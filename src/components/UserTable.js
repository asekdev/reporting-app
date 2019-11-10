import React, { useState, useEffect } from "react";
import { Table, Button, Col } from "reactstrap";
import UserTableRow from "./UserTableRow";
import ErrorHandler from "./ErrorHandler";

const UserTable = ({ customer_info }) => {
  const [custInfo, setCustInfo] = useState(null);
  const [direction, setDirection] = useState("DESC");

  const sortBy = (type, direction) => {
    let sortedData;

    if (custInfo === null) {
      return;
    }

    if (direction === "DESC") {
      sortedData = customer_info.sort((a, b) => b[type] - a[type]);
      setDirection("ASC");
    } else {
      sortedData = customer_info.sort((a, b) => a[type] - b[type]);
      setDirection("DESC");
    }

    setCustInfo(sortedData);
  };

  useEffect(() => {
    setCustInfo(customer_info);
  }, [customer_info]);

  return (
    <>
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th
              className="filteredCol"
              onClick={() => sortBy("visit_count", direction)}
            >
              Vist Count
            </th>
            <th
              className="filteredCol"
              onClick={() => sortBy("total_spend", direction)}
            >
              Total Spend
            </th>
          </tr>
        </thead>
        {custInfo !== null && (
          <tbody>
            {custInfo.map(d => (
              <UserTableRow key={d.id} data={d} />
            ))}
          </tbody>
        )}
      </Table>
      {customer_info === null && <ErrorHandler message="No data to display." />}
    </>
  );
};

export default UserTable;
