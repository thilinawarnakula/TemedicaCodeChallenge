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
    loadingContainer:{
        justifyContent: 'center',
        alignItems: 'center', 
    },
    loadingView :{
        width : '60rem',
        height : '22rem',
        justifyContent: 'center',
        alignItems: 'center',
    },
    listViewContainer:{
        padding: '5rem',
        shadowOpacity: .3,
    },
    itemCountText:{
        color: COLORS.primary,
        fontSize: '12rem',
        fontWeight: '700',
        textAlign: 'left',
        marginLeft : '20rem',
        marginBottom: '10rem'
    },
    bottomSheetView:{
        container: {
            backgroundColor: COLORS.gray,
            elevation: 5,
        },
        wrapper: {
            backgroundColor: COLORS.transparent
        },
        draggableIcon: {
            backgroundColor: COLORS.primary
        }
    }
});

export default style;
