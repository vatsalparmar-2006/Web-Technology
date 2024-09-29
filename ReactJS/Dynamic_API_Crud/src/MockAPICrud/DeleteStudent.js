import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function DeleteStudent() {

    const [data, setData] = useState({});

    const { id } = useParams();

    const navigate = useNavigate();

    const apiUrl = "https://66f7b785b5d85f31a3436025.mockapi.io/Students/" + id;

    useEffect(() => {
        fetch(apiUrl, { method: "GET" })
            .then(res => res.json())
            .then(res => setData(res));
    }, []);

    fetch(apiUrl, { method: "DELETE" })
    .then(res => res.json())
    .then(res => {
        navigate('/students');
    });

    return (
        <>
            <h1>Deleted...</h1>
        </>
    );
}

export default DeleteStudent;