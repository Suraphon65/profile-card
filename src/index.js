import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

function App(){
  return(
    <>
      <div className='card'> 
      <Avatar /> 
        <div className='data'>
          <Intro />
          <SkillList />
          
        </div>
      </div>
    </>
  )
}

function SkillList(){
  return (
    <div className='skill-list'>
      <Skill skill="Unity" emoji="👶" color="yellow"/>
      <Skill skill="PHP" emoji="👎" color="red"/>
      <Skill skill="Python" emoji="🤏" color="cyan"/>
      <Skill skill="Lr" emoji="🧔‍♂️" color="orange"/>

    </div>
  )
}

function Skill(){
  return ( 
<div className='skill' styles={{ backgroundColor: props.color }} >
  <span>{props.Skill} </span>
  <span>{props.emoji}</span>
</div>
  );
}


function Intro(){
  return(
    <div>
      <h1>สุรพล เทพจันดา </h1>
      <p>
        นักศึกษามหาวิทยาลลัยอุบลราชธานี
         ชื่นชอบเงิน เวลาว่างไม่มี 
         "จ้างได้รับถ่ายรูป --- PremAUTO"
      </p>
    </div>
  );
}

function Avatar(){
  return <img className='avatar' src='me00.png' alt='My Avatar' />;
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
