import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../../../../../Components/CustomButton/CustomButton';
import {
  DM_sans_Bold,
  FONTSIZE,
  HEIGHT,
  WIDTH,
} from '../../../../../Config/AppConst';
import {useSelector} from 'react-redux';
import {Dropdown} from 'react-native-element-dropdown';

const SubQuestionComp5 = ({count, setCount, getProgress}) => {
  const IDselector = useSelector(state => state.AnswerData);
  const Dataselector = useSelector(state => state.APIData);
  // const questionDataforLow = Dataselector?.data[6];
  const questionDataforHigh = Dataselector?.data[12];
  console.log('questionDataforHigh', questionDataforHigh);
  // console.log('subQues4questionData', questionDataforLow);

  const [value1, setValue1] = useState(null);

  const data1 = [
    {label: 'm', value: '1'},
    {label: 'ft', value: '2'},
    {label: 'bar', value: '3'},
    {label: 'psi', value: '4'},
  ];

  const buttonFunction = () => {
    setCount(count + 1);
    getProgress();
  };

  // const renderItemName = item => {
  //   return (
  //     <View style={styles.optionviewWrapper}>
  //       <Text style={{color: '#fff', alignSelf: 'center'}}>{item?.answer}</Text>
  //     </View>
  //   );
  // };

  return (
    <View style={{flex: 1}}>
      <View style={{marginHorizontal: 15}}>
        <Text style={{color: '#fff', position: 'absolute', right: 1}}>
          {count}/15
        </Text>

        {/* {IDselector.answerID == 4 || IDselector.answerID == 5 ? (
          <View style={{marginTop: HEIGHT(7)}}>
            <View>
              <Text style={styles.mainTitle}>
                {questionDataforLow[0]?.question_title}
              </Text>
            </View>

            <FlatList
              data={questionDataforLow[0].answers}
              horizontal={false}
              renderItem={({item}) => renderItemName(item)}
              numColumns={3}
            />

            <View style={styles.button}>
              <CustomButton
                btnText="GO TO SUBMERSIBILITY"
                onpress={() => buttonFunction()}
              />
            </View>
          </View>
        ) : ( */}
        <View style={{marginTop: HEIGHT(5)}}>
          <Text style={styles.mainTitle}>
            {questionDataforHigh?.question_title}
          </Text>

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
        {/* )} */}
      </View>
    </View>
  );
};

export default SubQuestionComp5;

const styles = StyleSheet.create({
  mainTitle: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 6,
    fontFamily: DM_sans_Bold,
  },

  viewWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  forView: {
    borderWidth: 1,
    padding: 10,
    width: WIDTH(40),
    borderColor: '#fff',
    marginTop: 10,
    borderRadius: 10,
    marginRight: 10,
  },

  optionviewWrapper: {
    borderWidth: 1,
    padding: 10,
    width: WIDTH(30),
    borderColor: '#fff',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: HEIGHT(7),
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

  forText: {
    color: '#fff',
    alignSelf: 'center',
    marginLeft: 20,
  },

  button: {
    position: 'absolute',
    top: HEIGHT(72),
  },

  optionBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: 110,
    borderColor: 'white',
    borderWidth: 1,
  },
});
