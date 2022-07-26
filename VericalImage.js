import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, Image,ImageBackground } from 'react-native';

 const image = { uri: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80" };
const VerticalImage = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView} horizontal={true} >
                <ImageBackground source={require('../myapp/assets/Approcah-React-App-16-85.png')} style={{width:100,height:100}} >
                <Image style={{  width: 80, height: 80, borderRadius: 50 ,marginLeft:10,marginRight:5,marginTop:10,marginBottom:5}} source={require('../myapp/assets/AddToStory.png')} />
                </ImageBackground>
                <ImageBackground source={require('../myapp/assets/Approcah-React-App-16-85.png')} style={{width:100,height:100}} >
                <Image style={{  width: 80, height: 80, borderRadius: 50 ,marginLeft:10,marginRight:5,marginTop:10,marginBottom:5}} source={require('../myapp/assets/User.png')} />
                </ImageBackground>
                <ImageBackground source={require('../myapp/assets/Approcah-React-App-16-85.png')} style={{width:100,height:100}} >
                <Image style={{  width: 80, height: 80, borderRadius: 50 ,marginLeft:10,marginRight:5,marginTop:10,marginBottom:5}} source={require('../myapp/assets/User1.png')} />
                </ImageBackground>
                <ImageBackground source={require('../myapp/assets/Approcah-React-App-16-85.png')} style={{width:100,height:100}} >
                <Image style={{  width: 80, height: 80, borderRadius: 50 ,marginLeft:10,marginRight:5,marginTop:10,marginBottom:5}} source={require('../myapp/assets/User2.png')} />
                </ImageBackground>
                <ImageBackground source={require('../myapp/assets/Approcah-React-App-16-85.png')} style={{width:100,height:100}} >
                <Image style={{  width: 80, height: 80, borderRadius: 50 ,marginLeft:10,marginRight:5,marginTop:10,marginBottom:5}} source={require('../myapp/assets/User3.png')} />
                </ImageBackground>
                <ImageBackground source={require('../myapp/assets/Approcah-React-App-16-85.png')} style={{width:100,height:100}} >
                <Image style={{  width: 80, height: 80, borderRadius: 50 ,marginLeft:10,marginRight:5,marginTop:10,marginBottom:5}} source={require('../myapp/assets/User4.png')} />
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        // paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        width: 350,
        height: 100,
        // marginHorizontal: 30,
    }
});

export default VerticalImage;