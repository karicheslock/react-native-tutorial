import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        //another option to remove headers
        // screenOptions={{
        //   header: () => null
        // }}
      >
        <Stack.Screen 
          name='Screen_A'
          component={ScreenA}
          options={{
            header: () => null
          }}
        />
        <Stack.Screen 
          name='Screen_B'
          component={ScreenB}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  }
})

export default App;


/* 
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
  Alert,
  ToastAndroid,
  Modal,
  Image,
  ImageBackground,
} from 'react-native';
import CustomButton from './CustomButton';
import Header from './Header';


const App = () => {

  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  
  const onPressHandler = () => {
    if (name.length > 3) {
      setSubmitted(!submitted)
    } else {
      /* Alert.alert('Warning', 'The name must be longer than 3 characters', 
      [ // max 3 buttons for Android
        {text: 'Do Not Show Again', onPress:() => console.warn('Do Not Show Again Pressed!')},
        {text: 'Cancel', onPress:() => console.warn('Cancel Pressed!')},
        {text: 'Ok', onPress:() => console.warn('OK Pressed!')},
      ], {cancelable: true, onDismiss: () => console.warn('Alert dismissed!')}) */
     /*  ToastAndroid.showWithGravity(
        'The name must be longer than 3 characters',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
      ) 
      setShowWarning(true);
    }
  }

  return (
    <ImageBackground 
      style={styles.body}
      //source={{uri: 'https://pixabay.com/vectors/bricks-wall-texture-background-147309/bricks-147309_960_720.png'}}
      source={require('../assets/bricks.png')}
    >
      <Header />
      <Modal
        visible={showWarning}
        transparent
        onRequestClose={() => setShowWarning(false)}
        animationType= 'fade'
        hardwareAccelerated
      >
        <View style={styles.centered_view}>
          <View style={styles.warning_modal}>
            <View style={styles.warning_title}>
              <Text style={styles.text}>WARNING!</Text>
            </View>
            <View style={styles.warning_body}>
              <Text style={styles.text}>The name must be longer than 3 charachters</Text>
            </View>
            <Pressable
              onPress={() => setShowWarning(false)}
              style={styles.warning_button}
              android_ripple={{color: '#fff'}}
            >
              <Text style={styles.text}>OK</Text>
            </Pressable>
          </View>
        </View>
         
      </Modal>
      
      <Text style={styles.text}>
        Please write your name:
      </Text>
      <TextInput
        multiline 
        style={styles.input} 
        placeholder='e.g. John'
        onChangeText={(value) => setName(value)}
        keyboardType='default'
        maxLength={20}
      />
      <CustomButton 
        onPressFunction={onPressHandler}
        title={submitted ? 'Clear' : 'Submit'}
        color={'#00ff00'}
      />
      <CustomButton 
        onPressFunction={() => { }}
        title={'Test'}
        color={'#ff00ff'}
        style={{margin:10}}
      />
      {/* <Button 
        title= {submitted ? 'Clear' : 'Submit'}
        onPress={onPressHandler}
        color='#00f'
      /> */
      /* <TouchableHighlight 
        style={styles.button}
        onPress={onPressHandler}
        activeOpacity={0.5}
        underlayColor='#dddddd'
      >
        <Text style={styles.text}>
          {submitted ? 'Clear' : 'Submit'}
        </Text>
      </TouchableHighlight> */
      /* <Pressable
        onPress={onPressHandler}
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
        android_ripple={{color: '#00f'}}
        style={({pressed}) =>[
          {backgroundColor: pressed ? '#dddddd' : '#00ff00'},
          styles.button]}
      >
        <Text style={styles.text}>
          {submitted ? 'Clear' : 'Submit'}
        </Text>
      </Pressable> 
      {submitted ? 
        <View style={styles.body}>
          <Text style={styles.text}>
            You are registered as {name}
          </Text>
          <Image 
            source={require('../assets/done.png')}
            style={styles.image}
            resizeMode='stretch'
          />
        </View>
        :
        <Image 
          source={require('../assets/error.png')}
          style={styles.image}
          resizeMode='stretch'
        />
      }
      
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },  
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor:'#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: '#00ff00',
    alignItems: 'center',
  },
  warning_modal: {
    width: 300,
    height: 300,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
  },
  warning_title: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  warning_body: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warning_button: {
    backgroundColor: '#00ffff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#00000099'
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
});
 */
