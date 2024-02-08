import { useRef, useState } from 'react'
import ResultModal from './ResultModal';

const TimerChallange = ({ title, targetTime }: { title: string, targetTime: number }) => {
    const timer = useRef<number | undefined>();
    const dialogRef = useRef(document.createElement('dialog'));
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    // const [gameWin, setGameWin] = useState(false);
    const isTimerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        dialogRef.current.showModal();
    }

    const handleReset = (): void => {
        setTimeRemaining(targetTime * 1000);
    }

    const handleStart = (): void => {
        timer.current = window.setInterval((): void => {
            setTimeRemaining((prev: number): number => prev - 10);
            // setTimerExpired(true);
            // dialogRef.current.showModal();
        }, 10);
    }
    const handleStop = (): void => {
        dialogRef.current.showModal();
        clearTimeout(timer.current);
    }
    return (<>
        <ResultModal onReset={handleReset} targetTime={targetTime} remainingTime={timeRemaining} ref={dialogRef} />
        <section className='challenge'>
            <h2>{title}</h2>
            <p className='challenge-time'>
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={!isTimerActive ? handleStart : handleStop}>{!isTimerActive ? 'Start' : 'Stop'}Challenge</button>
            </p>
            <p className=''>{isTimerActive ? 'Timer is running...' : 'Timer inactive'}</p>
        </section>
    </>
    )
}

export default TimerChallange