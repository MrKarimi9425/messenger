// import { StatusBar } from "expo-status-bar"
import 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './src/infrastracture/theme';
import { Navigation } from './src/infrastracture/navigation';
// import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
// import { useFonts as useLato, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';

export default App = () => {
  // let [oswald] = useOswald({
  //   Oswald_400Regular
  // });
  // let [lato] = useLato({
  //   Lato_400Regular,
  //   Lato_700Bold
  // });

  // if (!oswald || !lato) {
  //   return null;
  // }

  return (
    <ThemeProvider theme={theme}>
      <PaperProvider>
        <Navigation />
      </PaperProvider>
      {/* <StatusBar backgroundColor="white"/> */}
    </ThemeProvider>
  );
}
