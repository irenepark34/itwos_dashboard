import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import Chart from "../../components/chart/Chart";
import MainChart from "../../components/mainchart/Mainchart";
import "./home.scss";

const Home = () => {
  return (
    <div className='home'>
        <Sidebar />
        <div className="homeContainer">
            <Navbar />
            <div className="widgets">
                <Widget type="총매출" />
                <Widget type="방문자" />
                <Widget type="객단가" />
                <Widget type="재방문" />
                <Widget type="비급여" />    
            </div> 
            <div className="maincharts">
                <MainChart />     
            </div>
            <div className="subcharts">
                <Featured />
                <Chart />    
            </div>
        </div>
    </div>
    )    
}

export default Home