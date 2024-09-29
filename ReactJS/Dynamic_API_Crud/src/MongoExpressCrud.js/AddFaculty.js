import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddFaculty() {

    const [data, setData] = useState({});
    const navigate = useNavigate();

    return (
        <>
            <div class="form-group row">
                <label for="text2" class="col-4 col-form-label">Faculty ID : </label>
                <div class="col-8">
                    <input onChange={(e) => {
                        setData({ ...data, id: e.target.value })
                    }} type="text" class="form-control" />
                </div>
            </div>
            <div class="form-group row">
                <label for="text1" class="col-4 col-form-label">Faculty Name : </label>
                <div class="col-8">
                    <input onChange={(e) => {
                        setData({ ...data, name: e.target.value })
                    }} type="text" class="form-control" />
                </div>
            </div>
            <div class="form-group row">
                <label for="text3" class="col-4 col-form-label">Enter Subject : </label>
                <div class="col-8">
                    <input onChange={(e) => {
                        setData({ ...data, sub: e.target.value })
                    }} type="text" class="form-control" />
                </div>
            </div>

            <div class="form-group row p-3">
                <div class="offset-4 col-8">
                    <button onClick={() => {
                        const apiUrl = "http://localhost:3001/Faculties";

                        fetch(apiUrl, {
                            method: "POST",
                            body: JSON.stringify(data),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })
                            .then(res => res.json())
                            .then(res => {
                                navigate('/faculties');
                            });
                    }} name="submit" class="btn btn-primary m-3">Submit</button>
                </div>
            </div>
        </>
    );
}

export default AddFaculty;