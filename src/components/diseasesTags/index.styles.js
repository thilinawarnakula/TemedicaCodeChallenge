import { 
    Dimensions
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import {COLORS} from '../../utilities/colors'; 

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const style = EStyleSheet.create({
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

export default style;
