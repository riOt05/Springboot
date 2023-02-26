import './App.css';
import SignUp from './SignUp';
import Login from './Login';
import Crud from './Crud';
import Insert from './Insert';
import Get from './Get';
import Update from './Update';
import Delete from './Delete';
import { useState } from 'react';

function App() {
  let[isSigin,setSignIN]=useState(false)
  let[isLogin,setLogin]=useState(true)
  let[isCrud,setCrud]=useState(false)
  let[isInsert,setInsert]=useState(false)
  let[isGet,setGet]=useState(false)
  let[isUpdate,setUpdate]=useState(false)
  let[isDelete,setDelete]=useState(false)

  return (
    <>
    {
    isSigin?<SignUp setLogin={setLogin} setSignIN={setSignIN}/>:
    isLogin?<Login setLogin={setLogin} setSignIN={setSignIN} setCrud={setCrud}/>:
    isCrud?<Crud setCrud={setCrud} setInsert={setInsert} setGet={setGet} setUpdate={setUpdate} setDelete={setDelete}/>:
    isInsert?<Insert/>:
    isGet?<Get/>:
    isUpdate?<Update/>:
    isDelete?<Delete/>:
    <h1>Save</h1>
    }
    </>
  );}
export default App;
