
import React from 'react';
const OneSignal = window.OneSignal || [];
OneSignal.push(function() {
  OneSignal.showHttpPrompt();
  OneSignal.init({
    appId: "c9747114-c2ba-46e9-955a-3950b932e786",
  });
});

export default class Push extends React.Component {

render(){
    return(
        <div> 
             {/*} <div className='onesignal-customlink-container'></div>*/}
        </div>
    )
}
}