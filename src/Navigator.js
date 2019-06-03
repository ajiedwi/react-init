import {Home} from './pages/Home';
import { createStackNavigator } from "react-navigation";
import { connect } from 'react-redux';

// to connect screen with redux reducer
let HomeContainer = connect(state => ({ user: state.userState }))(Home);

export const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeContainer,
      headerMode: 'none',
      navigationOptions:  {
          headerVisible: false,
          header: null,
      }
    }
  },
  {
    initialRouteName: "Home"
  },
);

// export default createAppContainer(AppNavigator);