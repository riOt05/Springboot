import './Get.css';
function Get  () {
  return (
    <>
      <div className="App">
        <h1>Riot Laptops</h1>
      </div>
      <form>
        <center><h3 id="sign">Get</h3></center>
        <div className="email">
          <label>Product ID</label><br></br>
          <input
            id="in1"
            type="text"
            className="form-control"
            placeholder="Enter Pid of data you need to view"
          />
        </div>
          <button id="btnid" type="submit" className="sub clr btn btn-primary">
            GET
          </button>
      </form>
    </>
  );
}
export default Get;
