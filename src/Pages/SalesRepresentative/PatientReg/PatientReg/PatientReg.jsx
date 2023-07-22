import Box from "src/ReusableComponents/Box";
import NavBar from "../../Shared/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import PatientRegImg from "src/assets/SalesRepresentation/PatientReg.png"
import "./PatientReg.css"
const PatientReg = () => {
    return (
        <Box>
            <NavBar></NavBar>
            <Box 
            display="flex" className="patient">
                <Box>
                    <img src={PatientRegImg} alt="" />
                </Box>
                <Outlet></Outlet>
            </Box>
        </Box>
    );
};

export default PatientReg;