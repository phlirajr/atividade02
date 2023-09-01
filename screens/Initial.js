import * as React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

function InitialScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F8F0E3'}}>
        <Text>Iniitial Screen</Text>
        <Button
          title="Go Back to Home Screen"
          type="clear"
          onPress={()=>navigation.navigate("Home")}
        />
        </View>
    );
    }

export default InitialScreen;