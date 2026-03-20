//🎨 Different colors for patient's avatars
const getAvatarColor = (letter) => {
  // If no letter is provided, default to a neutral blue
  if (!letter) return '#2A86FF';

  // We get the character code of the first letter (Works for 'A' (65) or 'А' (1040))
  const charCode = letter.toUpperCase().charCodeAt(0);

  const colors = [
    '#F44336', // Red
    '#E91E63', // Pink
    '#9C27B0', // Purple
    '#673AB7', // Deep Purple
    '#3F51B5', // Indigo
    '#2196F3', // Blue
    '#00BCD4', // Cyan
    '#009688', // Teal
    '#4CAF50', // Green
    '#8BC34A', // Light Green
    '#CDDC39', // Lime
    '#FFEB3B', // Yellow
    '#FFC107', // Amber
    '#FF9800', // Orange
    '#FF5722', // Deep Orange
  ];

  // Instead of manual if/else for every letter, we use the Math 'modulo' operator (%)
  // This takes any number (like 1040) and maps it to an index between 0 and 14
  const colorIndex = charCode % colors.length;
  
  return colors[colorIndex];
};

export default getAvatarColor;