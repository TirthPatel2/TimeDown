import { forwardRef } from 'react'

const ResultModal = forwardRef(({ result, targetTime }: { result: string, targetTime: number }) => {
    return (
        <>
            <dialog className='result-modal' open>
                <h2>You {result} the game</h2>
                <p>
                    The target time was <strong>{targetTime} second{targetTime > 1 ? 's' : ''}</strong>
                </p>
                <p>
                    You have Stopped timer with <strong>x seconds left</strong>
                </p>
                <form method='dialog'>
                    <button>Close</button>
                </form>
            </dialog>
        </>
    )
})

export default ResultModal