import './login.css';
function Login({setLogin,setSignIN,setCrud}) {

  function router(page){
    setCrud(false)
    setLogin(false)
    setSignIN(false)
    if(page==='crud'){
      setCrud(true)
    }
    else if(page==='signin'){
      setSignIN(true)
    }
  }

  return (
    <>
      <div className="App">
        <h1>Riot Laptops</h1>
      </div>
      <form className="formid">
        <center><h3 id="sign">Login</h3></center>
        <div className="email">
          <label>Username</label><br></br>
          <input
            id="in1"
            type="text"
            className="form-control"
            placeholder="Enter Username"
          />
        </div>
        <div className="pass">
          <label>Password</label><br></br>
          <input
            id="in2"
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="cbk">
          <div className="custom-control custom-checkbox">
            <input
            onClick={ (event)=>{
                let tag = document.querySelectorAll("input");
              if(event.target.checked){
                tag[1].type="text";
                return;
              }
              tag[1].type="password"
            }}
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" >
              Show Password
            </label>
          </div>
        </div>
          <button id = "subl"type="submit" className="subl clr btn btn-primary" onClick={()=>router("crud")}>
            Submit
          </button>
        <div className='new'>
        <p id="newu">
          New User ? <p id = "linkl"onClick={()=>router("signin")}>SignUp</p>
        </p>
        </div>
      </form>
    </>
  );
}
export default Login;
