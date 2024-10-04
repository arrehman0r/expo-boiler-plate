import { StatusBar } from 'expo-status-bar';
import { StyleSheet, } from 'react-native';
import Routes from './routes/routes';
import { StoreProviders } from './redux/provider/Provider';
import AppToast from './components/AppToast';
import AppLoader from './components/AppLoader';

export default function App() {
  return (

    <StoreProviders>
      <Routes />
      <AppToast/>
      <AppLoader />
      <StatusBar style="auto" />
    </StoreProviders>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
