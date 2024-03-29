import { Helmet } from "react-helmet-async";
import Banner from "../../Components/banner/Banner";

import Navbar from "../../Components/navbar/Navbar";
import TaskHyperUse from "../../Components/useTaskHyper/TaskHyperUse";
// import Footer from "../../Components/footer/Footer";





const HomePage = () => {
    return (
        <div>
            <Helmet>
        <title>Task | Home</title>
      </Helmet>
        <Navbar></Navbar>
        <Banner></Banner>
        <TaskHyperUse></TaskHyperUse>
       {/* <Footer></Footer> */}
        </div>
    );
};

export default HomePage;