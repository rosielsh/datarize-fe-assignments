import CalendarIcon from '@/shared/assets/icons/Calendar/Calendar';
import * as S from './DateInput.styled';

export type Props = {
  date: string;
  onInputClick: () => void;
  placeholder?: string;
};

const DateInput = ({ date, onInputClick, placeholder = '날짜 선택' }: Props) => {
  const formatDate = (dateString: string): string => {
    if (!dateString) return '';
    const [year, month, day] = dateString.split('-');
    return `${year}.${month}.${day}`;
  };

  const handleInputClick = () => {
    onInputClick();
  };

  return (
    <S.Container>
      <S.DateInputWrapper onClick={handleInputClick}>
        <CalendarIcon />
        <S.DateInput type="text" value={formatDate(date)} readOnly placeholder={placeholder} />
      </S.DateInputWrapper>
    </S.Container>
  );
};

export default DateInput;
