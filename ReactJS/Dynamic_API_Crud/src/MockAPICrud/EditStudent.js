import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditStudent() {
    const [data, setData] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const apiUrl = "https://66f7b785b5d85f31a3436025.mockapi.io/Students/" + id;
        fetch(apiUrl)
            .then(res => res.json())
            .then(res => setData(res))
    }, [])

    return (<>
        <div class="form-group row">
            <label for="text3" class="col-4 col-form-label">Student ID : </label>
            <div class="col-8">
                <input value={data.id} onChange={(e) => {
                    setData({ ...data, id: e.target.value })
                }} type="text" class="form-control" />
            </div>
        </div>
        <div class="form-group row">
            <label for="text1" class="col-4 col-form-label">Student Name : </label>
            <div class="col-8">
                <input value={data.name} onChange={(e) => {
                    setData({ ...data, name: e.target.value })
                }} type="text" class="form-control" />
            </div>
        </div>
        <div class="form-group row">
            <label for="text" class="col-4 col-form-label">Image Path : </label>
            <div class="col-8">
                <input value={data.avatar} onChange={(e) => {
                    setData({ ...data, avatar: e.target.value })
                }} type="text" class="form-control" />
            </div>
        </div>
        <div class="form-group row">
            <label for="text2" class="col-4 col-form-label">Enter birthdate : </label>
            <div class="col-8">
                <input value={data.birthdate} onChange={(e) => {
                    setData({ ...data, birthdate: e.target.value })
                }} type="text" class="form-control" />
            </div>
        </div>

        <div class="form-group row">
            <div class="offset-4 col-8">
                <button onClick={() => {
                    const apiUrl = "https://66f7b785b5d85f31a3436025.mockapi.io/Students/" + id;
                    fetch(apiUrl, {
                        method: "PUT",
                        body: JSON.stringify(data),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                        .then(res => res.json())
                        .then(res => {
                            navigate("/students")
                        });
                }} class="btn btn-primary m-3">Edit</button>
            </div>
        </div>
    </>);
}

export default EditStudent;