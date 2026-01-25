interface LoginFormProps {
  title: string;
  subtitle?: string;
}

interface ButtonProps {
  title: string;
  onPress: () => void;
}

interface CustomTextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (data:string) => void;
  error?: string;
  editable?: boolean;
  autoCapitalize?: 'none';
  secureTextEntry?: boolean
}
