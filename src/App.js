import MainContent from "./MainContent";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="container-fluid p-0 row m-0" style={{background:'red', height:'100vh'}}>
    <NavBar/>
    <MainContent/>
    </div>
  );
}

export default App;
