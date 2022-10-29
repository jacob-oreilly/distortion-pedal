import React from 'react';
import './App.css';
import * as Tone from 'tone';
function App() {

  
   //Initializing Audio
   const initTone = async () => {
    await Tone.start()
    console.log('audio is ready')
  } 

  //Audio source

  //Do thing
  

  //turn on sound (in this case we are generating but should have a function
  // to listen to incoming audio src eventually.)
  const playSound = () => {
    const fmSynth = new Tone.FMSynth().toDestination();
    fmSynth.triggerAttackRelease("C5", "4n");
  }
  return (
    <div className="App">
      <header className="App-header">
        distortion pedal
      </header>
      <div className='container'>
        <button onClick={playSound}>
          Click Me!
        </button>
      </div>
    </div>
  );
}

export default App;
