import React, { useState, useEffect, useLayoutEffect, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Swipeable } from 'react-native-gesture-handler';

import { Appointment, SectionTitle } from '../components';
import { View, SectionList, ActivityIndicator, Alert, RefreshControl } from 'react-native';
import { appointmentsApi } from '../utils/api';
import { formatSectionDate } from '../utils/formatDate';

import {
  Container,
  PlusButtonWrapper,
  PlusButtonGradient,
  SwipeView,
} from '../styles/HomeScreen.styles';

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // 1. UI Configuration
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Patients',
      headerTintColor: '#2A86FF',
      headerStyle: { elevation: 0.8, shadowOpacity: 0.8, backgroundColor: '#fff' },
      headerTitleStyle: { fontSize: 23, fontWeight: '700', },
    });
  }, [navigation]);

  // 2. Data Fetching Logic (Extracted so it's reusable)
  const fetchAppointments = async (showMainLoader = true) => {
    try {
      if (showMainLoader) setIsLoading(true);
      const { data: response } = await appointmentsApi.get();
      setData(response.data);
    } catch (error) {
      console.error('Fetch Error:', error);
      Alert.alert('Error', 'Could not connect to the dental app server.');
    } finally {
      setIsLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    fetchAppointments();
  }, []);

  // 3. Pull-to-Refresh Logic
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    // Pass false so we don't trigger the big center ActivityIndicator
    await fetchAppointments(false);
    setRefreshing(false);
  }, []);

  // 4. Loading State (Initial full-screen loader)
  if (isLoading && !data) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}>
        <ActivityIndicator size="large" color="#2A86FF" />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }} edges={['right', 'bottom', 'left']}>
      <StatusBar style="dark" translucent={false} backgroundColor="#fff" />
      <Container>
        {data && (
          <SectionList
            sections={data}
            keyExtractor={(item, index) => item._id + index}
            contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 5 }}
            stickySectionHeadersEnabled={true}
            showsVerticalScrollIndicator={false}
            // PULL-TO-REFRESH
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                colors={['#2A86FF']} // Android spinner color
                tintColor="#2A86FF" // iOS spinner color
              />
            }
            renderSectionHeader={({ section: { title } }) => (
              <SectionTitle>{formatSectionDate(title)}</SectionTitle>
            )}
            renderItem={({ item, section }) => {
              if (!item.patient) return null;

              // Swipe Action Component
              const renderRightActions = () => (
                <SwipeView>
                  <Ionicons name="trash" size={28} color="white" />
                </SwipeView>
              );

              return (
                <Swipeable renderRightActions={renderRightActions}>
                  <Appointment
                    patient={item.patient}
                    diagnosis={item.diagnosis}
                    active={item.active}
                    time={item.time}
                    onPress={() =>
                      navigation.navigate('Patient', {
                        patient: item.patient,
                        appointmentId: item._id,
                        date: section.title,
                      })
                    }
                  />
                </Swipeable>
              );
            }}
          />
        )}

        {/* Floating Action Button */}
        <PlusButtonWrapper activeOpacity={0.85} onPress={() => navigation.navigate('AddPatient')}>
          <PlusButtonGradient>
            <Ionicons name="add" size={35} color="#fff" />
          </PlusButtonGradient>
        </PlusButtonWrapper>

      </Container>
    </SafeAreaView>
  );
};

export default HomeScreen;
