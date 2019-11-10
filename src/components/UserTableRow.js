import React from "react";

const UserTableRow = ({ data }) => {
  const { first_name, last_name, email, city, visit_count, total_spend } = data;

  return (
    <tr>
      <td>{`${first_name} ${last_name}`}</td>
      <td>{email === null ? "-" : email}</td>
      <td>{city === null ? "-" : city}</td>
      <td>{visit_count}</td>
      <td>${total_spend}</td>
    </tr>
  );
};

export default UserTableRow;
