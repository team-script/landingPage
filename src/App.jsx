import { Outlet } from "react-router-dom";
import "./App.css";
import NavigationBar from "./Pages/LandingPage/Shared/NavigationBar/NavigationBar";
import Footer from "./Pages/LandingPage/Shared/Footer/Footer";

const App = () => {
  return (
    <>
     {/* <Header />
      <Container style={{ maxWidth: "1800px" }}>
        <DoctorsList /> */}
        {/* <Login /> */}
      {/* </Container> */}
    <NavigationBar></NavigationBar>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  );
};

export default App;
