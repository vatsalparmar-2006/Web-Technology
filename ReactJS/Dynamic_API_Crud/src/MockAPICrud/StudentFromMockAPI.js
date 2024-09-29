import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Student() {

    const [data,setData] = useState([]);

    const apiUrl = "https://66f7b785b5d85f31a3436025.mockapi.io/Students";

    useEffect(()=>{
        fetch(apiUrl, {method: "GET"})
        .then(res=>res.json())
        .then(res=>setData(res))
    },[]);

    const FormatedStudents = data.map((stu)=>{
        return(
            <tr>
                <td>{stu.id}</td>
                <td>{stu.name}</td>
                <td>{stu.birthdate}</td>
                <td><img src={stu.avatar} /></td>
                <td><Link to={"/students/delete/"+stu.id} className='btn btn-danger' >Delete</Link></td>
                <td><Link to={"/students/edit/"+stu.id} className='btn btn-warning' >Edit</Link></td>
            </tr>
        );
    });

    return(
        <>
            <table className="table">{FormatedStudents}</table>
            <div>
                <Link className="btn btn-primary" to={"/students/add"}>Add</Link>
            </div>
        </>
    );
}

export default Student;