import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Faculties() {

    const [data, setData] = useState([]);

    const apiUrl = "http://localhost:3001/Faculties";

    useEffect(() => {
        fetch(apiUrl).then(res => res.json()).then(res => setData(res));
    }, []);

    const FormatedFaculties = data.map((fac) => {
        return (
            <tr>
                <td>{fac.id}</td>
                <td>{fac.name}</td>
                <td>{fac.sub}</td>
                <td><Link to={"/faculties/delete/"+fac.id} className='btn btn-danger' >Delete</Link></td>
                <td><Link className="btn btn-warning" to={"/faculties/edit/" + fac.id}>Edit</Link></td>
            </tr>
        );
    });

    return(
        <>
            <table className="table">
                {FormatedFaculties}
            </table>
            <Link to="/faculties/add" className="btn btn-primary">Add Faculty</Link>
        </>
    )
}

export default Faculties;