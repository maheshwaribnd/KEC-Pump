import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CustomButton from '../../../../Components/CustomButton/CustomButton';
import {DM_sans_Bold, HEIGHT, WIDTH} from '../../../../Config/AppConst';
import Entypo from 'react-native-vector-icons/Entypo';

const QuestionComp14 = ({count, setCount, getProgress, questionData}) => {
  const buttonFunction = () => {
    setCount(count + 1);
    getProgress();
  };

  return (
    <View>
      <View style={{marginHorizontal: 30}}>
        <Text style={{color: '#fff', position: 'absolute', right: 1}}>
          {count}/15
        </Text>
        <View style={{marginTop: HEIGHT(10)}}>
          <View>
            <Text style={styles.mainTitle}>
              {questionData[0]?.question_title}
            </Text>
          </View>

          <View style={{marginTop: 10}}>
            <Text style={{color: '#fff'}}>
              Do you have any other important requirements or information?
              Please let us know these as well. You can also upload a data
              sheet.
            </Text>
          </View>

          <View style={styles.inputView}>
            <TextInput
              placeholderTextColor={'#fff'}
              placeholder="Enter the flood here."
              multiline
              style={styles.input}
            />
          </View>

          <View>
            <Text style={[styles.mainTitle, {marginTop: HEIGHT(7)}]}>
              {questionData[1]?.question_title}
              {/* Upload data sheet / additional files */}
            </Text>
          </View>

          <View style={styles.uploadView}>
            <TouchableOpacity
              style={{
                backgroundColor: '#FF8A00',
                width: 90,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Entypo name="upload" size={20} color="#000" />
            </TouchableOpacity>
            <Text style={{color: '#fff', alignSelf: 'center', marginLeft: 15}}>
              1
            </Text>
          </View>

          <View style={styles.button}>
            <CustomButton
              btnText="Go to required quantity"
              onpress={buttonFunction}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default QuestionComp14;

const styles = StyleSheet.create({
  mainTitle: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
    fontFamily: DM_sans_Bold,
  },

  inputView: {
    borderWidth: 1,
    borderColor: '#fff',
    height: HEIGHT(15),
    marginTop: HEIGHT(5),
    borderRadius: 5,
  },

  input: {
    width: WIDTH(80),
    marginTop: 1,
    paddingLeft: 9,
  },

  uploadView: {
    borderWidth: 1,
    borderColor: '#fff',
    height: HEIGHT(9),
    marginTop: HEIGHT(5),
    borderRadius: 5,
    flexDirection: 'row',
    padding: 2,
  },

  button: {
    position: 'absolute',
    top: HEIGHT(68),
  },
});
