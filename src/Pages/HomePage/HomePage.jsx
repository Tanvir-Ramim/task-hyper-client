import Banner from "../../Components/banner/Banner";
import Footer from "../../Components/footer/Footer";
import Navbar from "../../Components/navbar/Navbar";
import TaskHyperUse from "../../Components/useTaskHyper/TaskHyperUse";





const HomePage = () => {
    return (
        <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <TaskHyperUse></TaskHyperUse>
        <Footer></Footer>
        </div>
    );
};

export default HomePage;