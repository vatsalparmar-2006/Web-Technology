import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditFaculty() {
    const [data, setData] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const apiUrl = "http://localhost:3001/Faculties/" + id;
        fetch(apiUrl)
            .then((res) => res.json())
            .then((res) => {setData(res[0]);console.log(data);})
    }, [])

    return (
        <>
            <div class="form-group row">
                <label for="text" class="col-4 col-form-label">Faculty ID : </label>
                <div class="col-8">
                    <input value={data.id} onChange={(e) => {
                        setData({ ...data, id: e.target.value })
                    }} type="text" class="form-control" />
                </div>
            </div>
            <div class="form-group row">
                <label for="text1" class="col-4 col-form-label">Faculty Name : </label>
                <div class="col-8">
                    <input value={data.name} onChange={(e) => {
                        setData({ ...data, name: e.target.value })
                    }} type="text" class="form-control" />
                </div>
            </div>
            <div class="form-group row">
                <label for="text" class="col-4 col-form-label">Enter Subject : </label>
                <div class="col-8">
                    <input value={data.sub} onChange={(e) => {
                        setData({ ...data, sub: e.target.value })
                    }} type="text" class="form-control" />
                </div>
            </div>

            <div class="form-group row">
                <div class="offset-4 col-8">
                    <button onClick={() => {
                        const apiUrl = "http://localhost:3001/Faculties/" + id;
                        fetch(apiUrl, {
                            method: "PATCH",
                            body: JSON.stringify(data),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })
                            .then(res => res.json())
                            .then(res => {
                                navigate("/faculties")
                            });
                    }} class="btn btn-primary m-3">Edit</button>
                </div>
            </div>
        </>);
}

export default EditFaculty;