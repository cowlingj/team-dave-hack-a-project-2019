import * as React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

import server from './server';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.mainTitle}>
          <Text style={styles.titleText}>Get Home Safe 🤝</Text>
        </View>
        <Button
            title="Events"
            onPress={() => this.props.navigation.navigate('MyEvents')}
          />
      </View>
    );
  }
}

class EventsScreen extends React.Component {
  
  constructor() {
    super()
    this.state = { events: [] }
  }
  
  componentDidMount() {
    server.getEvents().then(events => {
      console.log(JSON.stringify(events))
      this.setState({events})
    });
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Events Screen</Text>
        </View>

          {
            this.state.events.map((u, i) => {
              return (
                <Card title={u.name}>
                  <View key={i} style={styles.user}>
                    <Text>{u.location}</Text>
                    <Button
                      title="Go"
                      onPress={() => this.props.navigation.navigate('SelectedEvent', u)}
                    />
                  </View>
                </Card>
              );
            })
          }
      </View>
    );
  }
}

class SelectedEventScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    console.log(JSON.stringify(navigation));

    const name = navigation.getParam('name', 'Bob');
    const location = navigation.getParam('location', 'Turing Tap, Manchester');
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{name}</Text>
          <Text style={styles.titleText}>{location}</Text>
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
    MyEvents: EventsScreen,
    SelectedEvent: SelectedEventScreen
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
