/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { login } from '../redux/action'

type Props = {};
export class Home extends Component<Props> {

  constructor(props){
    super(props);
  }

  state = {
    // to get state from redux reducer
    username : this.props.user.username
  }

  componentDidMount(){
    var data = {
      username : 'ajiedwi',
      password : 'password'
    }
    // dispatch an action with data to redux action
    this.props.dispatch(login(data))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This username is called from redux state : <Text style={{color: 'blue'}}>{this.props.user.username}</Text></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
