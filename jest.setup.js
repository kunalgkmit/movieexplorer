import { Alert } from 'react-native';
import 'react-native-gesture-handler/jestSetup';
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock'

jest.mock('@react-native-vector-icons/ionicons', () => "Ionicons");
jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);
jest.mock('react-native-date-picker', () => jest.fn());
jest.spyOn(Alert, 'alert');


// date picker mock


// fireEvent