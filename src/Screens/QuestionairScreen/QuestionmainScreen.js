import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Progressbar from './Progressbar';
import Header from '../../Components/Header/Header';
import ApiManager from '../../API/Api';
import {ActivityIndicator} from 'react-native-paper';
import MainQuestion1 from './QuestionComponents/Question1/MainQuestion1';
import MainQuestion2 from './QuestionComponents/Question2/MainQuestion2';
import MainQuestion3 from './QuestionComponents/Question3/MainQuestion3';
import SubQuestionComp1 from './QuestionComponents/Question3/SubQuestion1for3rdQue/SubQuestionComp1';
import SubQuestionComp2 from './QuestionComponents/Question3/SubQuestion2for3rdQue/SubQuestionComp2';
import SubQuestionComp3 from './QuestionComponents/Question3/SubQuestion3for3rdQue/SubQuestionComp3';
import SubQuestionComp4 from './QuestionComponents/Question3/SubQuestion4for3rdQue/SubQuestionComp4';
import SubQuestionComp5 from './QuestionComponents/Question3/SubQuestion5for3rdQue/SubQuestionComp5';
import SubQuestionComp6 from './QuestionComponents/Question3/SubQuestion6for3rdQue/SubQuestionComp6';
// import SubQuestionComp7 from './QuestionComponents/Question3/SubQuestion7for3rdQue/SubQuestionComp7';
import MainQuestion4 from './QuestionComponents/Question4/MainQuestion4';
import MainQuestion5 from './QuestionComponents/Question5/MainQuestion5';
import MainQuestion6 from './QuestionComponents/Question6/MainQuestion6';
import MainQuestion7 from './QuestionComponents/Question7/MainQuestion7';
import MainQuestion8 from './QuestionComponents/Question8/MainQuestion8';
import {useDispatch, useSelector} from 'react-redux';
import {APIDataFunction} from '../../Redux/Reducers/APIDataReducer';

