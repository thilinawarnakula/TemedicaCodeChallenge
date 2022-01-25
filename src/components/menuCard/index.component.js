import React, { Component } from 'react';
import { View, Dimensions, Animated, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from './index.styles';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

import CustomTextView from '../customTextView/index.component';
import DiseasesTags from '../diseasesTags/index.component';

const MenuCard = (props) => {
  const {
    drugName,
    drugDescription,
    drugDiseases,
    drugReleasedDate,
    onPress,
    index,
  } = props;

  const renderDiseasesTagsList = () => (
    <View style={styles.drugDiseasesContainer}>
      {drugDiseases.map((diseasName, index) => <DiseasesTags key={index} diseasesName={diseasName}/>)}
    </View>
  );

  return (
    <View
      style={styles.item}>
      <TouchableOpacity
        onPress={onPress}>
        <View style={styles.drugDetalisContainer}>
          <CustomTextView textValue={drugName || ''} textStyle={styles.drugNameText} />
          <CustomTextView textValue={drugReleasedDate || ''} textStyle={styles.drugDateText} />
        </View>
        {
          drugDiseases && drugDiseases.length > 0 &&
          renderDiseasesTagsList()
        }
      <View style={styles.drugDescriptionContainer}>
        <CustomTextView textValue={drugDescription || ''} textStyle={styles.drugDescriptionText} />
      </View>
            </TouchableOpacity>
        </View >
    )
};

export default MenuCard;