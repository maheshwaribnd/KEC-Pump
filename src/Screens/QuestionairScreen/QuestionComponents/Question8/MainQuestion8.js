import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomButton from '../../../../Components/CustomButton/CustomButton';
import {
  DM_sans_Bold,
  FONTSIZE,
  HEIGHT,
  WIDTH,
} from '../../../../Config/AppConst';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {Dropdown} from 'react-native-element-dropdown';

const MainQuestion8 = ({count, setCount, getProgress, questionData}) => {
  const navigation = useNavigation();
  const [number, setNumber] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [counrtyResponse, setCounrtyResponse] = useState([]);

  useEffect(() => {
    contryNamesAPI();
  }, []);

  console.log('counrtyResponse', counrtyResponse);

  const contryNamesAPI = async () => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      const countryData = response.data.map(country => ({
        label: country.name.common,
        value: country.cca2,
      }));
      setCounrtyResponse(countryData);
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  };

  const buttonFunction = () => {
    setCount(count + 1);
    getProgress();
    navigation.navigate('contactInformation');
  };

  const IncreaseNumber = () => {
    setNumber(number + 1);
  };
  const DecreaseNumber = () => {
    setNumber(number - 1);
  };

  return (
    <View>
      <View style={{marginHorizontal: 30}}>
        <Text style={{color: '#fff', position: 'absolute', right: 1}}>
          {count}/15
        </Text>

        <View style={{marginTop: HEIGHT(15)}}>
          <View>
            <Text style={styles.mainTitle}>
              {/* {questionData[0]?.question_title} */}hi
            </Text>
          </View>

          <View style={styles.viewWrapper}>
            <View style={styles.inputView}>
              <Text style={{color: '#fff', marginLeft: 10}}> {number} </Text>
            </View>
            <TouchableOpacity
              style={styles.circle}
              onPress={() => {
                IncreaseNumber();
              }}>
              <Text style={{color: '#fff'}}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.circle}
              onPress={() => {
                DecreaseNumber();
              }}>
              <Text style={{color: '#fff'}}>--</Text>
            </TouchableOpacity>
          </View>

          <View style={{marginTop: HEIGHT(10)}}>
            <Text style={styles.mainTitle}>
              {/* {questionData[0]?.question_title} */}hi
            </Text>
          </View>

          <View style={styles.dropdownView}>
            <Dropdown
              data={counrtyResponse}
              maxHeight={300}
              labelField="label"
              valueField="value"
              iconColor="#fff"
              search
              style={styles.dropdown}
              containerStyle={styles.dropdownContainer}
              itemTextStyle={styles.itemText}
              value={selectedCountry}
              onChange={item => {
                setSelectedCountry(item.value);
              }}
              selectedTextStyle={styles.selectedTextStyle}
              placeholder="India"
              placeholderStyle={styles.selectedTextStyle}
              placeholderTextColor={'#fff'}
            />
          </View>

          <View style={styles.button}>
            <CustomButton
              btnText="Provide contact information"
              onpress={buttonFunction}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default MainQuestion8;

const styles = StyleSheet.create({
  mainTitle: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
    fontFamily: DM_sans_Bold,
  },

  viewWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  inputView: {
    borderWidth: 1,
    padding: 0,
    height: 50,
    width: WIDTH(50),
    borderColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
  },

  dropdownView: {
    borderWidth: 1,
    padding: 0,
    height: 50,
    width: WIDTH(86),
    marginTop: HEIGHT(4),
    borderColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
  },

  dropdown: {
    borderColor: '#fff',
    fontSize: FONTSIZE(2.2),
    color: '#fff',
    paddingLeft: 3,
    height: 47,
    paddingRight: 3,
    borderRadius: 10,
  },

  dropdownContainer: {
    width: WIDTH(85),
  },

  itemText: {
    fontSize: 14,
  },

  selectedTextStyle: {
    justifyContent: 'center',
    textAlign: 'center',
    color: '#fff',
    fontSize: FONTSIZE(1.4),
    paddingLeft: 3,
  },

  circle: {
    borderWidth: 1,
    padding: 0,
    height: 50,
    width: 50,
    borderColor: '#fff',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  countrySelector: {
    marginTop: 10,
    borderWidth: 1,
    padding: 0,
    height: 50,
    borderColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    position: 'absolute',
    top: HEIGHT(62),
  },
});
