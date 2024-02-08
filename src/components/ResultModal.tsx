import { forwardRef } from 'react'

const ResultModal = forwardRef<HTMLDialogElement, { targetTime: number, remainingTime: number, onReset: () => void }>(({ targetTime, remainingTime, onReset }, ref) => {
    const userLost = remainingTime <= 0;
    //below the method toFixed returns string so cant use type number so be aware in future
    const remainTimeInSecond: number = Number((remainingTime / 1000).toFixed(2));
    const score = Math.floor((1 - remainTimeInSecond / (targetTime)) * 100);
    return (
        <>
            <dialog className='result-modal' ref={ref}>
                {userLost && <h2>You lost the game</h2>}
                {!userLost && <h2>Your Score: {score}%</h2>}
                <p>
                    The target time was <strong>{targetTime} seconds</strong>
                </p>
                <p>
                    You have Stopped timer with <strong>{remainTimeInSecond} second{remainTimeInSecond > 1 ? 's' : ''} left</strong>
                </p>
                <form method='dialog'>
                    <button onClick={onReset}>Close</button>
                </form>
            </dialog>
        </>
    )
})

export default ResultModal