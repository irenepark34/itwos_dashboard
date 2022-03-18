import React, { useState } from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './admin.scss';

export default function Admin() {

  const [value, onChange] = useState(new Date());

  return (
    <div className='admin'>
        <Sidebar />
        <div className="newContainer">
            <Navbar />
            <div className="top">
                <h2>데이터 추가</h2>    
            </div>
            <div className="bottom">
                <div className="left">
                    <Calendar onChange={onChange} value={value}/>

                </div>
                <div className="right">
                    <form>
                        <div className='formInput'>      
                            <label>총매출</label>
                            <input type={"text"} placeholder='단위: 십 만원'/>
                        </div>
                        <div className='formInput'>
                            <label>객단가</label>
                            <input type={"text"} placeholder='단위: 천 원'/>
                        </div>
                        <div className='formInput'>
                            <label>비급여율</label>
                            <input type={"text"} placeholder='단위: %'/>
                        </div>
                        <div className='formInput'>
                            <label>방문자수</label>
                            <input type={"text"} placeholder='단위: 명'/>
                        </div>
                        <div className='formInput'>
                            <label>재방문율</label>
                            <input type={"text"} placeholder='단위: %'/>
                        </div>
                    </form>
                    <button>저장</button>
                </div>
            </div>    
        </div>
    </div>
  )
}