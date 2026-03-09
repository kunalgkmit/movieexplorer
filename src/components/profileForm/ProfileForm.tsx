import { useEffect, useState } from 'react';
import {
  Alert,
  Text,
  TouchableOpacity,
  View,
  Platform,
  useWindowDimensions,
  ScrollView,
  TouchableHighlight,
  TouchableNativeFeedback,
} from 'react-native';

import DatePicker from 'react-native-date-picker';

import CustomTextInput from '@components/textInput';
import CustomButton from '@components/button';

import { GENDER_SELECTION_ARRAY, MIN_DOB } from '@constants/constants';
import {
  calculateAge,
  validateAge,
  validateDOB,
  validateEmail,
  validateMobileNum,
  validateUserName,
} from '@utils/helpers';

import { styles } from './styles';
import { useDispatch } from 'react-redux';
import {
  setStoreAge,
  setStoreDOB,
  setStoreEmail,
  setStoreFullName,
  setStoreGender,
  setStoreHasProfile,
  setStoreMobileNumber,
} from '../../reduxStore/actions/profileActions';

export default function ProfileForm() {
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [mobNum, setMobNum] = useState<number>();
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
  const [age, setAge] = useState<string | null>(null);
  const [gender, setGender] = useState<GenderType>();
  const [bio, setBio] = useState<string>('');
  const [errors, setErrors] = useState({
    fullNameError: '',
    emailError: '',
    dateOfBirthError: '',
    ageError: '',
    genderError: '',
    mobileNumError: '',
  });

  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();

  const { width, height } = useWindowDimensions();

  const isLandscape = width >= height;

  const hasError = Object.values(errors).some(item => item.length);
  const isPending =
    !fullName ||
    !email ||
    !mobNum ||
    !dateOfBirth ||
    !age ||
    !gender ||
    hasError;

  useEffect(() => {
    if (dateOfBirth) {
      const computedAge = calculateAge(dateOfBirth);
      setErrors(prev => ({
        ...prev,
        dateOfBirthError: '',
      }));
      verifyAge(computedAge.toString());
    } else {
      setAge(null);
    }
  }, [dateOfBirth]);

  const openDOBModal = () => {
    setOpenModal(true);
  };

  const genderHandler = (item: GenderType) => {
    setErrors(prev => ({
      ...prev,
      genderError: '',
    }));
    setGender(item);
  };

  // console.log('PLATFORM OS>>', Platform.OS);

  // function iosFun() {
  //   console.log('IOS FUN');
  // }

  // function androidFun() {
  //   console.log('ANDROID FUN');
  // }

  // Platform.select({
  //   ios: iosFun,
  //   android: androidFun,
  // });

  const verifyFullName = (userName: string) => {
    setFullName(userName);
    const fullNameError = validateUserName(userName);
    setErrors(prev => ({
      ...prev,
      fullNameError,
    }));
  };
  const verifyEmail = (email: string) => {
    setEmail(email);
    const emailError = validateEmail(email);
    setErrors(prev => ({
      ...prev,
      emailError,
    }));
  };
  const verifyMobileNum = (mobileNum: string) => {
    setMobNum(Number(mobileNum));
    const mobileNumError = validateMobileNum(mobileNum);
    setErrors(prev => ({
      ...prev,
      mobileNumError,
    }));
  };
  const verifyAge = (age: string) => {
    setAge(age);
    setErrors(prev => ({
      ...prev,
      ageError: validateAge(age),
    }));
  };

  const resetForm = () => {
    setFullName('');
    setEmail('');
    setMobNum(undefined);
    setDateOfBirth(null);
    setAge(null);
    setGender(undefined);
    setBio('');
    setErrors({
      fullNameError: '',
      emailError: '',
      dateOfBirthError: '',
      ageError: '',
      genderError: '',
      mobileNumError: '',
    });
  };

  const handleSubmit = () => {
    const fullNameError = validateUserName(fullName);
    const emailError = validateEmail(email);
    const ageError = age ? validateAge(age) : 'Age is required';
    const dateOfBirthError = validateDOB(dateOfBirth);
    const genderError = gender ? '' : 'Gender is required';
    const mobileNumError = !mobNum ? 'Enter mob num' : '';

    const updatedErrors = {
      fullNameError,
      emailError,
      ageError,
      dateOfBirthError,
      genderError,
      mobileNumError,
    };

    setErrors(updatedErrors);

    const hasError =
      fullNameError ||
      emailError ||
      ageError ||
      dateOfBirthError ||
      genderError;

    if (hasError) {
      //   setIsPending(true);
    } else {
      //   setIsPending(false);

      // dispatch({
      //   type: 'SET_FULL_NAME',
      //   payload: fullName,
      // });
      // dispatch({
      //   type: 'SET_EMAIL',
      //   payload: email,
      // });
      // dispatch({
      //   type: 'SET_MOBILE_NUMBER',
      //   payload: mobNum,
      // });
      // dispatch({
      //   type: 'SET_DOB',
      //   payload: dateOfBirth?.toDateString(),
      // });
      // dispatch({
      //   type: 'SET_AGE',
      //   payload: age,
      // });
      // dispatch({
      //   type: 'SET_GENDER',
      //   payload: gender?.genderName,
      // });
      // dispatch({
      //   type: 'SET_HAS_PROFILE',
      //   payload: true,
      // });

      dispatch(setStoreFullName(fullName));
      dispatch(setStoreEmail(email));
      dispatch(setStoreMobileNumber(mobNum!));
      dispatch(setStoreDOB(dateOfBirth?.toDateString()!));
      dispatch(setStoreAge(age!));
      dispatch(setStoreGender(gender?.genderName!));
      dispatch(setStoreHasProfile(true));
    }
  };

  //   styles = islandscape ? styles.landscape : styles.portrait ;

  // styles.inout
  // styles.button

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.gridContainer}>
          <View style={isLandscape ? styles.landscapeInput : { width: '100%' }}>
            <CustomTextInput
              placeholder="Full Name"
              value={fullName}
              onChangeText={verifyFullName}
              error={errors.fullNameError}
              maxLength={50}
            />
          </View>
          <View style={isLandscape ? styles.landscapeInput : { width: '100%' }}>
            <CustomTextInput
              placeholder="Email"
              value={email}
              onChangeText={verifyEmail}
              error={errors.emailError}
              keyboardType="email-address"
            />
          </View>
          <View style={isLandscape ? styles.landscapeInput : { width: '100%' }}>
            <CustomTextInput
              placeholder="Mobile Number"
              value={mobNum ? mobNum.toString() : ''}
              onChangeText={verifyMobileNum}
              error={errors.mobileNumError}
              keyboardType="number-pad"
              maxLength={10}
            />
          </View>
          <View style={isLandscape ? styles.landscapeInput : { width: '100%' }}>
            {/* <TouchableOpacity onPress={openDOBModal} style={{ width: '100%' }}> */}
            <CustomTextInput
              placeholder="Select DOB"
              value={dateOfBirth ? dateOfBirth.toDateString() : ''}
              onPress={openDOBModal}
              editable={true}
              error={errors.dateOfBirthError}
            />
            {/* </TouchableOpacity> */}
          </View>

          <View style={isLandscape ? styles.landscapeInput : { width: '100%' }}>
            <CustomTextInput
              placeholder="AGE"
              value={age ? age.toString() : ''}
              onChangeText={verifyAge}
              error={errors.ageError}
              keyboardType="number-pad"
              maxLength={2}
            />
          </View>
          <View style={isLandscape ? styles.landscapeInput : { width: '100%' }}>
            <Text style={styles.buttonText}>Select Gender</Text>
            <View style={styles.radioContainer}>
              {GENDER_SELECTION_ARRAY.map((item, index) => (
                <TouchableOpacity
                  testID={item.genderName}
                  key={index}
                  onPress={() => genderHandler(item)}
                  style={styles.button}
                >
                  <View style={styles.radioWrapper}>
                    <View style={styles.radio}>
                      {gender?.genderId === item.genderId ? (
                        <View style={styles.radioBg} />
                      ) : null}
                    </View>
                    <Text style={styles.buttonText}>{item.genderName}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          {errors.genderError ? (
            <Text style={styles.genderError}>{errors.genderError}</Text>
          ) : null}

          <View
            style={
              isLandscape ? { width: '100%', padding: 10 } : { width: '100%' }
            }
          >
            <CustomTextInput
              placeholder="Bio"
              value={bio}
              onChangeText={setBio}
              maxLength={150}
              multiLine={true}
            />
          </View>
          <DatePicker
            mode="date"
            modal
            open={openModal}
            minimumDate={new Date(MIN_DOB)}
            maximumDate={new Date()}
            date={dateOfBirth ?? new Date()}
            onConfirm={date => {
              setDateOfBirth(date);
              setOpenModal(false);
            }}
            onCancel={() => {
              setOpenModal(false);
            }}
          />
        </View>

        <View
          style={[{ width: '100%' }, isLandscape && { alignItems: 'center' }]}
        >
          <View style={{ width: isLandscape ? '50%' : '100%' }}>
            <CustomButton
              testId="submitButton"
              title="Submit"
              onPress={handleSubmit}
              isPending={isPending}
            />
          </View>
        </View>

        {/* <TouchableHighlight onPress={() => {}} underlayColor={'red'}>
          <View style={{ padding: 20 }}>
            <Text>HIGHLIGHT</Text>
          </View>
        </TouchableHighlight>

       <TouchableNativeFeedback
  onPress={() => console.log('Pressed')}
  background={TouchableNativeFeedback.Ripple('#ff0000', true)}
>
  <View style={{backgroundColor:'white', height:100}}>
    <Text>Press Me</Text>
  </View>
</TouchableNativeFeedback> */}
      </ScrollView>
    </View>
  );
}
