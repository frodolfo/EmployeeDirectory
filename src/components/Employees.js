import { useState } from "react";
import AddEmployee from "./AddEmployee";

function Employees(props) {
    const [employees, setEmployees] = useState([...props.data]);

    const addEmployee = (person) => {
        setEmployees([...employees, person]);
    };

    return (
        <>
            {employees.map((employee, index) => (
                <ul key={index}>
                    <li>First name: {employee.firstName}</li>
                    <li>Last name: {employee.lastName}</li>
                    <li>Company: {employee.company}</li>
                </ul>
            ))}
            <AddEmployee addHandler={addEmployee} />
        </>
    );
}

export default Employees;