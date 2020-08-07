import React, { useState, useEffect } from 'react';
import * as SurveyJS from "survey-react";

import "survey-react/survey.css";

import Header from '../components/Header';
import { getSurvey } from '../api/surveyAPI';

function App() {
  SurveyJS.StylesManager.applyTheme("darkrows")

  const [survey, setSurvey] = useState<any>();

  useEffect(() => {
    getSurvey().then((newSurvey) => {
      setSurvey(newSurvey);
    });
  }, []);

  const onSubmit = (result: SurveyJS.Model) => console.log(result)

  return (
    <div className='container'>
      <Header />
      {!survey && (
        <div className='d-flex justify-content-center'>
          <div className='spinner-border m-5'>
            <span className='sr-only'>Loading...</span>
          </div>
        </div>
      )}
      {survey && <SurveyJS.Survey json={survey} onComplete={onSubmit} />}
    </div>
  );
}

export default App;
