import './chart2.scss';
import { weeklyData } from '../../dataSource';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart2() {
  return (
    <div className="chart2">
        <div className="top">
            <h2 className="title">객단가 지표</h2>
            <MoreVertIcon fontSize='small'/>
        </div>
        <ResponsiveContainer width="100%" height={300}>
        <LineChart
          width={500}
          height={300}
          data={weeklyData}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="신규객단가" stroke="brown" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="재진객단가" stroke="navy" />
        </LineChart>
      </ResponsiveContainer>
      
    </div>

  )
}
