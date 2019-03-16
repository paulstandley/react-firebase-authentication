import React from 'react';
import  { FirebaseContext } from '../Firebase';

const Home = () => (
  <FirebaseContext.Consumer>
    {firebase => {
      console.log(firebase.auth.currentUser)
      return <div>I've access to Firebase and render something like {firebase.auth.currentUser !== null ? firebase.auth.currentUser.email : ' no email yet'}.</div>;
    }}
  </FirebaseContext.Consumer>
);

export default Home;