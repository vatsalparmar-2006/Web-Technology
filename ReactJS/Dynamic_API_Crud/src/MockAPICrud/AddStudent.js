import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddStudent() {

    const [data, setData] = useState({});
    const navigate = useNavigate();

    return (
        <>
            <div class="form-group row">
                <label for="text2" class="col-4 col-form-label">Student ID : </label>
                <div class="col-8">
                    <input onChange={(e) => {
                        setData({ ...data, id: e.target.value })
                    }} type="text" class="form-control" />
                </div>
            </div>
            <div class="form-group row">
                <label for="text1" class="col-4 col-form-label">Student Name : </label>
                <div class="col-8">
                    <input onChange={(e) => {
                        setData({ ...data, name: e.target.value })
                    }} type="text" class="form-control" />
                </div>
            </div>
            <div class="form-group row">
                <label for="text4" class="col-4 col-form-label">Image Path : </label>
                <div class="col-8">
                    <input onChange={(e) => {
                        setData({ ...data, avatar: e.target.value })
                    }} type="text" class="form-control" />
                </div>
            </div>
            <div class="form-group row">
                <label for="text3" class="col-4 col-form-label">Enter birthdate : </label>
                <div class="col-8">
                    <input onChange={(e) => {
                        setData({ ...data, birthdate: e.target.value })
                    }} type="text" class="form-control" />
                </div>
            </div>

            <div class="form-group row p-3">
                <div class="offset-4 col-8">
                    <button onClick={() => {
                        const apiUrl = "https://66f7b785b5d85f31a3436025.mockapi.io/Students";

                        fetch(apiUrl, {
                            method: "POST",
                            body: JSON.stringify(data),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })
                            .then(res => res.json())
                            .then(res => {
                                navigate('/students');
                            });
                    }} name="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </>
    );
}

export default AddStudent;