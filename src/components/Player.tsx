import { useRef, useState } from "react";

const Player = () => {
  const playerName = useRef<HTMLInputElement>(document.createElement('input'));
  const [enteredName, setEneteredName] = useState('');
  // const handlenamechange = (event: React.ChangeEvent<HTMLInputElement>): void => {
  //   setEneteredName(event.target.value);
  // }
  const handlesetnameclick = (): void => {
    setEneteredName(playerName.current?.value || '');
    console.log(playerName.current);

    playerName.current.value = '';
  }
  return (
    <section id="player">
      <h2>Welcome {enteredName || 'unknown entity'}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handlesetnameclick}>Set Name</button>
      </p>
    </section>
  );
}
export default Player;