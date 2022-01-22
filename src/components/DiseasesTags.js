import React from 'react';
import {
    Dimensions,
    View,
    Text
} from 'react-native';
import {COLORS} from '../utilities/colors';


import EStyleSheet from 'react-native-extended-stylesheet';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const DiseasesTags = (props) => {

    const {
        diseasesName
    } = props;

    return (
        <View style={styles.mainView}>
           <Text style={styles.diseasesName}>{diseasesName}</Text>
        </View>
    );
};

const styles = EStyleSheet.create({
    mainView :{
        height : '30rem',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:COLORS.primary,
        margin : '5rem',
        borderRadius :'10rem',
        opacity: 0.7
    },
    diseasesName:{
        padding:'5rem',
        fontSize : '12rem',
        color: COLORS.white,
        fontWeight : '700',
        textAlign: 'center',
    }
    
});

export default DiseasesTags;
