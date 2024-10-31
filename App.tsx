import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { NativeBaseProvider } from 'native-base';
import { useEffect } from 'react';
import { Platform, StatusBar } from 'react-native';
import { NotificationClickEvent, OneSignal } from 'react-native-onesignal';
import { Loading } from './src/components/Loading';
import { CartContextProvider } from './src/contexts/CartContext';
import { tagUserEmailCreate } from './src/notifications/notificationTags';
import { Routes } from './src/routes';
import { THEME } from './src/theme';

const oneSignalAppId = Platform.OS === 'ios' ? '39a33db0-732c-4745-ab4b-a5e817597571' : '39a33db0-732c-4745-ab4b-a5e817597571'

OneSignal.initialize(oneSignalAppId)
OneSignal.Notifications.requestPermission(true)

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  tagUserEmailCreate('jfernandees002@gmail.com')

  useEffect(() => {
    const handleNotificationClick = (event: NotificationClickEvent): void => {
      const { actionId } = event.result

      switch (actionId) {
        case "1":
          //AÇÃO 01
          break;
        case "2":
          // AÇÃO 02
          break;
        default:
          // AÇÃO DEFAULT (USUÁRIO SÓ CLICA NA NOTIFICAÇÃO)
          break;
      }
    }

    OneSignal.Notifications.addEventListener('click', handleNotificationClick)
    return () => OneSignal.Notifications.removeEventListener('click', handleNotificationClick)
  }, [])

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>
    </NativeBaseProvider>
  );
}