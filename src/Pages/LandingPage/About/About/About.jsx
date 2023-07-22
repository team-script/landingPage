import AboutApproach from "../AboutSections/AboutApproach/AboutApproach";
import AboutUs from "../AboutSections/AboutUs/AboutUs";
import FAQ from "../AboutSections/FAQ/FAQ";
import MeetOurTeam from "../AboutSections/MeetOurTeam/MeetOurTeam";
import MissionVission from "../AboutSections/MissionVission/MissionVission";
const About = () => {
    return (
        <div>
            <AboutUs></AboutUs>
            <MissionVission></MissionVission>
            <AboutApproach></AboutApproach>
            <MeetOurTeam></MeetOurTeam>
            <FAQ></FAQ>
        </div>
    );
};

export default About;