import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { COLORS } from '@constants/colors';
import Ionicons from '@react-native-vector-icons/ionicons';
import { styles } from './styles';

export default function CustomTextInput({
  placeholder,
  value,
  onChangeText,
  error,
  editable,
  autoCapitalize = 'none',
  secureTextEntry,
  isPassword,
}: CustomTextInputProps) {
  const [passwordVisible, setPasswordVisible] = useState(secureTextEntry);

  const handlePasswordVisible = () => {
    setPasswordVisible(prev => !prev);
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, error && styles.inputError]}
          placeholder={placeholder}
          placeholderTextColor={COLORS.TEXT_TERTIARY}
          value={value}
          onChangeText={onChangeText}
          autoCapitalize={autoCapitalize}
          editable={editable}
          secureTextEntry={passwordVisible}
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>
      {isPassword ? (
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={handlePasswordVisible}
        >
          <Ionicons name={passwordVisible ? 'eye' : 'eye-off'} size={22} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}
