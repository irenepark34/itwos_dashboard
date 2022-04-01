import "./analysis.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

export default function Analysis() {
  return (
    <div className="analysis">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h2>LESSON & LEARN</h2>
        </div>
        <div className="bottom">
          <div className="paragraph" style={{ color: "rgb(14, 77, 161)" }}>
            {" "}
            GOOD
            <li>
              매출뿐만 아니라 질적인 지표가 가장 바람직한 형태로 변화하는 중
            </li>
          </div>
          <div className="paragraph" style={{ color: "rgb(14, 77, 161)" }}>
            {" "}
            NOT GOOD
            <li>3월 4주차는 개선 사항은 지표에서 확인되지 않음</li>
          </div>
          <div className="paragraph" style={{ color: "rgb(14, 77, 161)" }}>
            {" "}
            NEXT STEP
            <li>환자 중 셀렉해 스타벅스 쿠폰 지급 예정</li>
          </div>
        </div>
      </div>
    </div>
  );
}
