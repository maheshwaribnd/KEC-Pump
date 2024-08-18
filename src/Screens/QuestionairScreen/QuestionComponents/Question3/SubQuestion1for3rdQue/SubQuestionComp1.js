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
  DM_sans_Medium,
  FONTSIZE,
  HEIGHT,
  WIDTH,
} from '../../../../../Config/AppConst';
import {Dropdown} from 'react-native-element-dropdown';
import {useSelector} from 'react-redux';
import CustomButton from '../../../../../Components/CustomButton/CustomButton';

const SubQuestionComp1 = ({count, setCount, getProgress}) => {
  const IDselector = useSelector(state => state.AnswerData);
  const Dataselector = useSelector(state => state.APIData);
  const questionDataforLow = Dataselector?.data[3];
  const questionDataforHigh = Dataselector?.data[8];
  console.log('questionDataforHigh9', questionDataforHigh);

  console.log('subQues3questionData3', questionDataforLow);

  const [value1, setValue1] = useState(null);

  const buttonFunction = () => {
    setCount(count + 1);
    getProgress();
  };

  const data1 = [
    {label: 'mPa.s(cP)', value: '1'},
    {label: 'mm2/sec(cSt)', value: '2'},
  ];

  const data2 = [
    {label: 'm3/h', value: '1'},
    {label: 'I/min (dm3/h)', value: '2'},
    {label: 'gal/min (US)', value: '3'},
  ];

  return (
    <View style={{flex: 1}}>
      <View style={{marginHorizontal: 20}}>
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
                  containerStyle={styles.dropdownContainer1}
                  itemTextStyle={styles.itemText}
                  value={value1}
                  onChange={item => {
                    setValue1(item.value);
                  }}
                  selectedTextStyle={styles.selectedTextStyle}
                  placeholder="mPa.s(cP)"
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
                btnText="GO TO PUMP CAPACITY"
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

            <View style={[styles.viewWrapper, {justifyContent: 'center'}]}>
              <TouchableOpacity style={styles.yesNoBtn}>
                <Text style={{color: '#fff', fontFamily: DM_sans_Medium}}>
                  Yes
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.yesNoBtn}>
                <Text style={{color: '#fff', fontFamily: DM_sans_Medium}}>
                  No
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.button}>
              <CustomButton btnText="GO TO PH" onpress={buttonFunction} />
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default SubQuestionComp1;

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
    marginTop: 48,
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
    fontSize: FONTSIZE(1.2),
    color: '#fff',
    width: WIDTH(22),
    paddingLeft: 3,
    height: 47,
    paddingRight: 3,
    borderRadius: 10,
  },

  dropdownContainer1: {
    width: 135,
  },

  dropdownContainer2: {
    width: 135,
    height: 170,
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

  yesNoBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: 115,
    borderColor: 'white',
    borderWidth: 1,
  },

  button: {
    position: 'absolute',
    top: HEIGHT(67),
  },
});
