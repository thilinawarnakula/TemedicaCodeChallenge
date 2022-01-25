import { 
    Dimensions
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import {COLORS} from '../../utilities/colors'; 

const marginBottomItem = 20;
const paddingItem = 10;

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const style = EStyleSheet.create({
    item: {
        marginBottom: marginBottomItem,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 10
        },
        shadowRadius: 30,
        padding: paddingItem,
        elevation: 5,
      },
      drugDetalisContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      drugDescriptionContainer: {
        marginVertical: '10rem',
        borderStyle: 'dotted',
        borderWidth: 2
      },
      drugDiseasesContainer: { 
        flexDirection: 'row', 
        flexWrap: 'wrap' 
      },
      drugNameText: {
        color: COLORS.primary,
        fontSize: '18rem',
        fontWeight: '700',
        textAlign: 'left',
        flex: 1
      },
      drugDateText: {
        color: COLORS.black,
        fontSize: '14rem',
        textAlign: 'right',
        flex: 1
      },
      drugDescriptionText: {
        color: COLORS.black,
        fontSize: '16rem',
        textAlign: 'left',
        flex: 1
      }
});

export default style;
