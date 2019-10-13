import * as React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.mainTitle}>
          <Text style={styles.titleText}>Get Home Safe 🤝</Text>
        </View>
        <Button
            title="Events"
            onPress={() => this.props.navigation.navigate('Events')}
          />
      </View>
    );
  }
}

class EventsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Events Screen</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	titleText: {
    fontSize: 28,
	}
});

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Events: EventsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
