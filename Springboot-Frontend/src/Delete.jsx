import './Delete.css';
function Delete() {
  return (
    <>
      <div className="App">
        <h1>Riot Laptops</h1>
      </div>
      <form>
        <center><h3 id="sign">Delete</h3></center>
        <div className="email">
          <label>Product ID</label><br></br>
          <input
            id="in1"
            type="text"
            className="form-control"
            placeholder="Enter Pid of data you need to delete"
          />
        </div>
          <button id="btnid1"type="submit" className="sub clr btn btn-primary" onClick={()=>alert("Data has been Deleted Successfully")}>
            DELETE
          </button>
      </form>
    </>
  );
}
export default Delete;
