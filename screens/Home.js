import * as React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

function HomeScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap:15 }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Initial Screen"
          type="outline"
          onPress={()=>navigation.navigate("Initial")}
        />
        </View>
    );
    }

    export default HomeScreen;