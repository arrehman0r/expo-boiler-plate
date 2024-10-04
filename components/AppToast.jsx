import React from 'react';
import { SafeAreaView } from 'react-native';
import { Snackbar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { hideToast } from '../redux/reducer/utilsSlice';


const AppToast = () => {
    const dispatch = useDispatch();
    const { visible, message } = useSelector((state) => state.utils);
    const onDismissSnackBar = () => dispatch(hideToast());
console.log("message and vbisii", visible, message)
    return (
    <SafeAreaView>
        <Snackbar
            visible={visible}
            onDismiss={onDismissSnackBar}
            action={{
                label: 'Close',
                onPress: () => {
                    // Do something
                },
            }}
        >
            {message}
        </Snackbar>
    </SafeAreaView>)
};

export default AppToast;
