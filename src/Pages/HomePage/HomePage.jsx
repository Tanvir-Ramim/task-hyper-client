import Banner from "../../Components/banner/Banner";
import Navbar from "../../Components/navbar/Navbar";
import TaskHyperUse from "../../Components/useTaskHyper/TaskHyperUse";





const HomePage = () => {
    return (
        <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <TaskHyperUse></TaskHyperUse>
        </div>
    );
};

export default HomePage;