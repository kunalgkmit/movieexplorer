import { useEffect, useState } from 'react';

import { View, Text, Button, Alert } from 'react-native';

import ProfileForm from '@components/profileForm';
import CustomAppBar from '@components/customAppBar';
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '@components/button';
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from 'features/countSlice';

import {
  setStoreHasProfile,
  setStoreResetProfile,
} from '../../features/profileSlice';

import CustomTextInput from '@components/textInput';
import { useUserSession } from '@store/userSession';
import { getStoreFavourites, resetStoreProfile } from 'reduxStore/actions/profileActions';
import { fetchFavourites } from '@hooks/useFavourites';
import { store } from 'reduxStore/store';
import { getFavourites } from '@services/favourites.service';

export default function Profile() {
  const [amount, setAmount] = useState('');

  const count = useSelector(state => state.counter.value);

  const hasProfile = useSelector(state => state.profile.hasProfile);
  const fullName = useSelector(state => state.profile.fullName);
  const email = useSelector(state => state.profile.email);

  const mobileNumber = useSelector(state => state.profile.mobileNumber);

  const dateOfBirth = useSelector(state => state.profile.dateOfBirth);
  const age = useSelector(state => state.profile.age);
  const gender = useSelector(state => state.profile.gender);
  const error = useSelector(state => state.profile.error);

  useEffect(() => {
    if (error) {
      Alert.alert('जय हिंद दोस्तों', error, [{ text: 'OK' }]);
    }
  }, [error]);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  const handleAmountIncrement = () => {
    dispatch(incrementByAmount(parseFloat(amount)));
  };

  const handleLogout = () => {
    dispatch(setStoreHasProfile(false));
    dispatch(setStoreResetProfile());
    useUserSession.setState({
      isLoggedIn: false,
    });
  };

  const handleClear = () => {
    // dispatch(resetStoreProfile());
    dispatch(getStoreFavourites());
    // getStoreFavourites();
  };

  // if (error) {
  //   return(
  //      Alert.alert('Login Failed', error.message, [{ text: 'OK' }]));
  // }

  return (
    <>
      <CustomAppBar title="Profile Form" />
      <View style={styles.container}>
        {/* <Text testID="greeting">{count}</Text>
        <CustomButton title="+" onPress={handleIncrement} />
        <CustomButton title="-" onPress={handleDecrement} />
        <CustomButton title="Reset" onPress={handleReset} />
        <CustomTextInput
          placeholder="Enter amount"
          value={amount}
          onChangeText={setAmount}
        />
        <CustomButton title="Reset" onPress={handleAmountIncrement} /> */}

        {hasProfile ? (
          <View>
            <Text>{fullName}</Text>
            <Text>{email}</Text>
            <Text>{mobileNumber}</Text>

            <Text>{dateOfBirth}</Text>

            <Text>{age}</Text>
            <Text>{gender}</Text>
          </View>
        ) : (
          <ProfileForm />
        )}
        <CustomButton title="Logout" onPress={handleLogout} />
        <CustomButton title="Clear" onPress={handleClear} />
      </View>
    </>
  );
}
