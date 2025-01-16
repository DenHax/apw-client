import React from "react";

const EmployeeRow = ({ employee, isEditing, onDoubleClick, onChange }) => {
  return (
    <tr onDoubleClick={() => onDoubleClick(employee)}>
      <td>{employee.employee_id}</td>
      <td>
        {isEditing ? (
          <input
            name="firstname"
            value={employee.firstname}
            onChange={onChange}
            className="input-field"
          />
        ) : (
          employee.firstname
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            name="surname"
            value={employee.surname}
            onChange={onChange}
            className="input-field"
          />
        ) : (
          employee.surname
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            name="lastname"
            value={employee.lastname || ""}
            onChange={onChange}
            className="input-field"
          />
        ) : (
          employee.lastname
        )}
      </td>
      <td>{employee.subsystem_id}</td>
      <td>
        {isEditing ? (
          <input
            name="title"
            value={employee.title}
            onChange={onChange}
            className="input-field"
          />
        ) : (
          employee.title
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            name="phone"
            value={employee.phone}
            onChange={onChange}
            className="input-field"
          />
        ) : (
          employee.phone
        )}
      </td>
    </tr>
  );
};

export default EmployeeRow;
