// Mock Data - List of Patients
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
          phone: '+7 (999) 111-22-33',
          avatar: 'https://avatarfiles.alphacoders.com/833/83315.png',
        },
      },
      {
        time: '14:00',
        diagnosis: 'Lumbago & Meningitis',
        active: false,
        user: {
          fullname: 'Patrick Star',
          phone: '+7 (999) 222-33-44',
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
          phone: '+7 (999) 333-44-55',
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
          phone: '+7 (999) 444-55-66',
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
          phone: '+7 (999) 555-66-77',
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
          phone: '+7 (999) 666-77-88',
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
          phone: '+7 (999) 777-88-99',
          avatar: 'https://i.pinimg.com/280x280_RS/f4/1c/6b/f41c6bb795993254c4515222f0ec495e.jpg',
        },
      },
      {
        time: '15:30',
        diagnosis: 'Whale-sized wisdom teeth',
        active: true,
        user: {
          fullname: 'Pearl Krabs',
          phone: '+7 (999) 888-99-00',
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
          phone: '+7 (999) 000-11-22',
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
          phone: '+7 (999) 123-45-67',
          avatar: 'https://i.pinimg.com/736x/24/6c/27/246c27c5cf2c45a1ee829a26bcb5f3a5.jpg',
        },
      },
    ],
  },
];

export const PATIENT_SECTIONS = PatientDataJSON.map((section) => ({
  title: section.title,
  data: section.items,
}));
