import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Progressbar from './Progressbar';
import QuestionComp1 from './QuestionComponents/Question1/QuestionComp1';
import QuestionComp2 from './QuestionComponents/Question2/QuestionComp2';
import QuestionComp3 from './QuestionComponents/Question3/QuestionComp3';
import QuestionComp4 from './QuestionComponents/Question4/QuestionComp4';
import QuestionComp5 from './QuestionComponents/Question5/QuestionComp5';
import QuestionComp6 from './QuestionComponents/Question6/QuestionComp6';
import QuestionComp7 from './QuestionComponents/Question7/QuestionComp7';
import QuestionComp8 from './QuestionComponents/Question8/QuestionComp8';
import QuestionComp9 from './QuestionComponents/Question9/QuestionComp9';
import QuestionComp10 from './QuestionComponents/Question10/QuestionComp10';
import QuestionComp11 from './QuestionComponents/Question11/QuestionComp11';
import QuestionComp12 from './QuestionComponents/Question12/QuestionComp12';
import QuestionComp13 from './QuestionComponents/Question13/QuestionComp13';
import QuestionComp14 from './QuestionComponents/Question14/QuestionComp14';
import QuestionComp15 from './QuestionComponents/Question15/QuestionComp15';
import Header from '../../Components/Header/Header';
import ApiManager from '../../API/Api';

