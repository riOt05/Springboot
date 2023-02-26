import './Crud.css';
function Crud({setCrud,setGet,setInsert,setUpdate,setDelete}) {
  function router(page){
    // console.log("g");
    setCrud(false)
    setGet(false)
    setInsert(false)
    setUpdate(false)
    setDelete(false)
    if(page==='insert'){
      setInsert(true)
    }
    else if(page==='get'){
      setGet(true)
    }
    else if(page==='update'){
      setUpdate(true)
    }
    else if(page==='delete'){
      setDelete(true)
    }
  }
  return (
    <>
       <div className="App">
        <h1>Elliot Laptops</h1>
      </div>
      <form className='formc'>
        <center><h3 id="sign">DataBase Management</h3></center> 
        <center><h2 >CRUD Operations</h2></center> 
        <div className="sub"><hr></hr>
          <button id = "btn"className="subc clrc btn btn-primary" onClick={()=>router("insert")}>
            <b>ADD Data</b>
          </button>
        <hr></hr>
          <button id = "btn" className="subc clrc btn btn-primary" >
            <b>GET All Data</b>
          </button>
        <hr></hr>
          <button id = "btn"  className="subc clrc btn btn-primary" onClick={()=>router("get")}>
          <b>GET Data By Id</b>
          </button>
        <hr></hr>
          <button id = "btn"  className="subc clrc btn btn-primary" onClick={()=>router("update")}>
          <b>UPDATE Data By Id</b>
          </button>
        <hr></hr>
          <button id = "btn"  className="subc clrc btn btn-primary" onClick={()=>router("delete")}>
          <b>DELETE Data By Id</b>
          </button><hr></hr>
        </div>
      </form>
    </>
  );}
export default Crud;
