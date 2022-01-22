import React from 'react';
import {
    Dimensions,
    View,
    Text,
    ActivityIndicator
} from 'react-native';
import {COLORS} from '../utilities/colors';

import EStyleSheet from 'react-native-extended-stylesheet';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const Loader = ({}) => {

    return (
        <View style={styles.loadingView}>
            <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
    );
};

const styles = EStyleSheet.create({
    loadingView :{
        width : '60rem',
        height : '22rem',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Loader;
