import { Text, View } from 'react-native';

import CustomAppBar from '@components/customAppBar/CustomAppBar';
import CustomButton from '@components/button';
import { useUserDetails } from '@hooks/useUserDetails';
import { useUserSession } from '@store/userSession';

import { styles } from './styles';

export default function Profile() {
  const { data } = useUserDetails();

  const handleLogout = () => {
    useUserSession.persist.clearStorage();
    useUserSession.setState({
      isLoggedIn: false,
    });
  };
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
