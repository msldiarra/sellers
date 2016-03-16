/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

import { Icon, Toolbar } from 'react-native-material-design';
import Search from './Search';

import LocalizedStrings from 'react-native-localization';
let strings = new LocalizedStrings({
  en:{ homeText: "Welcome!" },
  fr:{ homeText: "Bienvenue!" }
  });

strings.setLanguage('fr')

class Home extends Component {

   constructor(props) {
       super(props);
       this.state = {
            text: strings.homeText,
       };
   }


  searchBar() {
    this.props.navigator.push({
        id:'Search',
        component: Search
    })
  }

  render() {

    return (
          <React.View>
              <View style={styles.appBar}>
                <Toolbar icon={"home"}
                         primary={"googleGreen"}
                         actions={[
                            { icon: "search", onPress: () => this.searchBar()  }
                         ]}/>
              </View>
              <View style={styles.content}>
                 <Text>{this.state.text}</Text>
              </View>
          </React.View>
    );
  }
}

const styles = StyleSheet.create({
  appBar: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 50
  },
  content: {
        alignItems: 'center'
  }
});

module.exports = Home;
