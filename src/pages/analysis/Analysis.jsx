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
              신규/재진 객단가 모두 증가하고 비급여율 매출액도 상승세입니다
            </li>
          </div>
          <div className="paragraph" style={{ color: "rgb(14, 77, 161)" }}>
            {" "}
            NOT GOOD
            <li>최근 1개월 간 매출 가장 낮은 주였습니다</li>
          </div>
          <div className="paragraph" style={{ color: "rgb(14, 77, 161)" }}>
            {" "}
            NEXT STEP
            <li>
              아직 우리 병원을 모르는 대중들이 많은 상황에서 마케팅 비용 집행이
              너무 방어적입니다 (사용 필요)
            </li>
            <li>
              신규 프로그램들을 늘려나가더라도 마케팅이 동반되어야 할 것
              같습니다
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}
