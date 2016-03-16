'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView
} from 'react-native';


import LocalizedStrings from 'react-native-localization';
import { List, Avatar, Icon, Toolbar} from 'react-native-material-design';
import MK from 'react-native-material-kit';
const { MKTextField, MKColor } = MK;

let strings = new LocalizedStrings({
  en:{ defaultContactSearchTerm: "Start entring a contact name" },
  fr:{ defaultContactSearchTerm: "Commencez à tapez un nom" }
  });

strings.setLanguage('fr')


class Search extends Component {

   constructor(props) {
       super(props);
       this.state = {
         contactSearchText: strings.defaultContactSearchTerm,
       };
     }

  render() {
        <MKTextField
          tintColor={"#4CAF50"}
          textInputStyle={{color: "#212121"}}
          placeholder={this.state.contactSearchText}
          style={styles.textfield}/>
  }

}

const styles = StyleSheet.create({
  textfield: {
      flex: 1,
      paddingLeft: 10,
      paddingRight: 10
  }
});

module.exports = Search;
