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
  autoCapitalize = 'none',
  secureTextEntry,
  onPress,
  readOnly,
  keyboardType,
  maxLength,
  multiLine,
}: CustomTextInputProps) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        onPressIn={onPress}
        style={[
          styles.input,
          error && styles.inputError,
          multiLine && styles.multiLine
        ]}
        placeholder={placeholder}
        placeholderTextColor={COLORS.TEXT_TERTIARY}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize={autoCapitalize}
        editable={editable}
        secureTextEntry={secureTextEntry}
        readOnly={readOnly}
        keyboardType={keyboardType}
        maxLength={maxLength}
        multiline={multiLine}
      />

      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}
