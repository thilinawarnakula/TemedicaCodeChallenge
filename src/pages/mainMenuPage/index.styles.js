import { 
    Dimensions
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
    COLORS
} from '../../utilities/colors';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const style = EStyleSheet.create({
    mainContainer: {
        flex : 1,
        backgroundColor: COLORS.white,
    },
    listView : {
        marginTop : '10rem',
        backgroundColor : COLORS.transparent,
    },
    listViewContainer:{
        padding: '5rem',
        shadowOpacity: .3,
    },
});

export default style;
