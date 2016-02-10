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
import { List} from 'react-native-material-design';
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
      <React.View style={styles.mainContainer}>

          <React.View style={styles.searchContainer}>
              <MKTextField
                tintColor={MKColor.Lime}
                textInputStyle={{color: MKColor.Orange}}
                placeholder={this.state.contactSearchText}
                style={styles.textfield}/>
          </React.View>

          <React.View style={styles.listContainer}>
                <List style={styles.contact}
                      primaryText="Awa Sissoko"
                      secondaryText="Dernière commande : 20 Avril 2015"
                      captionText="30€"
                      primaryColor="blue"
                      />
                <List style={styles.contact}
                      primaryText="Awa Thiam"
                      secondaryText="Dernière commande : ~ 3mois"
                      captionText="150€"
                      primaryColor="blue"
                      />
          </React.View>

      </React.View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
  searchContainer: {
      flex:1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      marginBottom: 25
  },
  listContainer: {
        flexDirection: 'column',
        backgroundColor: '#fff'
  },
  textfield: {
      flex: 1,
      alignSelf: 'flex-start',
      paddingLeft: 10,
      paddingRight: 10
  },
  contact: {
      flex: 1,
      alignSelf: 'flex-start',
      paddingLeft: 10,
      paddingRight: 10
  },
});

AppRegistry.registerComponent('Sellers', () => Sellers);
