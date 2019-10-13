import * as React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Card, Button, Icon } from 'react-native-elements';
import DatePicker from 'react-native-datepicker'

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
      // console.log(JSON.stringify(events))
      this.setState({events})
    });
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
        <View style={styles.title}>
          <Text style={styles.titleText}>My events</Text>
        </View>

          {
            this.state.events.map((u, i) => {
              return (
                <Card style={styles.card} title={u.name}>
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

  constructor(props){
    super(props)
    this.state = { 
      selectedEta: '',
      isEtaDecided: false,
      isPersonArrived: false
    }
  }

  render() {
    const { navigation } = this.props;
    // console.log(JSON.stringify(navigation));

    const id = navigation.getParam('id', 0);
    const name = navigation.getParam('name', 'Bob');
    const location = navigation.getParam('location', 'Turing Tap, Manchester');
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{name}</Text>
        </View>
        <Text>{location}</Text>

        <DatePicker
          style={{width: 300}}
          date={this.state.selectedEta}
          disabled={this.state.isEtaDecided && !this.state.isPersonArrived || this.state.isPersonArrived}
          mode='datetime'
          placeholder='What time will you arrive ⏱'
          showIcon={false}
          onDateChange={(selectedEta) => {
            this.setState({ selectedEta })
          }}
        />

        {!this.state.isEtaDecided && <Button
          title="Let's go home 🏃‍"
          onPress={() => this.setState({ isEtaDecided: true })}
        />}

        {this.state.isEtaDecided && !this.state.isPersonArrived && <Button
          title="I've arrived home 🏠"
          onPress={() => this.setState({ isPersonArrived: true })}
        />}

        {this.state.isEtaDecided && this.state.isPersonArrived && <Text>Well done for arriving home safely 👏</Text>}

      </View>
    );
  }
}

const styles = StyleSheet.create({
	titleText: {
    fontSize: 28,
  },
  card: {
    width: 400
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
