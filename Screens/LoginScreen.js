import { useEffect, useState } from "react"
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Platform,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
    Dimensions,
    Image
} from "react-native"

export default function LoginScreen() {
    // console.log(Platform.OS)
    const width = Dimensions.get('window').width;
    const [isShowKeyboard, setIsShowKeyboard] = useState(false)

    const intialRegistration = {
        email: '', 
        pass: '',
    }
    const [registration, setRegistration] = useState(intialRegistration);
     
    const [inputBorderColorEmail, setInputBorderColorEmail] = useState('#f6f6f6');
    const [inputBorderColorPass, setInputBorderColorPass] = useState('#f6f6f6')

    const inputFocus = (e) => {
        console.log(e.target)
        const placeholder = e.target.placeholder;
        setIsShowKeyboard(true)

        switch (placeholder) {
            case ('Адреса електронної пошти'):
                setInputBorderColorEmail('#FF6C00')
            case ('Пароль'):
                setInputBorderColorPass('#FF6C00')
            default:
                setInputBorderColorEmail('#f6f6f6')
                setInputBorderColorPass('#f6f6f6')
        }
    }
    useEffect(() => {
        setIsShowKeyboard(false)
    }, [submit])

    const [seePass, useSeePass] = useState(true);

    const closeKeyboard = () => {
        Keyboard.dismiss();
        setIsShowKeyboard(false)
    }

    const submit = () => {
        Keyboard.dismiss()
        setIsShowKeyboard(false)
        console.log(registration)
        setRegistration(intialRegistration)
     }
    return (
        <TouchableWithoutFeedback onPress={closeKeyboard}>
        <View style={{...styles.container, flex: isShowKeyboard ? 0.65 : 0.6}}>
            <View style={styles.divText}><Text style={styles.text}>Війти</Text></View>
            <KeyboardAvoidingView style={{...styles.inputContainer}}
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
             <View>
                            <TextInput style={{ ...styles.input, borderColor: inputBorderColorEmail }}
                        value={registration.email}
                        placeholder='Адреса електронної пошти'
                        onChangeText={(value) => setRegistration((prevState) => ({ ...prevState, email: value }))}
                                onFocus={inputFocus}
                                placeholderTextColor ='#BDBDBD'  
                />
            </View>
             <View>
                            <TextInput style={{ ...styles.input, borderColor: inputBorderColorPass }}
                    value={registration.pass}
                    placeholder='Пароль'  
                    onChangeText={(value) => setRegistration((prevState) =>({...prevState, pass: value})) }
                    secureTextEntry={seePass}
                                onFocus={inputFocus}
                                placeholderTextColor ='#BDBDBD'  
                            />
                    <Text style={{ ...styles.seePass, right :32}} onPress ={()=> useSeePass(false)} >Показати</Text>
            </View>
                </KeyboardAvoidingView>
            <TouchableOpacity style={{...styles.submitBtn, width: width -32}} activeOpacity={0.7} onPress ={submit}>
                <Text style={styles.submitTitle}>Зареєструватися</Text>
            </TouchableOpacity>
            <Text style={styles.askLogo}>Нема аккаунта? Зереєструватись</Text>
            </View>
            </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        position: 'relative',
        borderTopLeftRadius: 25,
        borderTopRightRadius:25,
    },
    divText: {
        paddingTop :32,
    },
    text: {
        textAlign:'center',
        color: '#212121',
        fontSize: 30,
    },
    inputContainer: {
        paddingRight: 16,
        paddingLeft: 16,
        paddingTop: 32,
        paddingBottom:43,
        gap:16,
    },
    input: {
        backgroundColor: '#e8e8e8',
        height: 50,
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 16,
    },

    submitBtn: {
        marginTop:43,
        marginRight: 16,
        marginLeft: 16,
        height:51,
        backgroundColor: '#FF6C00',
        justifyContent: 'center',
        alignItems: 'center', 
        borderRadius: 100,
    },
    submitTitle: {
        color: '#FFFFFF',
        textAlign: 'center',
    }, 
    askLogo: {
        paddingTop: 16,
        textAlign: 'center',
        color: '#1B4371',
    },
    seePass: {
        position: 'absolute',
        top:16,
    }, 
})