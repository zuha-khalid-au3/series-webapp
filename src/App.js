import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = ()=> {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;





// # command: |
// #   if [ "${CIRCLE_BRANCH}" == "master" ]
// #   then 
// #     aws --region ${AWS_REGION} s3 sync ~/repo/build s3://${AWS_BUCKET_PROD} --delete
// #   elif [ "${CIRCLE_BRANCH}" == "staging" ]
// #   then
// #     aws --region ${AWS_REGION} s3 sync ~/repo/build s3://${AWS_BUCKET_STAGING} --delete
// #   else
// #     aws --region ${AWS_REGION} s3 sync ~/repo/build s3://${AWS_BUCKET_DEV} --delete
// #   fi 