import './chart.scss';
import { weeklyData } from '../../dataSource';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart() {
  return (
    <div className="chart">
        <div className="top">
            <h2 className="title">방문자 지표</h2>
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
          <Line type="monotone" dataKey="방문자수" stroke="purple" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="재방문율" stroke="green" />
        </LineChart>
      </ResponsiveContainer>
      
    </div>

  )
}
