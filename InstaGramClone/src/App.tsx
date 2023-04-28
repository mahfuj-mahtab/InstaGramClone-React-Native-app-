
import React from 'react';
import type {PropsWithChildren} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMugSaucer,faAngleDown, faHeart,faPaperPlane} from '@fortawesome/free-solid-svg-icons/'

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
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
      <View style={styles.topHeader}>
        <View style={styles.topHeaderleft}>
          <Text style={styles.logo}>Instagram</Text>
     
          <FontAwesomeIcon style={styles.logo_down} icon={faAngleDown} />

        </View>
        <View style={styles.topHeaderRight}>
        <TouchableOpacity> 
          <FontAwesomeIcon size={18} style={styles.logo_downLove} icon={faHeart} />
          </TouchableOpacity>
        <TouchableOpacity> 
          <FontAwesomeIcon size={18} style={styles.logo_downSend} icon={faPaperPlane} />
        </TouchableOpacity>
        </View>
      </View>
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
    backgroundColor:"#0D0D0D",
    // flex:1,
    flexDirection:"row",
  },
  headerSection:{
    width:"100%",
    height:150,
    borderWidth:1,
    
  },
  footerSection:{},
  topHeader:{
    flex:1,
    width:"100%",
    height:50,
    flexDirection:"row",
    borderColor:"#FFF",
    
    
  },
  bottomHeader:{},
  topHeaderleft:{
    width:"50%",
    height:50,
    paddingTop:10,
    flexDirection:"row",
  },
topHeaderRight:{
  width:"50%",
  height:50,
  borderColor:"#E21717",
  flexDirection:'row',
  justifyContent:"flex-end",
  // paddingTop:15,
  paddingRight:20,
},
logo:{
  color:"#FFF",
  fontWeight:"bold",
  fontSize:17,
  marginLeft:10,

  
},
logo_down:{
  marginTop:5,
  marginLeft:3,
  color:"#FFF",
},
logo_downLove:{
  marginTop:15,
  marginLeft:3,
  color:"#FFF",

},
logo_downSend:{
  marginTop:15,
  marginLeft:10,
  color:"#FFF",
  
},
iconstyle:{
  
}
});

export default App;
