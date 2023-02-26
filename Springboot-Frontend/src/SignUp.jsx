import './SignUp.css';
function SignUp({setSignIN,setLogin}) {

          function  routeMe(){
            setSignIN(false)
            setLogin(true)
          }
  return (
    <>
       <div className="App">
        <h1>Elliot Laptops</h1>
      </div>
      <form className="signform">
        <center><h3 id="sign">SignUp</h3></center>
        <div className="email">
          <label>Email address</label><br></br>
          <input
            id="in1"
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="name">
          <label>User Name</label><br></br>
          <input
            id="in2"
            type="text"
            className="form-control"
            placeholder="Enter New User Name"
          />
        </div>
        <div className="pass1">
          <label>Create Password</label><br></br>
          <input
            id="in3"
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="cbk1">
          <div className="custom-control custom-checkbox">
            <input
            onClick={ (event)=>{
                let tag = document.querySelector("#in3");
                console.log(tag);
              if(event.target.checked){
                tag.type="text";
                return;
              }
              tag.type="password"
            }}
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label1" >
              Show Password
            </label>
          </div>
        </div>
        <div className="pass2">
          <label>Confirm Password</label><br></br>
          <input
            id="in4"
            type="password"
            className="form-control"
            placeholder="Re-Enter password"
          />
        </div>
        <div className="cbk2">
          <div className="custom-control custom-checkbox">
            <input
            onClick={ (event)=>{let tag = document.querySelector("#in4");
              console.log(tag);
            if(event.target.checked){
              tag.type="text";
              return;}tag.type="password"}}
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"/>
            <label className="custom-control-label2" >
              Show Password
            </label>
          </div>
        </div> 
          <button id="ssub" type="submit"  onClick={()=>{ routeMe()}} className="subs clr btn btn-primary">
            Submit
          </button>
        <div className='news'>
        <p>
          Existing User ? <p id = "links" onClick={()=>{routeMe()}}>Login</p>
        </p>
        </div>

      </form>
    </>
  );
}
export default SignUp;
