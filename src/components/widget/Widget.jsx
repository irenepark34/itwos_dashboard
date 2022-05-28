import PersonAddIcon from "@mui/icons-material/PersonAdd";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import HandshakeIcon from "@mui/icons-material/Handshake";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PeopleIcon from "@mui/icons-material/People";
import "./widget.scss";

export default function Widget({ type }) {
  let data;

  switch (type) {
    case "총매출":
      data = {
        title: "총매출",
        value: 267.9,
        link: "단위 : 십만 원",
        icon: <MonetizationOnOutlinedIcon className="icon" />,
        percentage: 15.2,
      };
      break;
    case "객단가":
      data = {
        title: "객단가",
        value: 76.4,
        link: "단위 : 천 원",
        icon: <PersonAddIcon className="icon" />,
        percentage: 6.0,
      };
      break;
    case "비급여율":
      data = {
        title: "비급여율",
        value: 67.9,
        link: "단위 : %",
        icon: <ReceiptIcon className="icon" />,
        percentage: 23.3,
      };
      break;
    case "방문자수":
      data = {
        title: "방문자수",
        value: 354,
        link: "단위 : 명",
        icon: <PeopleIcon className="icon" />,
        percentage: 11.3,
      };
      break;
    case "재방문율":
      data = {
        title: "재방문율",
        value: 63.3,
        link: "단위 : %",
        icon: <HandshakeIcon className="icon" />,
        percentage: 3.2,
      };
      break;

    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.value}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <span className="last">전주 대비</span>
        <div className="percentages">{data.percentage}% </div>
        {data.icon}
      </div>
    </div>
  );
}
