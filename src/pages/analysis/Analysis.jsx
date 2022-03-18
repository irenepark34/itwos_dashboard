import './analysis.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

export default function Analysis() {
  return (
    <div className='analysis'>
        <Sidebar />
        <div className="newContainer">
            <Navbar />
            <div className="top">
                <h2>분석 및 제언</h2>    
            </div>
            <div className="bottom">
                간단한 게시판  
            </div>
        </div>
    </div>
  )
}
