import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { showToast } from "../redux/reducer/utilsSlice";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();

  
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      address: ''
    }
  });

 




  const handleSubmitForm = async (formData) => {
    
    dispatch(showToast("form submit successfully"))
    console.log("form data is ",formData )
   
  };

  const showtoastmessage = ()=>{
    dispatch(showToast("message is "))
  }

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: "Name is required"
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Name"
            mode="outlined"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={!!errors.name}
          />
        )}
        name="name"
      />
      {errors.name && <Text style={styles.errorText}>{errors.name.message}</Text>}

      <Controller
        control={control}
        rules={{
          required: "Phone is required",
          pattern: {
            value: /^[0-9]{11}$/,
            message: "Phone number must be 11 digits"
          }
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Phone"
            mode="outlined"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={!!errors.phone}
            keyboardType="numeric"
          />
        )}
        name="phone"
      />
      {errors.phone && <Text style={styles.errorText}>{errors.phone.message}</Text>}

      <Controller
        control={control}
        rules={{
          required: "Address is required"
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Address"
            mode="outlined"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={!!errors.address}
            multiline
          />
        )}
        name="address"
      />
      {errors.address && <Text style={styles.errorText}>{errors.address.message}</Text>}

      <Controller
        control={control}
        rules={{
          required: "Address is required"
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Address"
            mode="outlined"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={!!errors.address}
            multiline
          />
        )}
        name="address"
      />
      {errors.address && <Text style={styles.errorText}>{errors.address.message}</Text>}
      <Controller
        control={control}
        rules={{
          required: "Address is required"
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Address"
            mode="outlined"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={!!errors.address}
            multiline
          />
        )}
        name="address"
      />
      {errors.address && <Text style={styles.errorText}>{errors.address.message}</Text>}
      <Controller
        control={control}
        rules={{
          required: "Address is required"
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Address"
            mode="outlined"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={!!errors.address}
            multiline
          />
        )}
        name="address"
      />
      {errors.address && <Text style={styles.errorText}>{errors.address.message}</Text>}


      <Button
        mode="contained"
        onPress={handleSubmit(handleSubmitForm)}
        style={styles.placeOrderButton}
      >
       Login
      </Button>
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff"
  },
  input: {
    marginBottom: 20,
  },
  errorText: {
    color: "red",
    marginBottom: 10
  },
  placeOrderButton: {
    marginTop: 20,
    paddingVertical: 10
  }
});

export default Home;
