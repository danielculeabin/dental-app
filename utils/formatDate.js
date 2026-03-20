import dayjs from 'dayjs';

/**
 * A robust, format-agnostic date formatter.
 * Handles: YYYY.MM.DD, DD.MM.YYYY, YYYY-MM-DD, and DD-MM-YYYY
 */
export const formatSectionDate = (dateString) => {
  if (!dateString) return 'No Date';

  // 1. Standardize separators (Change all dots to dashes)
  const cleanDate = dateString.replace(/\./g, '-');
  const parts = cleanDate.split('-');
  
  let dateObj;

  // 2. Smart Detection Logic
  if (parts[0].length === 4) {
    // Case: YYYY-MM-DD (The Gold Standard)
    dateObj = dayjs(cleanDate);
  } else if (parts[2] && parts[2].length === 4) {
    // Case: DD-MM-YYYY (The "Plankton" Format)
    // We manually reorder to YYYY-MM-DD so dayjs doesn't guess
    dateObj = dayjs(`${parts[2]}-${parts[1]}-${parts[0]}`);
  } else {
    // Fallback for anything else
    dateObj = dayjs(cleanDate);
  }

  // 3. Validation
  if (!dateObj.isValid()) {
    return dateString; // If it's still broken, show raw text instead of "Invalid"
  }

  // 4. Relative Time Logic
  const now = dayjs();
  if (now.isSame(dateObj, 'day')) {
    return 'Today';
  }

  // 5. Output Formatting (US English)
  // If different year: "March 12, 2027" | Same year: "March 12"
  const formatStr = now.year() !== dateObj.year() ? 'MMMM D, YYYY' : 'MMMM D';
  
  return dateObj.format(formatStr);
};