import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../../../../Components/CustomButton/CustomButton';
import {
  DM_sans_Bold,
  FONTSIZE,
  HEIGHT,
  WIDTH,
} from '../../../../Config/AppConst';
import {Dropdown} from 'react-native-element-dropdown';

const MainQuestion6 = ({count, setCount, getProgress, questionData}) => {
  const [value, setValue] = useState(null);

  const buttonFunction = () => {
    setCount(count + 1);
    getProgress();
  };

  const data = [
    {label: 'mm', value: '1'},
    {label: 'μm', value: '2'},
  ];

  return (
    <View>
      <View style={{marginHorizontal: 30}}>
        <Text style={{color: '#fff', position: 'absolute', right: 1}}>
          {count}/15
        </Text>
        <View style={{marginTop: HEIGHT(10)}}>
          <View>
            <Text style={styles.mainTitle}>
              {/* {questionData[0]?.question_title} */}hi
            </Text>
          </View>
          <View style={{marginTop: 10}}>
            <Text style={{color: '#fff'}}>
              Describes the size of individual particles (also called grains) in
              an amount of fluid in mm.
            </Text>
          </View>

          <View style={styles.viewWrapper}>
            <View style={styles.inputView}>
              <Dropdown
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                iconColor="#fff"
                style={styles.dropdown}
                containerStyle={styles.dropdownContainer}
                itemTextStyle={styles.itemText}
                value={value}
                onChange={item => {
                  setValue(item.value);
                }}
                selectedTextStyle={styles.selectedTextStyle}
                placeholder="mm"
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
              btnText="Go to additional requirements"
              onpress={buttonFunction}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default MainQuestion6;

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

  dropdownContainer: {
    width: 70,
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