const QuestionmainScreen = () => {
  const [count, setCount] = useState(1);
  const [progress, setprogress] = useState(6.66);
  const [loader, setLoader] = useState(false);

  const [question1, setQuestion1] = useState([]);
  const [question2, setQuestion2] = useState([]);
  const [question3, setQuestion3] = useState([]);
  const [question4, setQuestion4] = useState([]);
  const [question5, setQuestion5] = useState([]);
  const [question6, setQuestion6] = useState([]);
  const [question7, setQuestion7] = useState([]);
  const [question8, setQuestion8] = useState([]);
  const [question9, setQuestion9] = useState([]);
  const [question10, setQuestion10] = useState([]);
  const [question11, setQuestion11] = useState([]);
  const [question12, setQuestion12] = useState([]);
  const [question13, setQuestion13] = useState([]);
  const [question14, setQuestion14] = useState([]);
  const [question15, setQuestion15] = useState([]);

  const updateProgress = () => {
    setprogress(progress >= 80 ? progress + 6.66 : progress + 6.66);
    // setCount(count + 1)
  };

  useEffect(() => {
    QuestionsAPI();
  }, []);

  // Get Questions Api
  const QuestionsAPI = () => {
    setLoader(true);
    ApiManager.getQuestionsAnswer()
      .then(res => {
        if (res.data.status == 200) {
          setLoader(false);
          const response = res?.data?.response;
          //set Question1
          const QuestionData1 = response.filter(item => item.question_id == 1);
          setQuestion1(QuestionData1);
          //set Question2
          const QuestionData2 = response.filter(item => item.question_id == 2);
          setQuestion2(QuestionData2);
          //set Question3
          const QuestionData3 = response.filter(item => item.sequence_id == 3);
          setQuestion3(QuestionData3);
          //set Question4
          const QuestionData4 = response.filter(item => item.sequence_id == 4);
          setQuestion4(QuestionData4);
          //set Question5
          const QuestionData5 = response.filter(item => item.sequence_id == 5);
          setQuestion5(QuestionData5);
          //set Question6
          const QuestionData6 = response.filter(item => item.sequence_id == 6);
          setQuestion6(QuestionData6);
          //set Question7
          const QuestionData7 = response.filter(item => item.sequence_id == 7);
          setQuestion7(QuestionData7);
          //set Question8
          const QuestionData8 = response.filter(item => item.sequence_id == 8);
          setQuestion8(QuestionData8);
          //set Question9
          const QuestionData9 = response.filter(item => item.sequence_id == 9);
          setQuestion9(QuestionData9);
          //set Question10
          const QuestionData10 = response.filter(
            item => item.sequence_id == 10,
          );
          setQuestion10(QuestionData10);
          //set Question11
          const QuestionData11 = response.filter(
            item => item.sequence_id == 11,
          );
          setQuestion11(QuestionData11);
          //set Question12
          const QuestionData12 = response.filter(
            item => item.sequence_id == 12,
          );
          setQuestion12(QuestionData12);
          //set Question13
          const QuestionData13 = response.filter(
            item => item.sequence_id == 13,
          );
          setQuestion13(QuestionData13);
          //set Question14
          const QuestionData14 = response.filter(
            item => item.sequence_id == 14,
          );
          setQuestion14(QuestionData14);
          //set Question15
          const QuestionData15 = response.filter(
            item => item.sequence_id == 15,
          );
          setQuestion15(QuestionData15);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const renderComponents = () => {
    switch (count) {
      case 1:
        return (
          <QuestionComp1
            count={count}
            setCount={setCount}
            loader={loader}
            questionData={question1}
            getProgress={updateProgress}
          />
        );
      case 2:
        return (
          <QuestionComp2
            count={count}
            loader={loader}
            setCount={setCount}
            questionData={question2}
            getProgress={updateProgress}
          />
        );
      case 3:
        return (
          <QuestionComp3
            count={count}
            setCount={setCount}
            loader={loader}
            questionData={question3}
            getProgress={updateProgress}
          />
        );
      case 4:
        return (
          <QuestionComp4
            count={count}
            loader={loader}
            setCount={setCount}
            questionData={question4}
            getProgress={updateProgress}
          />
        );
      case 5:
        return (
          <QuestionComp5
            count={count}
            loader={loader}
            setCount={setCount}
            questionData={question5}
            getProgress={updateProgress}
          />
        );
      case 6:
        return (
          <QuestionComp6
            count={count}
            setCount={setCount}
            loader={loader}
            questionData={question6}
            getProgress={updateProgress}
          />
        );
      case 7:
        return (
          <QuestionComp7
            count={count}
            setCount={setCount}
            loader={loader}
            questionData={question7}
            getProgress={updateProgress}
          />
        );
      case 8:
        return (
          <QuestionComp8
            count={count}
            setCount={setCount}
            loader={loader}
            questionData={question8}
            getProgress={updateProgress}
          />
        );
      case 9:
        return (
          <QuestionComp9
            count={count}
            setCount={setCount}
            loader={loader}
            questionData={question9}
            getProgress={updateProgress}
          />
        );
      case 10:
        return (
          <QuestionComp10
            count={count}
            setCount={setCount}
            loader={loader}
            questionData={question10}
            getProgress={updateProgress}
          />
        );
      case 11:
        return (
          <QuestionComp11
            count={count}
            setCount={setCount}
            loader={loader}
            questionData={question11}
            getProgress={updateProgress}
          />
        );
      case 12:
        return (
          <QuestionComp12
            count={count}
            setCount={setCount}
            loader={loader}
            questionData={question12}
            getProgress={updateProgress}
          />
        );
      case 13:
        return (
          <QuestionComp13
            count={count}
            setCount={setCount}
            questionData={question13}
            getProgress={updateProgress}
          />
        );
      case 14:
        return (
          <QuestionComp14
            count={count}
            setCount={setCount}
            loader={loader}
            questionData={question14}
            getProgress={updateProgress}
          />
        );
      case 15:
        return (
          <QuestionComp15
            count={count}
            setCount={setCount}
            loader={loader}
            questionData={question15}
            getProgress={updateProgress}
          />
        );
    }
  };

  return (
    <ImageBackground
      source={require('../../Images/background.png')}
      style={{flex: 1}}>
      <Header />
      <View style={{marginHorizontal: 20}}>
        <Progressbar
          progress={progress}
          count={count}
          selectedOption={'white'}
        />
      </View>

      {renderComponents()}
    </ImageBackground>
  );
};

export default QuestionmainScreen;

const styles = StyleSheet.create({});
