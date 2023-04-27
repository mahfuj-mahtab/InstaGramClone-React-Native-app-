
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


function App(): JSX.Element {


  return (
   
   <SafeAreaView>
    <View style={styles.MainContainer}>
      <View style = {styles.headerSection}>
      <View style={styles.topHeader}></View>
      <View style={styles.bottomHeader}></View>
      </View>
      <View style = {styles.footerSection}>

      </View>
    </View>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  MainContainer:{
    width:"100%",
    height:"100%",
    backgroundColor:"#0D0D0D"
  },
  headerSection:{},
  footerSection:{},
  topHeader:{},
  bottomHeader:{},
});

export default App;
