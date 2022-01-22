import React from 'react';
import {
    Dimensions,
    View,
    Text,
    Image
} from 'react-native';
import { 
    NO_RESULTS_ICON,
} from '../utilities/icons';
import {COLORS} from '../utilities/colors';

import EStyleSheet from 'react-native-extended-stylesheet';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const NoResults = ({
    headerText,
    subHeaderText
}) => {

    return (
        <View style={styles.container}>
            <Image
                source={NO_RESULTS_ICON}
                style={styles.imagePic} />
            <Text style={[styles.textTitleMain]}>{headerText}</Text>
            <Text style={styles.textTitleSub}>{subHeaderText}</Text>
        </View>
    );
};

const styles = EStyleSheet.create({
    container: {
        backgroundColor : COLORS.white,
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagePic : {
        width: '70rem', 
        height: '70rem', 
        resizeMode: 'contain',
    },
    textTitleMain : {
        fontSize: '18rem', 
        color: COLORS.black,
        textAlign:'center',
        marginTop : '08rem',
    },
    textTitleSub : {
        fontSize: '14rem', 
        color: COLORS.black,
        marginTop : '8rem',
        textAlign:'center'
    },
});

export default NoResults;
