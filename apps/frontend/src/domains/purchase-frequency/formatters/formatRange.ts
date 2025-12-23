/**
 * 가격 범위를 포맷팅합니다.
 * @param range - 가격 범위 문자열 (예: "0 - 20000")
 * @returns 포맷된 가격 범위 문자열 (예: "~2만원")
 */
export const formatRange = (range: string | number): string => {
  const rangeStr = String(range);
  const parts = rangeStr.split(' - ');
  if (parts.length !== 2) return rangeStr;

  const start = parseInt(parts[0], 10);
  const end = parseInt(parts[1], 10);

  const formatAmount = (amount: number): string => {
    if (amount === 0) return '~';
    const 만원 = Math.floor(amount / 10000);
    if (만원 === 0) {
      return `${amount}원`;
    }
    return `${만원}만원`;
  };

  if (start === 0) {
    return `~${formatAmount(end)}`;
  }

  return `${formatAmount(start)}~${formatAmount(end)}`;
};

