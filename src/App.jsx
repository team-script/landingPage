import { useRoutes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import { Container } from "@mui/material";
import Header from "./components/Header";
import Box from "./ReusableComponents/Box";
import DoctorsList from "./Pages/DoctorsPage";

const App = () => {
  return (
    <>
      <Header />
      <Container style={{ maxWidth: "1800px" }}>
        <DoctorsList />
        {/* <Login /> */}
      </Container>
    </>
  );
};

export default App;
