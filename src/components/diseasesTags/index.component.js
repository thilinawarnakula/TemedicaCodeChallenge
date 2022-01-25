import React from 'react';
import {
    Dimensions,
    View,
    Text
} from 'react-native';
import styles from './index.styles';

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

export default DiseasesTags;
