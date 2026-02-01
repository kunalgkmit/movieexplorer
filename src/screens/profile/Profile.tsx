import { Text, View } from 'react-native';

import CustomAppBar from '@components/customAppBar/CustomAppBar';
import CustomButton from '@components/button';
import CustomActivityIndicator from '@components/customActivityIndicator';
import { useUserDetails } from '@hooks/useUserDetails';
import { useUserSession } from '@store/userSession';

import { styles } from './styles';
import { COLORS } from '@constants/colors';

export default function Profile() {
  const { data, isLoading } = useUserDetails();

  const handleLogout = () => {
    useUserSession.persist.clearStorage();
    useUserSession.setState({
      isLoggedIn: false,
    });
  };

  if (isLoading) {
    return <CustomActivityIndicator color={COLORS.SHADOW} />;
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
