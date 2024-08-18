import {
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CustomButton from '../../../../Components/CustomButton/CustomButton';
import { DM_sans_Bold, HEIGHT, WIDTH } from '../../../../Config/AppConst';
import { useSelector } from 'react-redux';

const MainQuestion5 = ({ count, setCount, getProgress }) => {

  const selector = useSelector(state => state.APIData);
  const questionData = selector?.data;
  console.log(
    'questionData.question_title555',
    questionData[8].question_title,
  );

  const buttonFunction = () => {
    setCount(count + 1);
    getProgress();
  };

  return (
    <ScrollView>
      <View style={{ marginHorizontal: 30 }}>
        <Text style={{ color: '#fff', position: 'absolute', right: 1 }}>
          {count}/15
        </Text>
        <View style={{ marginTop: HEIGHT(10) }}>
          <View>
            <Text style={styles.mainTitle}>
              {/* {questionData[0]?.question_title} */}hi
            </Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ color: '#fff' }}>
              The ratio of gaseous substances, either as an impurity or as a
              vapor of the main constituent of the liquid, in the conveyed
              material.
            </Text>
          </View>

          <View style={styles.viewWrapper}>
            <View style={styles.inputView}>
              <Text style={{ color: '#fff', marginLeft: 10 }}>% 1 to 100%</Text>
              <TextInput style={styles.input} />
            </View>
            <TouchableOpacity style={styles.circle}>
              <Text style={{ color: '#fff' }}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.circle}>
              <Text style={{ color: '#fff' }}>--</Text>
            </TouchableOpacity>
          </View>

          {/* //2 */}
          <View>
            <Text style={[styles.mainTitle, { marginTop: HEIGHT(10) }]}>
              {/* {questionData[0]?.question_title} */}Hi
            </Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ color: '#fff' }}>
              The ratio of solid content in relation to the mass of all liquid
              components.
            </Text>
          </View>

          <View style={styles.viewWrapper}>
            <View style={styles.inputView}>
              <Text style={{ color: '#fff', marginLeft: 10 }}>% 1 to 100%</Text>
              <TextInput style={styles.input} />
            </View>
            <TouchableOpacity style={styles.circle}>
              <Text style={{ color: '#fff' }}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.circle}>
              <Text style={{ color: '#fff' }}>--</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.button}>
            <CustomButton
              btnText="Go to practice size"
              onpress={buttonFunction}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MainQuestion5;

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
    marginTop: HEIGHT(6),
    marginBottom: HEIGHT(4),
  },
});
