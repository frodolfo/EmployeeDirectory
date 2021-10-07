import { useState } from "react";
import "./AddEmployee.css";

function AddPerson(props) {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [company, setCompany] = useState();

    const handleChange = (e) => {
        let id = e.target.dataset.id,
            value = e.target.value;


        switch(id.toUpperCase()) {
            case 'FIRSTNAME':
                setFirstName(value);
                break;
        
            case 'LASTNAME':
                setLastName(value);
                break;
    
            default:
                setCompany(value);
        }
    };

    const handleClick = () => {
        props.addHandler({
            firstName,
            lastName,
            company
        });
    }

    return (
        <div className="add-person">
            <ul>
                <li>First Name: <input type="text" name="firstName" value={firstName} data-id="firstName" onChange={handleChange} /></li>
                <li>Last Name: <input type="text" name="lastName" value={lastName} data-id="lastName" onChange={handleChange}/></li>
                <li>Company: <input type="text" name="company" value={company} data-id="company" onChange={handleChange} /></li>
            </ul>
            <button type="button" onClick={handleClick}>Add</button>
        </div>
    );
}

export default AddPerson;