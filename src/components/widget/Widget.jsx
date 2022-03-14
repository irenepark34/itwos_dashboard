import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PeopleIcon from '@mui/icons-material/People';
import { widgetData } from '../../dataSource';
import './widget.scss';

export default function Widget({type}) {

  let data;
  const diff = 20

    switch(type){
      case "총매출":
        data = {
          title : "총매출",
          value : 590,
          link : "단위 : 십만 원",
          icon : < MonetizationOnOutlinedIcon className='icon' />
        }
        break;
      case "방문자":
        data = {
          title : "방문자",
          value : 412,
          link : "단위 : 명",
          icon : < PeopleIcon className='icon' />
        }
        break;
      case "객단가":
        data = {
          title : "객단가",
          value : 80.8,            
          link : "단위 : 천 원",
          icon : < PersonAddIcon className='icon' />
        }
        break;
      case "재방문":
        data = {
          title : "재방문",
          value : 12.1,           
          link : "단위 : %",
          icon : < HandshakeIcon className='icon' />
        }
        break;
      case "비급여":
        data = {
          title : "비급여",
          value : 28.5,          
          link : "단위 : %",
          icon : < ReceiptIcon className='icon' />
        }
        break;
        
        default:
          break;
    }

  return (
    <div className='widget'>
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.value}</span>
        <span className="link">{data.link}</span>  
      </div>
      <div className="right">
      <span className='last'>전주 대비</span>
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff}% </div>
        {data.icon}
        </div>
      </div>
  );
};
