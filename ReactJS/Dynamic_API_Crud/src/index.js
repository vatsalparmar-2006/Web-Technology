import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
// import DisplayStudent from './StaticCrud/DisplayStudents';
import Layout from './MockAPICrud/Layout';
import Home from './MockAPICrud/Home';
import Student from './MockAPICrud/StudentFromMockAPI';
import AddStudent from './MockAPICrud/AddStudent';
import DeleteStudent from './MockAPICrud/DeleteStudent';
import EditStudent from './MockAPICrud/EditStudent';

import Faculties from './MongoExpressCrud.js/FacultiesFromMongo_Express';
import AddFaculty from './MongoExpressCrud.js/AddFaculty';
import DeleteFaculty from './MongoExpressCrud.js/DeleteFaculty';
import EditFaculty from './MongoExpressCrud.js/EditFaculty';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // <DisplayStudent/>   //STATIC CRUD

  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path='/students' element={<Student />}></Route>
        <Route path='/students/add' element={<AddStudent />}></Route>
        <Route path='/students/delete/:id' element={<DeleteStudent />}></Route>
        <Route path='/students/edit/:id' element={<EditStudent />}></Route>

        <Route path='/faculties' element={<Faculties />}></Route>
        <Route path='/faculties/add' element={<AddFaculty />}></Route>
        <Route path='/faculties/delete/:id' element={<DeleteFaculty />}></Route>
        <Route path='/faculties/edit/:id' element={<EditFaculty />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>     
);