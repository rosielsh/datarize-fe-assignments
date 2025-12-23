/**
 * 날짜 문자열을 포맷팅합니다.
 * @param dateString - 날짜 문자열 (예: "2024-12-01")
 * @returns 포맷된 날짜 문자열 (예: "2024.12.01")
 */
export const formatDate = (dateString: string): string => {
  if (!dateString) return '';
  const [year, month, day] = dateString.split('-');
  return `${year}.${month}.${day}`;
};
