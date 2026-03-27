import React from 'react';
import Wave from 'react-wavify';

const AnimatedWave = ({ theme }) => {
  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100vw',
      height: '35vh', 
      zIndex: -1,
      pointerEvents: 'none'
    }}>
      <Wave 
        fill="url(#smart-gradient)" 
        paused={false}
        options={{
            /*for wave speed and length to change */
          height: 20,      //height refers to the length of the wave  
          amplitude: 22,   //amplitude refers to the amt of wave splash 
          speed: 0.27,     //speed refers to the speed of the wave
          points: 2        //points refers how many waves are generated 
        }}
        style={{ width: '100%', height: '100%', display: 'flex', transform: 'translateZ(0)' }}
      >
       <defs>
          <linearGradient id="smart-gradient" gradientTransform="rotate(90)">
            
            {/* Top edge of the wave */}
            <stop 
              offset="8%" 
              stopColor={theme === 'light' ? "#A0D2FF" : "#ADF1FF"} 
              style={{ transition: 'stop-color 0.5s ease-in-out', transform: 'translateZ(0)' }} 
            />
            
            {/* Middle section - Hard stop at 8% never moves! */}
            <stop 
              offset="8%" 
              stopColor={theme === 'light' ? "#A0D2FF" : "#356586"} 
              style={{ transition: 'stop-color 0.5s ease-in-out', transform: 'translateZ(0)' }} 
            />

            {/* Bottom deep water */}
            <stop 
              offset="90%" 
              stopColor={theme === 'light' ? "#C7E4FF" : "#0C3256"} 
              style={{ transition: 'stop-color 0.5s ease-in-out', transform: 'translateZ(0)' }} 
            />
            
          </linearGradient>
        </defs>
      </Wave>
    </div>
  );
};

export default AnimatedWave;