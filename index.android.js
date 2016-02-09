/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import LocalizedStrings from 'react-native-localization';

let strings = new LocalizedStrings({
  en:{ defaultContactSearchTerm: "Start entring a contact name" },
  fr:{ defaultContactSearchTerm: "Commencez à tapez un nom" }
  });

strings.setLanguage('fr')

class Sellers extends Component {

   constructor(props) {
       super(props);
       this.state = {
         contactSearchText: strings.defaultContactSearchTerm,
       };
     }

  render() {
    return (
      <React.View style={styles.container}>
          <React.TextInput
            value={this.state.contactSearchText}
            />
      </React.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff'
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

AppRegistry.registerComponent('Sellers', () => Sellers);
