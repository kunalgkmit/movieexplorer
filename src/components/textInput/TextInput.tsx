import React from 'react';
import { Text, TextInput, View } from 'react-native';

import { COLORS } from '@constants/colors';
import { styles } from './styles';

export default function CustomTextInput({
  placeholder,
  value,
  onChangeText,
  error,
  editable,
  autoCapitalize,
  secureTextEntry
}: CustomTextInputProps) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, error && styles.inputError]}
        placeholder={placeholder}
        placeholderTextColor={COLORS.TEXT_TERTIARY}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize={autoCapitalize}
        editable={editable}
        secureTextEntry={secureTextEntry}
      />
      
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}
