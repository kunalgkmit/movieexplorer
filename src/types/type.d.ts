interface LoginProps {
  userName: string;
  password: string;
}

interface LoginFormProps {
  title: string;
  subtitle?: string;
}

interface UserSession {
  sessionId: string;
  isLoggedIn: boolean;
}

interface ButtonProps {
  title: string;
  onPress: () => void;
}
