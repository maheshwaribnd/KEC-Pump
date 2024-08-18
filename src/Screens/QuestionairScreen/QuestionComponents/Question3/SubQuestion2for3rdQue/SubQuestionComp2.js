import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  DM_sans_Bold,
  FONTSIZE,
  HEIGHT,
  WIDTH,
} from '../../../../../Config/AppConst';
import {Dropdown} from 'react-native-element-dropdown';
import {useSelector} from 'react-redux';
import CustomButton from '../../../../../Components/CustomButton/CustomButton';

const SubQuestionComp2 = ({count, setCount, getProgress}) => {
  const IDselector = useSelector(state => state.AnswerData);
  const Dataselector = useSelector(state => state.APIData);
  const questionDataforLow = Dataselector?.data[4];
  const questionDataforHigh = Dataselector?.data[9];

  const [value1, setValue1] = useState(null);

  const buttonFunction = () => {
    setCount(count + 1);
    getProgress();
  };

  const data1 = [
    {label: 'm', value: '1'},
    {label: 'ft', value: '2'},
    {label: 'bar', value: '3'},
    {label: 'psi', value: '4'},
  ];

  const data2 = [
    {label: `°C`, value: '1'},
    {label: `°F`, value: '2'},
  ];

  return (
    <View>
      <View style={{marginHorizontal: 30}}>
        <Text style={{color: '#fff', position: 'absolute', right: 1}}>
          {count}/15
        </Text>
        {IDselector.answerID == 4 || IDselector.answerID == 5 ? (
          <View style={{marginTop: HEIGHT(10)}}>
            <View>
              <Text style={styles.mainTitle}>
                {questionDataforLow?.question_title}
              </Text>
            </View>

            <View style={styles.viewWrapper}>
              <View style={styles.inputView}>
                <Dropdown
                  data={data1}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  iconColor="#fff"
                  style={styles.dropdown}
                  containerStyle={styles.dropdownContainer2}
                  itemTextStyle={styles.itemText}
                  value={value1}
                  onChange={item => {
                    setValue1(item.value);
                  }}
                  selectedTextStyle={styles.selectedTextStyle}
                  placeholder="m"
                  placeholderStyle={styles.selectedTextStyle}
                  placeholderTextColor={'#fff'}
                />
                <TextInput style={styles.input} />
              </View>
              <TouchableOpacity style={styles.circle}>
                <Text style={{color: '#fff'}}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.circle}>
                <Text style={{color: '#fff'}}>--</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.button}>
              <CustomButton
                btnText="GO TO HEAD / DELIVERY PRESSURE"
                onpress={buttonFunction}
              />
            </View>
          </View>
        ) : (
          <View style={{marginTop: HEIGHT(10)}}>
            <View>
              <Text style={styles.mainTitle}>
                {questionDataforHigh?.question_title}
              </Text>
            </View>

            <View style={styles.viewWrapper}>
              <View style={styles.inputView}>
                <Dropdown
                  data={data1}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  iconColor="#fff"
                  style={styles.dropdown}
                  containerStyle={styles.dropdownContainer2}
                  itemTextStyle={styles.itemText}
                  value={value1}
                  onChange={item => {
                    setValue1(item.value);
                  }}
                  selectedTextStyle={styles.selectedTextStyle}
                  placeholder="m"
                  placeholderStyle={styles.selectedTextStyle}
                  placeholderTextColor={'#fff'}
                />
                <TextInput style={styles.input} />
              </View>
              <TouchableOpacity style={styles.circle}>
                <Text style={{color: '#fff'}}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.circle}>
                <Text style={{color: '#fff'}}>--</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.button}>
              <CustomButton
                btnText="GO TO TEMPERATURE"
                onpress={buttonFunction}
              />
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default SubQuestionComp2;

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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    padding: 0,
    height: 50,
    width: WIDTH(50),
    borderColor: '#fff',
    borderRadius: 10,
  },

  dropdown: {
    borderColor: '#fff',
    fontSize: FONTSIZE(2),
    color: '#fff',
    width: WIDTH(20),
    height: 47,
    paddingRight: 3,
    borderRadius: 10,
  },

  dropdownContainer2: {
    width: 135,
    height: 110,
  },

  itemText: {
    fontSize: 14,
  },

  input: {
    width: WIDTH(30),
    color: '#fff',
  },

  selectedTextStyle: {
    justifyContent: 'center',
    textAlign: 'center',
    color: '#fff',
    fontSize: FONTSIZE(2),
    paddingLeft: 3,
  },

  dropdownContainer1: {
    width: 135,
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

  button: {
    position: 'absolute',
    top: HEIGHT(67),
  },
});
