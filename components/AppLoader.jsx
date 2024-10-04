import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { useSelector } from 'react-redux';

const AppLoader = () => {
    const loading = useSelector((state) => state.utils.loading);

    // Render nothing if not loading
    if (!loading) {
        return null; 
    }

    return (
        <View style={styles.loaderContainer}>
            <ActivityIndicator animating={true} size="large" color={MD2Colors.green800} />
        </View>
    );
};

const styles = StyleSheet.create({
    loaderContainer: {
        flex: 1,
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
        backgroundColor: 'rgba(255, 255, 255, 0.3)', // Semi-transparent background
        position: 'absolute', // Position absolute to cover the whole screen
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 999, // Ensure it appears above other components
    },
});

export default AppLoader;
