import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import Chart from "../../components/chart/Chart";
import Chart2 from "../../components/chart2/Chart2";
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
                <Widget type="객단가" />
                <Widget type="비급여율" />
                <Widget type="방문자수" />
                <Widget type="재방문율" />    
            </div> 
            <div className="maincharts">  
                <MainChart />
                <Featured /> 
            </div>
            <div className="subcharts"> 
                <Chart />
                <Chart2 />    
            </div>
        </div>
    </div>
    )    
}

export default Home