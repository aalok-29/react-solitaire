import React, {useEffect, useState} from 'react'
import Navbar from './Navbar';

const Use = () => {
    const  [myCount, setmyCount]= useState(0);
      const  [myNum, setmyNum] = useState(0);


    useEffect(()=>{
      alert('submitted');
    },[]);
  return (
    <div> 
      <Navbar />
      <button onClick={()=>{setmyCount(myCount+1);

      }}> click here {myCount}</button>

<br />

<button onClick={()=>{setmyNum(myNum+1);

}}> click here {myNum}</button>
    </div>
  )
}

export default Use;