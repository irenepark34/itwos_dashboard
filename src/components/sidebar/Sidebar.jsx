import "./sidebar.scss"
import InsertChartIcon from "@mui/icons-material/InsertChart";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import NotesIcon from "@mui/icons-material/Notes";

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="top">
            <span className="logo">이태원정형외과의원</span>
        </div>
        <hr />
        <div className="center">
            <ul>
                <li>
                    <InsertChartIcon className="icon"/>
                    <span>
                        대시보드
                    </span>
                </li>
                <li>
                    <NotesIcon className="icon"/>
                    <span>
                        분석
                    </span>
                </li>
                <li>
                    <ChatBubbleIcon className="icon"/>
                    <span>
                        기타
                    </span>
                </li>
            </ul>
        </div>   
        <div className="bottom"></div>       
    </div>
  )
}

