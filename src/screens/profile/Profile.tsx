import { ActivityIndicator, Text, View } from 'react-native';

import CustomAppBar from '@components/customAppBar/CustomAppBar';
import CustomButton from '@components/button';
import { useUserDetails } from '@hooks/useUserDetails';
import { useUserSession } from '@store/userSession';

import { styles } from './styles';

export default function Profile() {
  const { data, isLoading } = useUserDetails();

  const handleLogout = () => {
    useUserSession.persist.clearStorage();
    useUserSession.setState({
      isLoggedIn: false,
    });
  };

  if(isLoading){
    return(
      <ActivityIndicator style={styles.activityIndicator} size={20}/>
    )
  }

  return (
    <>
      <CustomAppBar title="Profile" />
      <View style={styles.container}>
        <View style={styles.avatarBG}>
          <Text style={styles.avatarInitials}>{data.name[0]}</Text>
        </View>
        <Text style={styles.name}>{data.name}</Text>
        <View style={styles.buttonStyle}>
          <CustomButton title="Logout" onPress={handleLogout} isLogout={true} />
        </View>
      </View>
    </>
  );
}
