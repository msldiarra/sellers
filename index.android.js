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
import MK from 'react-native-material-kit';
const { MKTextField, MKColor } = MK;

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
          <MKTextField
            tintColor={MKColor.Lime}
            textInputStyle={{color: MKColor.Orange}}
            placeholder={this.state.contactSearchText}
            style={styles.textfield}/>
      </React.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  textfield: {
      flex: 1,
      alignSelf: 'flex-start',
      paddingLeft: 10,
      paddingRight: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Sellers', () => Sellers);
