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


/*

시나리오 #1
- 뷰어(보기만 가능)와 어드민(보기와 수정 가능) 2명 아이디/패스워드 할당
- 첫 페이지는 로그인 페이지
- 뷰어는 어드민 탭 미노출
- 어드민은 뷰어+어드민에서 조작 가능
- 게시판 기능은 논의 후 결정
- 뷰어, 어드민의 아이디/패스워드는 데이터베이스에서 수동 조작 가능

시나리오 #2
- 로그인 기능 없음
- 접속자는 보기만 가능
- 어드민은 데이터베이스를 직접 만져 수정 후 반영하는 형태

시나리오 #3
- 평범한 방식(세션/토큰)의 로그인 / 회원가입 방식

*/