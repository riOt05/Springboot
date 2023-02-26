import './Insert.css';
function Insert() {
  return (
    <>
       <div className="App">
        <h1>Elliot Laptops</h1>
      </div>
      <form className='formins'>
        <center><h3 id="sign">Insert(POST)</h3></center>
        <div className="email">
          <label>Product Id</label><br></br>
          <input
            id="in2"
            type="number"
            className="form-control"
            placeholder="Enter a new  Pid"
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
        <div className="sub">
          <button id="abc"type="submit" className="sub clr btn btn-primary" onClick={()=>alert("Data has been Inserted Successfully")}>
            ADD
          </button>
        </div>
      </form>
    </>
  );
}
export default Insert;
