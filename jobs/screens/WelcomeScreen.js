import React, { Component } from 'react';
import Slides from '../components/Slides';
import { View, Text } from 'react-native';

const SLIDE_DATA = [
  { text: 'Welcome to JobApp', color: '#03A9F4' },
  { text: 'Use this to get a job', color: '#009688' },
  { text: 'Set your location', color: '#03A9F4' },
  { text: 'Then swipe away', color: '#009688' }
];

class WelcomeScreen extends Component {
  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  }
  //arrow function used to bind context on this.onSlidesComplete

  render() {
    return (
      <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
    );
  }
}

export default WelcomeScreen;
