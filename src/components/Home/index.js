import React from 'react';
import  { FirebaseContext } from '../Firebase';

const Home = () => (
  <FirebaseContext.Consumer>
    {firebase => {
      console.log(firebase)
      return <div>I've access to Firebase and render something.</div>;
    }}
  </FirebaseContext.Consumer>
);

export default Home;