const QuestionmainScreen = () => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [progress, setprogress] = useState(6.66);
  const [loader, setLoader] = useState(false);

  const [question1, setQuestion1] = useState([]);
  const [question2, setQuestion2] = useState([]);
  const [question3, setQuestion3] = useState([]);
  // State for none and low flow for 3rd question
  const [subQuestionLow1, setsubQuestionLow1] = useState([]);
  const [subQuestionLow2, setsubQuestionLow2] = useState([]);
  const [subQuestionLow3, setsubQuestionLow3] = useState([]);
  const [subQuestionLow4, setsubQuestionLow4] = useState([]);
  const [subQuestionLow5, setsubQuestionLow5] = useState([]);
  // State for medium and high flow for 3rd question
  const [subQuestionHigh1, setsubQuestionHigh1] = useState([]);
  const [subQuestionHigh2, setsubQuestionHigh2] = useState([]);
  const [subQuestionHigh3, setsubQuestionHigh3] = useState([]);
  const [subQuestionHigh4, setsubQuestionHigh4] = useState([]);
  const [subQuestionHigh5, setsubQuestionHigh5] = useState([]);
  const [subQuestionHigh6, setsubQuestionHigh6] = useState([]);
  const [subQuestionHigh7, setsubQuestionHigh7] = useState([]);

  const [question4, setQuestion4] = useState([]);
  const [question5, setQuestion5] = useState([]);
  const [question6, setQuestion6] = useState([]);
  const [question7, setQuestion7] = useState([]);
  const [question8, setQuestion8] = useState([]);
  const [question9, setQuestion9] = useState([]);
  const [question10, setQuestion10] = useState([]);

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
        // console.log('res1', res.data.response)

        if (res?.data?.status == 200) {
          const response = res?.data?.response;
          dispatch(APIDataFunction({data: response}));
          setLoader(false)

          //set Question1
          const QuestionData1 = response.filter(item => item?.sequence_id == 1);
          setQuestion1(QuestionData1);
          //set Question2
          const QuestionData2 = response.filter(item => item?.sequence_id == 2);
          setQuestion2(QuestionData2);
          //set Question3
          const QuestionData3 = response.filter(item => item?.sequence_id == 3);
          setQuestion3(QuestionData3);

          // 1st Flow Start

          // Set for None And Low
          //set setsubQuestionLow1
          const SubQuestionDataforLow1 = response.filter(
            item => item.question_id == 39,
          );
          setsubQuestionLow1(SubQuestionDataforLow1);
          //set setsubQuestionLow2
          const SubQuestionDataforLow2 = response.filter(
            item => item.question_id == 40,
          );
          setsubQuestionLow2(SubQuestionDataforLow2);
          //set setsubQuestionLow3
          const SubQuestionDataforLow3 = response.filter(
            item => item.question_id == 41,
          );
          setsubQuestionLow3(SubQuestionDataforLow3);
          //set setsubQuestionLow4
          const SubQuestionDataforLow4 = response.filter(
            item => item.question_id == 42,
          );
          setsubQuestionLow4(SubQuestionDataforLow4);
          //set setsubQuestionLow5
          const SubQuestionDataforLow5 = response.filter(
            item => item.question_id == 43,
          );
          setsubQuestionLow5(SubQuestionDataforLow5);

          // Set for Medium And High
          //set setsubQuestionHigh1
          const SubQuestionDataforHigh1 = response.filter(
            item => item.question_id == 44,
          );
          setsubQuestionHigh1(SubQuestionDataforHigh1);
          //set setsubQuestionHigh2
          const SubQuestionDataforHigh2 = response.filter(
            item => item.question_id == 45,
          );
          setsubQuestionHigh2(SubQuestionDataforHigh2);
          //set setsubQuestionHigh3
          const SubQuestionDataforHigh3 = response.filter(
            item => item.question_id == 46,
          );
          setsubQuestionHigh3(SubQuestionDataforHigh3);
          //set setsubQuestionHigh4
          const SubQuestionDataforHigh4 = response.filter(
            item => item.question_id == 47,
          );
          setsubQuestionHigh4(SubQuestionDataforHigh4);
          //set setsubQuestionHigh5
          const SubQuestionDataforHigh5 = response.filter(
            item => item.question_id == 48,
          );
          setsubQuestionHigh5(SubQuestionDataforHigh5);
          //set setsubQuestionHigh6
          const SubQuestionDataforHigh6 = response.filter(
            item => item.question_id == 49,
          );
          setsubQuestionHigh6(SubQuestionDataforHigh6);
          //set setsubQuestionHigh7
          const SubQuestionDataforHigh7 = response.filter(
            item => item.question_id == 50,
          );
          setsubQuestionHigh7(SubQuestionDataforHigh7);

          // 2nd Flow Start

          //set Question4
          const QuestionData4 = response.filter(item => item.sequence_id == 4);
          setQuestion4(QuestionData4);
          // console.log('QuestionData4', QuestionData4);

          //set Question5
          const QuestionData5 = response.filter(item => item.sequence_id == 5);
          setQuestion5(QuestionData5);
          //set Question11
          // const QuestionData11 = response.filter(
          //   item => item.question_id == 11,
          // );
          // setQuestion11(QuestionData11);
          // //set Question12
          // const QuestionData12 = response.filter(
          //   item => item.question_id == 12,
          // );
          // setQuestion12(QuestionData12);
          // //set Question13
          // const QuestionData13 = response.filter(
          //   item => item.question_id == 13,
          // );
          // setQuestion13(QuestionData13);
          // //set Question14
          // const QuestionData14 = response.filter(
          //   item => item.question_id == 14,
          // );
          // setQuestion14(QuestionData14);
          // //set Question15
          // const QuestionData15 = response.filter(
          //   item => item.question_id == 15,
          // );
          // setQuestion15(QuestionData15);
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
          <MainQuestion1
            count={count}
            setCount={setCount}
            loader={loader}
            getProgress={updateProgress}
          />
        );
      case 2:
        return (
          <MainQuestion2
            count={count}
            loader={loader}
            setCount={setCount}
            getProgress={updateProgress}
          />
        );
      case 3:
        return (
          <MainQuestion3
            count={count}
            setCount={setCount}
            loader={loader}
            getProgress={updateProgress}
          />
        );
      case 4:
        return (
          <SubQuestionComp1
            count={count}
            loader={loader}
            setCount={setCount}
            questionDataforLow={subQuestionLow1}
            questionDataforHigh={subQuestionHigh1}
            getProgress={updateProgress}
          />
        );
      case 5:
        return (
          <SubQuestionComp2
            count={count}
            loader={loader}
            setCount={setCount}
            questionDataforLow={subQuestionLow2}
            questionDataforHigh={subQuestionHigh2}
            getProgress={updateProgress}
          />
        );
      case 6:
        return (
          <SubQuestionComp3
            count={count}
            setCount={setCount}
            loader={loader}
            questionDataforLow={subQuestionLow3}
            questionDataforHigh={subQuestionHigh3}
            getProgress={updateProgress}
          />
        );
      case 7:
        return (
          <SubQuestionComp4
            count={count}
            setCount={setCount}
            loader={loader}
            questionDataforLow={subQuestionLow4}
            questionDataforHigh={subQuestionHigh4}
            questionData={question4}
            progress={progress}
            getProgress={updateProgress}
          />
        );
      case 8:
        return (
          <SubQuestionComp5
            count={count}
            setCount={setCount}
            loader={loader}
            questionDataforLow={subQuestionLow5}
            questionDataforHigh={subQuestionHigh5}
            getProgress={updateProgress}
          />
        );
      case 9:
        return (
          <SubQuestionComp6
            count={count}
            setCount={setCount}
            loader={loader}
            questionDataforHigh={subQuestionHigh6}
            questionData={question4}
            progress={progress}
            getProgress={updateProgress}
          />
        );

      case 10:
        return (
          <MainQuestion5
            count={count}
            setCount={setCount}
            loader={loader}
            // questionData={question12}
            getProgress={updateProgress}
          />
        );
      case 11:
        return (
          <MainQuestion6
            count={count}
            setCount={setCount}
            // questionData={question13}
            getProgress={updateProgress}
          />
        );
      case 12:
        return (
          <MainQuestion7
            count={count}
            setCount={setCount}
            loader={loader}
            // questionData={question14}
            getProgress={updateProgress}
          />
        );
      case 13:
        return (
          <MainQuestion8
            count={count}
            setCount={setCount}
            loader={loader}
            // questionData={question15}
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

      {loader ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator theme={{colors: {primary: 'gray'}}} size="large" />
        </View>
      ) : (
        renderComponents()
      )}
    </ImageBackground>
  );
};

export default QuestionmainScreen;

const styles = StyleSheet.create({});
