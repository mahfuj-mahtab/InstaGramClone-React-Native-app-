
import React from 'react';
import type {PropsWithChildren} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMugSaucer,faAngleDown, faHeart,faPaperPlane, faHouse, faMagnifyingGlass, faPlus, faVideo} from '@fortawesome/free-solid-svg-icons/'

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Image
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
      <View style={styles.bottomHeader}>
      <View style={styles.profile_pic_section}>
        <TouchableOpacity>
      <Image  style={styles.profile_pic} source={require('./Asset/2.jpg')} />
      <View style={styles.plus_view}>
      <Text style={styles.plus}>+</Text>
      </View>
      <Text style={styles.name}>Your Story</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.story_section}>
        <ScrollView horizontal>
      <TouchableOpacity style={styles.profile_portion}>
      <Image  style={styles.profile_pic} source={require('./Asset/1.jpg')} />
  
      <Text style={styles.name}>Konka Koheli</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.profile_portion}>
      <Image  style={styles.profile_pic} source={require('./Asset/2.jpg')} />
  
      <Text style={styles.name}>Mahfuj Mahtab</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.profile_portion}>
      <Image  style={styles.profile_pic} source={require('./Asset/3.jpg')} />
  
      <Text style={styles.name}>Mahir Shahriar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.profile_portion}>
      <Image  style={styles.profile_pic} source={require('./Asset/4.jpg')} />
  
      <Text style={styles.name}>Konka Koheli</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.profile_portion}>
      <Image  style={styles.profile_pic} source={require('./Asset/5.jpg')} />
  
      <Text style={styles.name}>Konka Koheli</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.profile_portion}>
      <Image  style={styles.profile_pic} source={require('./Asset/1.jpg')} />
  
      <Text style={styles.name}>Konka Koheli</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.profile_portion}>
      <Image  style={styles.profile_pic} source={require('./Asset/2.jpg')} />
  
      <Text style={styles.name}>Konka Koheli</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.profile_portion}>
      <Image  style={styles.profile_pic} source={require('./Asset/4.jpg')} />
  
      <Text style={styles.name}>Konka Koheli</Text>
      </TouchableOpacity>
      </ScrollView>
      </View>

      </View>
      </View>
      <View style ={styles.mainBody} >
      <ScrollView >
        
      </ScrollView>
      </View>
      <View style = {styles.footerSection}>
        <TouchableOpacity style={styles.footericonbox}>        
          <View >
        <FontAwesomeIcon style={styles.footericon} size={25}  icon={faHouse} />
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footericonbox}>        
          <View >
          <FontAwesomeIcon style={styles.footericon} size={25} icon={faMagnifyingGlass} />
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footericonbox}>        
          <View style={styles.borderbox}>
          <FontAwesomeIcon style={styles.footericon} size={20} icon={faPlus} />
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footericonbox}>        
          <View >
          <FontAwesomeIcon style={styles.footericon} size={25} icon={faVideo}/>
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footericonbox}>        
          <View >
          <Image  style={styles.profile_pic_in_footer} source={require('./Asset/2.jpg')} />
        </View>
        </TouchableOpacity>
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
    flexDirection:"column",
  },
  headerSection:{
    width:"100%",
    height:120,
    // borderWidth:1,
    marginBottom:20,
    
  },
  footerSection:{
    width:"100%",
    height:"7%",
    // borderWidth:1,
    // borderColor:"#fff",
    // marginTop:"139%",
    flexDirection:'row',
  },
  topHeader:{
    flex:1,
    width:"100%",
    height:50,
    flexDirection:"row",
    borderColor:"#FFF",
    
    
  },
  bottomHeader:{
    width:"100%",
    height:70,
    flexDirection:'row',

  },
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
  
},
profile_pic:{
  width:45,
  height:45,
  borderRadius:50,
  marginLeft:4,
},
story_section:{
  width:"80%",
  // borderWidth:1,
  height:65,
  flexDirection:"row",

},
profile_pic_section:{
  width:"20%",
  height:65,
  paddingLeft:10,
  // borderWidth:1,  
  justifyContent:'center',


},
plus_view:{
  width:15,
  height:15,
  borderRadius:10,
 
  alignItems:'center',
  backgroundColor:'#019EA8',
  marginTop:-10,
  marginLeft:30,
},
plus:{
  marginTop:-2,
  color:"#fff",
  fontWeight:'bold',
  //  justifyContent:'center',
  // alignContent:"center",

},
name:{
  color:'#fff',
  fontSize:11,
},
profile_portion:{
  width:80,

},
mainBody:{
  width:"100%",
  backgroundColor:"#fff",
  height:"75.5%",
  // borderWidth:1,
  borderColor:"#537637",
  // flex:1, 
},
footericonbox:{
  width:"20%",
  height:"100%",
  // borderWidth:1,
  justifyContent:'center',
  alignContent:'center',
  alignItems:'center',
},
footericon:{
  width:20,
  color:'#fff'
},
borderbox:{
  width:22,
  height:22,
  borderWidth:2,
  borderColor:"#fff",
  borderRadius:5,
},
profile_pic_in_footer:{
  width:35,
  height:35,
  borderRadius:50,
}
});

export default App;
