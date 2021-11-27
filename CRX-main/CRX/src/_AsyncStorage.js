import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (e) {
    return false;
  }
}

export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
      if(value !== null) {
          return value;
      }else{
          return null;
      }
  } catch(e) {
      return null;
  }
}
