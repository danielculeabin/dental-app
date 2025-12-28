import React from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import styled from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';

// Import your Group component (make sure the path is right!)
import { Appointment } from './components';
import { SectionTitle } from './components';

// Define styles at the top
const Container = styled.View`
  flex: 1;
  margin-top: 30px;
  padding: 0 20px;
  background-color: #fff;
  padding-top: 40px;
`;

const PlusButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 64px;
  height: 64px;
  background: #2a86ff;
  position: absolute;
  right: 25px;
  bottom: 25px;
  shadow-color: #2a86ff;
  shadow-opacity: 0.7;
  shadow-radius: 3.5;

  /* Use box-shadow for iOS (styled-components handles the conversion) */
  box-shadow: 0px 4px 10px rgba(42, 134, 255, 0.5);

  /* Keep elevation for Android */
  elevation: 5;
`;

// Separate your JSON DATA from the UI to keep it clean
const PatientDataJSON = [
  {
    title: 'June 7th',
    items: [
      {
        time: '12:30',
        diagnosis: 'Pulpitis & Tooth removal',
        active: true,
        user: {
          fullname: 'Spongebob Squarepants',
          avatar: 'https://avatarfiles.alphacoders.com/833/83315.png',
        },
      },
      {
        time: '14:00',
        diagnosis: 'Lumbago & Meningitis',
        active: false,
        user: {
          fullname: 'Patrick Star',
          avatar:
            'https://files.topmediai.com/tts/avatar/3133079c-9283-11ef-a9bf-00163e004020.webp',
        },
      },
    ],
  },
  {
    title: 'June 10th',
    items: [
      {
        time: '09:00',
        diagnosis: 'Clarinet-related jaw strain',
        active: true,
        user: {
          fullname: 'Squidward Tentacles',
          avatar:
            'https://static.voices.com/wp-content/uploads/2022/09/mgid_arc_content_nickelodeon.com_.jpeg',
        },
      },
      {
        time: '10:30',
        diagnosis: 'Shell polish & Cavity check',
        active: false,
        user: {
          fullname: 'Gary the Snail',
          avatar:
            'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Gary-the-Snail.SpongeBob-SquarePants.webp',
        },
      },
    ],
  },
  {
    title: 'June 12th',
    items: [
      {
        time: '08:15',
        diagnosis: 'Money-pinching cramp',
        active: true,
        user: {
          fullname: 'Eugene Krabs',
          avatar:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn0_0GClEttKSPWqDn9h0TNqhqwI8nxsKLoQ&s',
        },
      },
      {
        time: '13:00',
        diagnosis: 'Hibernation dental prep',
        active: true,
        user: {
          fullname: 'Sandy Cheeks',
          avatar:
            'https://static.wikia.nocookie.net/inconsistently-admirable/images/1/13/The-Patrick-Star-Show-Sandy-Cheeks.webp/revision/latest/scale-to-width/360?cb=20241118165940',
        },
      },
    ],
  },
  {
    title: 'June 15th',
    items: [
      {
        time: '11:00',
        diagnosis: 'Eye socket cleaning',
        active: false,
        user: {
          fullname: 'Sheldon J. Plankton',
          avatar: 'https://i.pinimg.com/280x280_RS/f4/1c/6b/f41c6bb795993254c4515222f0ec495e.jpg',
        },
      },
      {
        time: '15:30',
        diagnosis: 'Whale-sized wisdom teeth',
        active: true,
        user: {
          fullname: 'Pearl Krabs',
          avatar:
            'https://static.wikia.nocookie.net/spongebob/images/7/7c/TPSS_Pearl.png/revision/latest/scale-to-width/360?cb=20230117044544',
        },
      },
    ],
  },
  {
    title: 'June 18th',
    items: [
      {
        time: '10:00',
        diagnosis: 'Driving test anxiety/Grinding',
        active: true,
        user: {
          fullname: 'Mrs. Puff',
          avatar:
            'https://assets.dragoart.com/images/1292_501/how-to-draw-mrs-puff-from-spongebob-squarepants_5e4c75bd5ab179.54019787_6630_3_4.jpg',
        },
      },
      {
        time: '16:45',
        diagnosis: 'Heroic gum rejuvenation',
        active: false,
        user: {
          fullname: 'Mermaid Man',
          avatar: 'https://i.pinimg.com/736x/24/6c/27/246c27c5cf2c45a1ee829a26bcb5f3a5.jpg',
        },
      },
    ],
  },
];
// Transform the data so <SectionList/> can read it
const DATA = PatientDataJSON.map((section) => ({
  title: section.title,
  data: section.items, // SectionList needs the key to be "data"
}));

export default function App() {
  return (
    <Container>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item.user.fullname + index}
        renderSectionHeader={({ section: { title } }) => <SectionTitle>{title}</SectionTitle>}
        renderItem={({ item }) => <Appointment {...item} />}
        stickySectionHeadersEnabled={true} // Keeps the date at the top while scrolling
      />
      <StatusBar style="auto" />
      <PlusButton
        style={{
          shadowColor: '#2A86FF',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.5,

          elevation: 8,
        }}>
        <Ionicons name="add" size={35} color="#fff" />
      </PlusButton>
    </Container>
  );
}
