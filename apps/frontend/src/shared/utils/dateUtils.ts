/**
 * 이번 달의 첫 번째 날짜를 YYYY-MM-DD 형식으로 반환합니다.
 * @returns 이번 달 1일 (예: "2024-12-01")
 */
export const getCurrentMonthStartDate = (): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  return `${year}-${month}-01`;
};

/**
 * 이번 달의 마지막 날짜를 YYYY-MM-DD 형식으로 반환합니다.
 * @returns 이번 달 말일 (예: "2024-12-31")
 */
export const getCurrentMonthEndDate = (): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const lastDay = new Date(year, month, 0).getDate();
  return `${year}-${String(month).padStart(2, '0')}-${String(lastDay).padStart(2, '0')}`;
};

/**
 *
 * @param date YYYY-MM-DD 형식의 날짜 문자열
 * @returns { year: number; month: number; day: number } 날짜 정보
 */
export const getYearMonthDay = (date: string): { year: number; month: number; day: number } => {
  const [year, month, day] = date.split('-');
  return {
    year: Number(year),
    month: Number(month),
    day: Number(day),
  };
};

export const formatDateString = (year: number, month: number, day: number): string => {
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
};

export const isLeapYear = (year: number): boolean => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

export const getDaysInMonth = (year: number, month: number): number => {
  const daysInMonthMap: { [key: number]: number } = {
    1: 31,
    2: isLeapYear(year) ? 29 : 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };
  return daysInMonthMap[month] || 31;
};

export const getFirstDayOfWeek = (year: number, month: number): number => {
  const date = new Date(year, month - 1, 1);
  return date.getDay();
};
