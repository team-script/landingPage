import Approach from "../HomeSections/Approach/Approach";
import Blogs from "../HomeSections/Blogs/Blogs";
import Carousel from "../HomeSections/Carousel/Carousel";
import ConsultationBooking from "../HomeSections/ConsultationBooking/ConsultationBooking";
import Download from "../HomeSections/Download/Download";
import Hero from "../HomeSections/Hero/Hero";
import PatientsSay from "../HomeSections/PatientsSay/PatientsSay";
import TopDoctors from "../HomeSections/TopDoctors/TopDoctors";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Carousel></Carousel>
            <TopDoctors></TopDoctors>
            <Approach></Approach>
            <ConsultationBooking></ConsultationBooking>
            <PatientsSay></PatientsSay>
            <Blogs></Blogs>
           <Download></Download>
        </div>
    );
};

export default Home;