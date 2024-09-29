import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function DeleteFaculty() {

    const [data, setData] = useState({});

    const { id } = useParams();

    const navigate = useNavigate();

    const apiUrl = "http://localhost:3001/Faculties/" + id;

    useEffect(() => {
        fetch(apiUrl, { method: "GET" })
            .then(res => res.json())
            .then(res => setData(res));
    }, []);

    fetch(apiUrl, { method: "DELETE" })
    .then(res => res.json())
    .then(res => {
        navigate('/faculties');
    });

    return (
        <>
            <h1>Deleted...</h1>
        </>
    );
}

export default DeleteFaculty;