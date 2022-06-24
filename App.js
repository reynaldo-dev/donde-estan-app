import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { Provider  } from 'react-redux'
import { ThemeProvider } from 'styled-components';

import {store} from './src/redux/store'
import { theme } from './theme';





export default function App() {
 

  return (
    <>
      <Provider store={store} >
        <ThemeProvider theme={theme} >
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
        </ThemeProvider>
      </Provider>

    </>
    
  );
}

