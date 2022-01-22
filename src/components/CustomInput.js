import React from 'react';
import {
    Dimensions,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    Text
} from 'react-native';
import {COLORS} from '../utilities/colors';
import { 
    CLEAR_ICON,
} from '../utilities/icons';

import EStyleSheet from 'react-native-extended-stylesheet';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const CustomInput = (props) => {

    const {
        onChangeText,
        searchText,
        clearText,
        textInputName,
        placeholderName
    } = props;

    return (
        <View style={styles.mainView}>
            <Text style={styles.textInputHeaderView}>{textInputName}</Text>
            <View style={styles.textInputView}>
                <TextInput
                    style={styles.input}
                    value={searchText}
                    onChangeText={onChangeText}
                    placeholder={placeholderName}>
                </TextInput>
                {
                    searchText !== '' &&
                    <TouchableOpacity
                        onPress={clearText}
                        style={styles.textClearContainer}>
                        <Image
                            source={CLEAR_ICON}
                            style={styles.imagePic} />
                    </TouchableOpacity>
                }
            </View>
        </View>
    );
};

const styles = EStyleSheet.create({
    mainView :{
        flexDirection: 'column',
    },
    textInputView :{
        height: '25rem',
        width: entireScreenWidth - 80,
        backgroundColor: COLORS.white,
        borderRadius: '50rem',
        paddingLeft: '20rem',
        elevation: 5,
        marginTop: '5rem',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    input: {
        flex:9,
        color: COLORS.black,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '12rem',
    },
    textClearContainer:{
        flex:1,
        marginHorizontal : '10rem'
    },
    imagePic : {
        width: '20rem', 
        height: '20rem', 
        resizeMode: 'contain',
    },
    textInputHeaderView:{
        color : COLORS.white,
        fontSize : '10rem'
    }
});

export default CustomInput;
