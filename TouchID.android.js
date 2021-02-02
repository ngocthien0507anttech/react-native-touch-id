import { NativeModules } from "react-native";
const NativeTouchID = NativeModules.FingerprintAuth;

export default {
  isSupported() {
    return new Promise((resolve, reject) => {
      NativeTouchID.isSupported(
        (error, code) => {
          console.log(error, code);
          return reject(false);
        },
        (success) => {
          console.log(success);
          return resolve(true);
        }
      );
    });
  },

  authenticate() {
    return new Promise((resolve, reject) => {
      NativeTouchID.authenticate(
        (error, code) => {
          console.log(error, code);
          return reject(false);
        },
        (success) => {
          console.log(success);
          return resolve(true);
        }
      );
    });
  },

  cancelled() {
    NativeTouchID.cancelled();
  },
};
