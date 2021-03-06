import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView, StatusBar, Alert, Vibration } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Button, TextInput } from 'react-native-paper';
import { connect } from 'react-redux';
import Toast from 'react-native-toast-message';

const Formulario = (props) => {
   
    const toastF = (type,title,text,visibilityTime,autoHide,onShow,onHide,onPress)=>{
        return Toast.show({
            type,
            text1:title,
            text2:text,
            visibilityTime,
            autoHide,
            onShow,
            onHide,
            onPress
        })
    }

    const [newSell, setNewSell] = useState({
        firstName: '',
        lastName: '',
        city: '',
        cellphone: '',
        direction: ''
    })
    const leerInput = (e, campo) => {
        setNewSell({
            ...newSell,
            [campo]: e
        })
    }
    const sendInfoUserBuyer = ()=>{
        if (Object.values(newSell).some(valor => valor === "")) {
            Vibration.vibrate([100,400,100, 400])
            toastF('error','Fields','All fields are required',3500,true)
            return false;
        }
        props.navigationRedux.navigate('formulario2',{newSell: newSell,totalPrice:props.route.params.totalPrice}) 
    }
    return (
        <>
            <StatusBar barStyle="light-content" />
            <ScrollView style={Styles.container}>
                <Text style={Styles.titulo}>01- Basic Information</Text>

                <View style={{ paddingLeft: wp('7%'), paddingRight: wp('7%')}}>
                    <View>
                        <Text style={Styles.tituloSecundario}>First Name:</Text>
                        <TextInput theme={{ colors: { primary: '#0BC6C3' } }} style={Styles.input}
                            placeholder="Please Insert Your First Name"
                            placeholderTextColor='grey'
                            onChangeText={(e) => leerInput(e, 'firstName')} />
                    </View>
                    <View>
                        <Text style={Styles.tituloSecundario}>Last Name:</Text>
                        <TextInput theme={{ colors: { primary: '#0BC6C3' } }} style={Styles.input}
                            placeholder="Please Insert Your Last Name"
                            placeholderTextColor='grey'
                            onChangeText={(e) => leerInput(e, 'lastName')} />
                    </View>
                    <View>
                        <Text style={Styles.tituloSecundario}>City:</Text>
                        <TextInput theme={{ colors: { primary: '#0BC6C3' } }} style={Styles.input}
                            placeholder="Please Insert Your City"
                            placeholderTextColor='grey'
                            onChangeText={(e) => leerInput(e, 'city')} />
                    </View>
                    <View>
                        <Text style={Styles.tituloSecundario}>Phone:</Text>
                        <TextInput theme={{ colors: { primary: '#0BC6C3' } }} style={Styles.input}
                            placeholder="Please Insert Your Phone Number"
                            placeholderTextColor='grey'
                            onChangeText={(e) => leerInput(e, 'cellphone')}
                            keyboardType={'number-pad'} />
                    </View>
                    <View>
                        <Text style={Styles.tituloSecundario}>Direction:</Text>
                        <TextInput theme={{ colors: { primary: '#0BC6C3' } }} style={Styles.input}
                            placeholder="Please Insert Your Direction"
                            placeholderTextColor='grey'
                            onChangeText={(e) => leerInput(e, 'direction')} />
                    </View>
                    <Button color="#0BC6C3" mode="contained" style={{ marginTop: 15 }} onPress={sendInfoUserBuyer} >Next</Button>
                </View>
            </ScrollView>

        </>
    )
}

const Styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        borderColor: 'black',
        width: '100%',
        height: 40,
    },
    container: {
        flex: 1,
        backgroundColor: '#061320'
    },
    titulo: {
        fontSize: 35,
        textTransform: 'capitalize',
        marginTop: 20,
        color: 'white',
        textAlign:'center'
    },
    tituloSecundario: {
        fontSize: 20,
        color: 'white',
        marginBottom: 10,
        marginTop: 20
    }
})
const mapStateToProps = state => {
    return {
    navigationRedux: state.navigationReducer.navigationRedux
    }
    }
    
export default connect(mapStateToProps, null)(Formulario)