import { View, Text, TextComponent, Button } from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View>
    <Text style={{ fontSize : 25 }}>React Native Mobile Development</Text>
    <Text style= {{ fontSize: 20 }}>By Ashin Johnon</Text>
    <Button title='Press Here!' color="red" ></Button>
    </View>
  );
};

export default App;