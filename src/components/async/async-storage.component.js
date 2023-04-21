import AsyncStorage from '@react-native-async-storage/async-storage';

export const getStore = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        return value;
    } catch (e) {
        console.log('get async storage error is : ', e)
    }
}
export const setStore = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        console.log('set async storage error is : ', e)
    }
}

export const removeStore = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
        return true;
    } catch (error) {
        console.error("remove async storage error is : ", error);
    }
}