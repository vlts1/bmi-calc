import {useState} from 'react';
import React      from 'react';

import CalculateButton      from './components/calculate_button';
import GenderSelectorButton from './components/gender_selector_button';
import BMIForm              from './components/bmi_form';
import BodyStats            from './model/body_stats';
import Gender               from './model/gender';
import BMICalculator        from './logic/bmi_calculator'; 

function App() {
  
  const [bodyStatsMale,   setBodyStatsMale  ] = useState(new BodyStats(150, 5, 10));
  const [bodyStatsFemale, setBodyStatsFemale] = useState(new BodyStats(120, 5, 5));
  const [currentGender,   setCurrentGender  ] = useState(Gender.male); 
  
  function switchGender() {
    setCurrentGender(oldGender => {
      if (oldGender === Gender.male) return Gender.female;
      else return Gender.male;
    });
  }

  function getCurrentGenderInfo() {
    if (currentGender === Gender.male)   return bodyStatsMale;
    if (currentGender === Gender.female) return bodyStatsFemale;
  }

  function setCurrentGenderInfo(bodyStats) {
    if (currentGender === Gender.male)   setBodyStatsMale(bodyStats);
    if (currentGender === Gender.female) setBodyStatsFemale(bodyStats);
  }

  return (
    <>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
      </head>
      <body>
        <div className="text-center pb-4 pt-4">BMI Calculator</div>
        <div className="text-center bg-dark pt-5 pb-5">
          <span>
            <GenderSelectorButton gender={Gender.female} currentSelection={currentGender} onSwitch={switchGender} />
            <GenderSelectorButton gender={Gender.male}   currentSelection={currentGender} onSwitch={switchGender} />
          </span>
          <div className="pt-5"></div>
          <BMIForm bodyStats={getCurrentGenderInfo()} onInfoUpdate={setCurrentGenderInfo}/>
          <div className="pt-5"></div>
          <CalculateButton calculator={new BMICalculator()} bodyStats={getCurrentGenderInfo()}/>
        </div>
      </body>
    </>
  );
}

export default App;
