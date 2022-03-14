import './mainchart.scss';
import { weeklyData } from '../../dataSource';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function MainChart() {
  return (
    <div className="mainchart">
        <div className="top">
            <h2 className="title">주요 지표</h2>
            <MoreVertIcon fontSize='small'/>
        </div>
        <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          width={500}
          height={400}
          data={weeklyData}
        >
          <CartesianGrid stroke="#f5f5f5" className='chartGrid'/>
          <XAxis dataKey="name" scale="band"/>
          <Tooltip />
          <Legend />
          <Bar dataKey="총매출" barSize={40} fill="rgb(14, 77, 161)" />
          <Line type="monotone" dataKey="방문자" stroke="red" />
          <Line type="monotone" dataKey="객단가" stroke="gray" />
        </ComposedChart>
      </ResponsiveContainer>
      
    </div>

  )
}
