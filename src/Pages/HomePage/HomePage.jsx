import { Helmet } from "react-helmet-async";
import Banner from "../../Components/banner/Banner";

import Navbar from "../../Components/navbar/Navbar";
import TaskHyperUse from "../../Components/useTaskHyper/TaskHyperUse";
import FooterAdd from "../../Components/footer/FooterAdd";






const HomePage = () => {
    return (
        <div>
            <Helmet>
        <title>Task | Home</title>
      </Helmet>
        <Navbar></Navbar>
        <Banner></Banner>
        <TaskHyperUse></TaskHyperUse>
      <FooterAdd></FooterAdd>
        </div>
    );
};

export default HomePage;