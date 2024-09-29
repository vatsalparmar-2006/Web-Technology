import React,{ useState } from "react";

const DisplayStudent = () => {
    const [student, setStudent] = useState([]);
    const [data, setData] = useState({ Name: "", Sem: "" });
    const [index,setIndex] = useState("");
  
    const disStu = student.map((s,i) => {
      return (
        <>
          <h3>Name : {s.Name}</h3>
          <h3>Sem : {s.Sem}</h3>
          <div className="actionbtn2">
            <button style={{"margin-right":"10px"}} onClick={(e)=>{
              setData({...data,Name : s.Name,Sem:s.Sem});
              
              setIndex(i);
              
              const addedit = document.getElementById('addedit');
              addedit.innerHTML = "Edit";
              
            }}>Edit</button>
  
            <button onClick={(e)=>{
              e.preventDefault();
  
              student.splice(i,1);
              setStudent([...student]);
            }}>Delete</button>
          </div>
          <span>------------------------------------------</span>
        </>
      );
    })
  
    return (
      <>
        <div className="container" style={{padding:50}}>
          <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label" >Name : </label>
            <span> </span>
            <input type="text" value={data.Name} onChange={(e) => {
                setData({ ...data, Name: e.target.value });
              }} />
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">Sem : </label>
            <span> </span>
            <input type="text" value={data.Sem} onChange={(e) => {
                setData({ ...data, Sem: e.target.value });
              }} />
          </div>
          
          <div className="actionbtn">
            <button id="addedit" onClick={(e) => {
              e.preventDefault();
    
              if(document.getElementById('addedit').innerHTML == "add"){
                setStudent([data, ...student]);
                setData({ ...data, Name: "", Sem: "" });
              }
    
              else{
                student[index] = data;
                setData({ ...data, Name: "", Sem: "" });
                document.getElementById('addedit').innerHTML = "add";
              }
            }}>add</button>
          </div>
          <hr></hr>
          {disStu}
        </div>
      </>
    );
  }

export default DisplayStudent;