import React from 'react';
import Player from './components/Player';
import TimerChallange from './components/TimerChallange';
import './index.css'
const App = () => {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallange title={'easy'} targetTime={1} />
        <TimerChallange title={'medium'} targetTime={5} />
        <TimerChallange title={'hard'} targetTime={10} />
        <TimerChallange title={'pro'} targetTime={15} />
      </div>
    </>
  );
}

export default App;
