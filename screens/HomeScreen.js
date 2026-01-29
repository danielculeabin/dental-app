import React, { useState, useEffect, useLayoutEffect } from 'react';
import { SectionList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';
import axios from 'axios';
import { Appointment, SectionTitle } from '../components';
import { ActivityIndicator, View } from 'react-native'; // Add these imports
// import { PATIENT_SECTIONS } from '../data/patient';

import {
  ScreenTitle,
  Container,
  PlusButtonWrapper,
  PlusButtonGradient,
} from '../styles/HomeScreen.styles';

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //1. Set the UI instantly (Modern way)
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Patients',
      headerTintColor: '#2A86FF',
      headerStyle: {
        elevation: 0.8,
        shadowOpacity: 0.8,
        backgroundColor: '#fff',
      },
      headerTitleStyle: {
        fontWeight: '700',
      },
    });
  }, [navigation]);

  //2. Fetch the data in the background (The standard way)
  useEffect(() => {
    setIsLoading(true);
    axios
      .get('https://trycode.pw/c/WPU7K.json')
      .then(({ data }) => {
        // data is already in SectionList format
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Fetch Error:', err);
        setIsLoading(false);
      });
  }, []);

  //1. Loading State Guard
  if (isLoading) {
    return (
      <Container style={{ justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#2A86FF" />
      </Container>
    );
  }

  return (
    <Container>
      <StatusBar style="dark" />

      {/* 2. Double-check that data exists and is an array */}
      {data && Array.isArray(data) && (
        <SectionList
          showsVerticalScrollIndicator={false}
          sections={data}
          keyExtractor={(item, index) => item._id || index.toString()}
          stickySectionHeadersEnabled
          renderSectionHeader={({ section: { title } }) => 
            <SectionTitle>{title}</SectionTitle>}
          renderItem={({ item, section }) => {
            // 3. SAFETY CHECK: If user is missing, don't crash the app!
            if (!item.user) return null;

            return (
              <Appointment
                {...item}
                onPress={() =>
                  navigation.navigate('Patient', {
                    user: item.user,
                    diagnosis: item.diagnosis,
                    time: item.time,
                    title: section.title,
                  })
                }
              />
            );
          }}
        />
      )}

      <PlusButtonWrapper activeOpacity={0.85}>
        <PlusButtonGradient>
          <Ionicons name="add" size={35} color="#fff" />
        </PlusButtonGradient>
      </PlusButtonWrapper>
    </Container>
  );
};

export default HomeScreen;
