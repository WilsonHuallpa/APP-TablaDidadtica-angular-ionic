import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'camaraRv',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen:{
      lauchShowDuration : 3000,
      
    }
  }
};

export default config;
