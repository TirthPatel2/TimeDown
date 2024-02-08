import React, { useRef, useState } from 'react'
import ResultModal from './ResultModal';

const TimerChallange = ({ title, targetTime }: { title: string, targetTime: number }) => {
    const timer = useRef<number | undefined>();
    const [timerExpired, setTimerExpired] = useState(false);
    const [timerStarted, setTimerStarted] = useState(false);
    const handleStart = (): void => {
        timer.current = window.setTimeout((): void => {
            setTimerExpired(true);
        }, targetTime * 1000);
        setTimerStarted(true);
    }
    const handleStop = (): void => {
        clearTimeout(timer.current);
        setTimerStarted(false)
    }
    return (<>
        {timerExpired && <ResultModal result={'lost'} targetTime={targetTime} />}
        <section className='challenge'>
            <h2>{title}</h2>
            {timerExpired && <p>You Lost</p>}
            <p className='challenge-time'>
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={!timerStarted ? handleStart : handleStop}>{!timerStarted ? 'Start' : 'Stop'}Challenge</button>
            </p>
            <p className=''>{timerStarted ? 'Timer is running...' : 'Timer inactive'}</p>
        </section>
    </>
    )
}

export default TimerChallange