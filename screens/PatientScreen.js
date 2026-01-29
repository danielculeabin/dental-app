import React, { useLayoutEffect } from 'react';
import styled from 'styled-components/native';
import { SafeAreaView, View, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Ionicons, Foundation } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Button from './PatientScreen/Button';
import GrayText from '../styles/GrayText.styles';
import Badge from '../components/Badge';

const MoreButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10px;
  top: 10px;
  height: 32px;
  width: 32px;
`;

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
`;

const ScreenLayout = styled.View`
  flex: 1;
`;

const Content = styled.View`
  padding: 25px;
`;

const PatientDetails = styled.View`
  margin-bottom: 20px;
`;

const PatientFullName = styled.Text`
  font-weight: 800;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 4px;
`;

const PatientButtons = styled.View`
  flex-direction: row;
  margin-top: 20px;
`;

const FormulaButtonView = styled.View`
  flex: 1;
`;

const PhoneButtonView = styled.View`
  width: 45px;
  margin-left: 10px;
`;

const PatientAppointments = styled.View`
  background-color: #f8fafd;
`;

const AppointmentsContainer = styled.View`
  padding: 20px;
`;

const AppointmentCard = styled.View`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px 25px;

  elevation: 2;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.15;
  shadow-radius: 10px;
`;

const AppointmentCardLabel = styled.Text`
  font-size: 16px;
  margin-left: 10px;
`;

const AppointmentCardRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 3.5px;
  margin-bottom: 3.5px;
`;

const PatientScreen = ({ navigation, route }) => {
  const { user } = route.params || {};

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Patient Card',
      headerStyle: {
        backgroundColor: '#2A86FF',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 21,
        fontWeight: '700',
      },
      headerShadowVisible: false,
    });
  }, [navigation]);

  return (
    <Container>
      <ScreenLayout>
        {/* Patient Info */}
        <Content>
          <PatientDetails>
            <PatientFullName>{user?.fullname || 'User Name'}</PatientFullName>

            <GrayText>{user?.phone || 'No phone number'}</GrayText>

            <PatientButtons>
              <FormulaButtonView>
                <Button>Dental Formula</Button>
              </FormulaButtonView>

              <PhoneButtonView>
                <Button color="#84D269">
                  <FontAwesome name="phone" size={20} color="white" />
                </Button>
              </PhoneButtonView>
            </PatientButtons>
          </PatientDetails>
        </Content>

        {/* Appointments */}
        <PatientAppointments>
          <AppointmentsContainer>
            <AppointmentCard>
              <MoreButton>
                <MaterialIcons name="more-vert" size={24} color="black" />
              </MoreButton>
              <AppointmentCardRow>
                <Ionicons name="medical" size={16} color="#A3A3A3" />
                <AppointmentCardLabel>
                  Tooth: <Text style={{ fontWeight: '600' }}>12</Text>
                </AppointmentCardLabel>
              </AppointmentCardRow>

              <AppointmentCardRow>
                <Foundation name="clipboard-notes" size={16} color="#A3A3A3" />
                <AppointmentCardLabel>
                  Diagnosis: <Text style={{ fontWeight: '600' }}>Pulpitis</Text>
                </AppointmentCardLabel>
              </AppointmentCardRow>

              <AppointmentCardRow style={{ marginTop: 15, justifyContent: 'space-between' }}>
                <Badge style={{ width: 155 }} active>
                  11.2.2026 - 15:40
                </Badge>
                <Badge color="green">$150</Badge>
              </AppointmentCardRow>
            </AppointmentCard>
          </AppointmentsContainer>
        </PatientAppointments>
      </ScreenLayout>
    </Container>
  );
};

export default PatientScreen;
