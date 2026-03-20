import React, { useLayoutEffect, useState } from 'react';
import { TextInput } from 'react-native';
import { VStack, FormControl, Box, ScrollView } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import Button from './PatientScreen/Button';

import { appointmentsApi } from '../utils/api';

const AddPatientScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Add Patient',
      headerStyle: { backgroundColor: '#2A86FF' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontSize: 21, fontWeight: '700' },
      headerShadowVisible: false,
      headerLeft: () => (
        <Ionicons
          name="chevron-back"
          size={28}
          color="white"
          style={{ marginLeft: 10 }}
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, [navigation]);

  const onSubmit = () => {
    appointmentsApi
      .create({
        fullname: fullName, //Passing your separate states
        phone: phoneNumber,
      })
      .then(() => {
        navigation.navigate('Home'); // Go back if successful
      })
      .catch((err) => {
        alert('Error saving patient');
        console.log(err);
      });
  };

  return (
    <Box flex={1} bg="white" p={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack mt={5}>
          <FormControl mb={5}>
            <FormControl.Label _text={{ fontSize: 14, color: '#8b8b8b', fontWeight: '600' }}>
              Full Name
            </FormControl.Label>
            {/* 2. Use Standard TextInput - No hidden outline bugs */}
            <TextInput
              placeholder="Enter full name"
              value={fullName}
              onChangeText={(text) => setFullName(text)} // This updates the state
              autoFocus={true} // This pops the keyboard automatically
              placeholderTextColor="#a1a1a1"
              style={{
                fontSize: 18,
                borderBottomWidth: 1,
                borderBottomColor: '#e5e5e5',
                paddingVertical: 10,
                color: '#000',
              }}
              // Android specific safety
              underlineColorAndroid="transparent"
            />
          </FormControl>

          <FormControl mb={10}>
            <FormControl.Label _text={{ fontSize: 14, color: '#8b8b8b', fontWeight: '600' }}>
              Phone Number
            </FormControl.Label>
            <TextInput
              placeholder="+1 (___) ___ ____"
              value={phoneNumber}
              onChangeText={(text) => setPhoneNumber(text)}
              keyboardType="numeric"
              placeholderTextColor="#a1a1a1"
              style={{
                fontSize: 18,
                borderBottomWidth: 1,
                borderBottomColor: '#e5e5e5',
                paddingVertical: 10,
                color: '#000',
              }}
              underlineColorAndroid="transparent"
            />
          </FormControl>

          <Button color="#84D269" onPress={onSubmit}>
            {/* This Box keeps the + and the Text in one line */}
            <Box flexDirection="row" alignItems="center">
              <Ionicons name="add" size={24} color="white" style={{ marginRight: 5 }} />
              <Box _text={{ color: 'white', fontWeight: '700', fontSize: 16 }}>Save Patient</Box>
            </Box>
          </Button>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default AddPatientScreen;
