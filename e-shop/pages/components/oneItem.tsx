import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [isShown, setIsShown] = useState(false);
  const handleClick = event => {

    setIsShown(current => !current);
  };
  return (
 <>
 <div>
 <div className="post-item" >
    <h1 className="post-item-title">rourou al jamila</h1>
    <div className="post-item-byline">
      <span className="post-item-byline-author"> rourou </span>
      some time ago
    </div>
  <img src="https://i1.pickpik.com/photos/35/515/582/len-photography-camera-hand-preview.jpg"/>
    <div className="post-item-lede"> walahy aib eli kaaed ysir manich aaref fech kaaed nekteb ama hani nekteb nikomha w nchalaha tetaada salamet khater mazelet barrrcha khedma  </div>
    <button onClick={handleClick}>show responses</button>
    {isShown && (
    <div>
   
    </div>
  )}

  {isShown && <Box />}
</div>


</div>
</>
  );
}
function Box() {
  return (
     <>
    <div className='comment-item'>
    comme ntsdfg gnfgh jgh ngb

    </div>
        <div>
        <input className='comment-input' type="text" placeholder='you think you can help?'></input>
        <button className='comment-button'>comment</button>
        </div>
       
      </>
  

 



    
  );
}

export default App;
