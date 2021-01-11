import 'react-native-gesture-handler';
import React from 'react';
import Main from './Main';
import Reducers from './src/redux/reducers';
import Reduxthunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(Reducers,{},applyMiddleware(Reduxthunk));

export default App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
//   const [inSearch,setinSearch] = useState("");
//   const [catProduct, setcatProduct] = useState([])
  
//   useEffect(() => {
//     console.log('mounted')
//     console.log(`http://192.168.1.7:8000/product/getallcatprod`)
//     Axios.get(`http://192.168.1.7:8000/product/getallcatprod`)
//     .then((result)=>{
//       setcatProduct(result.data)
//     }).catch((error)=>{
//       console.log(error);
//     });
//   },[]);



//   console.log(catProduct)

//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView contentInsetAdjustmentBehavior = "automatic"
//                     style                          = {styles.scrollView}
//         >
//           <View style={styles.header}>
//             <View style={styles.sectionHead}>
//               <TextInput placeholder          = "cari"
//                          style                = {styles.search}
//                          value                = {inSearch}
//                          onChangeText         = {text=>setinSearch(text)}
//                         //  underlineColorAndroid="transparent"
//               />
//               <View style={styles.notificationBx}>
//                 <Icon name  = 'shopping-cart'
//                       type  = 'FontAwesome5'
//                       style = {styles.standardicon}
//                       />
//                 <Icon name  = 'chatbox-ellipses'
//                       type  = 'Ionicons'
//                       style = 
//                       {{
//                         ...styles.standardicon,
//                         marginLeft:3
//                       }}
//                       />
//                 <Icon name  = 'notifications'
//                       type  = 'Ionicons'
//                       style = {styles.standardicon}
//                       />
//                 {/* <Icon name  = 'options-vertical'
//                       type  = 'SimpleLineIcons'
//                       style = {styles.standardicon}
//                       /> */}
//               </View>
//             </View>
//             <View style={styles.sectionBody}>
//               <Text style={styles.Description}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionFoot}>
//               <View>

//               </View>
//               <View>
//                 <TouchableOpacity style         = {styles.xsbutton}
//                                   activeOpacity = {.2}
//                 >
//                   <Text style={styles.xsbutton_text}>
//                     lihat semua promo
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//           <View style={styles.Body}>
//             <View style={styles.sectionProducts}>
//               <TouchableOpacity>
//                 <Text>
//                   asdasdasd
//                 </Text>
//               </TouchableOpacity>
//               <TouchableOpacity>
                
//               </TouchableOpacity>
//             </View>
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     // backgroundColor: Colors.lighter,
//   },
//   header: {
//     position        : 'relative',
//     backgroundColor : '#007bff'
//   },
//   sectionHead: {
//     zIndex          : 1,
//     position        : 'absolute',
//     top             : 0,
//     left            : 0,
//     right           : 0,
//     flex            : 1,
//     flexDirection   : 'row',
//     justifyContent  : 'space-between',
//     padding         : 15,
//     // borderWidth     : 2
//   },
//   search: {
//     position        : 'relative',
//     flex            : .6,
//     height          : 35,
//     marginRight     : 15,
//     padding         : 10,
//     borderRadius    : 3,
//     fontSize        : 10,
//     backgroundColor : 'white',
//     // borderWidth     : 2
//   },
//   notificationBx: {
//     position        : 'relative',
//     flexDirection   : 'row',
//     flex            : .4,
//     justifyContent  : 'space-evenly',
//     alignItems      : 'center',
//     // borderWidth     : 2
//   },
//   standardicon: {
//     color           : 'white',
//     fontSize        : 20,
//   },
//   sectionBody: {
//     position        : 'relative',
//     height          : 200
//   },
//   Description: {
//     position        : 'relative',
//     flexDirection   : 'column',
//     justifyContent  : 'flex-end',
//     alignItems      : 'flex-end',
//     textAlign       : 'center',
//     height          : '100%',
//     marginTop       : 100
//   },
//   highlight: {

//   },
//   sectionFoot: {
//     position        : 'relative',
//     flexDirection   : 'row',
//     justifyContent  : 'space-between',
//     padding         : 10,
//     // borderWidth     : 2
//   },
//   xsbutton: {
//     backgroundColor : '#414141',
//     width           : 100,
//     padding         : 2,
//     opacity         : .8,
//     borderRadius    : 5
//   },
//   xsbutton_text: {
//     color           : 'white',
//     textAlign       : 'center',
//     fontSize        : 10,
//   },
//   sectionProducts: {
//     margin:10,
//     backgroundColor:'white',
//     borderColor:'black',
//     borderWidth:1,  
//     width:"100%",
//     height:"auto" 
//   }
  
};
