import * as React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Card, ListItem, Button, Icon } from 'react-native-elements'


import { Event } from './components/Event';

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

const events = [
  {
     name: 'Pub crawl',
     location: 'Turing Tap, Manchester',
     eta: '22 minutes'
  }
]

class EventsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Events Screen</Text>
        </View>

        <Card>
          {
            events.map((u, i) => {
              return (
                <View key={i} style={styles.user}>
                  <Text>{u.name}, {u.location}, {u.eta}</Text>
                </View>
              );
            })
          }
        </Card>
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
