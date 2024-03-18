import React from "react";
import { Link } from "react-router-dom";

const StandardComponentList = ({ data }) => {
  return (
    <div>
      <h2>List of Subdomains</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Route Name</th>
            <th>Create Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.attributes.routeName}</td>
              <td>{new Date(item.attributes.createdAt).toLocaleString()}</td>
              <td>
                <Link
                  to={`${window.location.protocol}//${item.attributes.routeName}.${window.location.host}`}
                  target="_blank"
                >
                  View
                </Link>
                <Link
                  style={{ marginLeft: "10px" }}
                  to={`/edit-page/${item.id}`}
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StandardComponentList;
