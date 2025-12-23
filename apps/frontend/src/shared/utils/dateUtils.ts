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
