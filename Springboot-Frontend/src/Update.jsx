import './Update.css';
function Update() {
  return (
    <>
       <div className="App">
        <h1>Elliot Laptops</h1>
      </div>
      <form className="formu">
        <center><h3 id="sign">Update(PUT)</h3></center>
        <div className="email">
          <label>Product Id</label><br></br>
          <input
            id="in2"
            type="number"
            className="form-control"
            placeholder="Enter Pid of data you need to update"
          />
        </div>
        <div className="name">
          <label>Brand</label><br></br>
          <input
            id="in1"
            type="text"
            className="form-control"
            placeholder="Enter Brand Name"
          />
        </div>
        <div className="pass1">
          <label>Model</label><br></br>
          <input
            id="in1"
            type="text"
            className="form-control"
            placeholder="Enter Model Name"
          />
        </div>
        <div className="pass2">
          <label>Price</label><br></br>
          <input
            id="in2"
            type="number"
            className="form-control"
            placeholder="Enter Product Price"
          />
        </div>        
         <div className="pass3">
          <label>Series</label><br></br>
          <input
            id="in1"
            type="text"
            className="form-control"
            placeholder="Enter Series Type"
          />
        </div> 
          <button id="upd" type="submit" className="sub clr btn btn-primary" onClick={()=>alert("Data has been Updated Successfully")}>
            UPDATE
          </button>
      </form>
    </>
  );
}
export default Update;
