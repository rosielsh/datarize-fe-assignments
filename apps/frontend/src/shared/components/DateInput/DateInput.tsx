import CalendarIcon from '@/shared/assets/icons/Calendar/Calendar';
import { formatDate } from '@/shared/formatters/formatDate';
import * as S from './DateInput.styled';

export type Props = {
  date: string;
  onInputClick: () => void;
  placeholder?: string;
};

const DateInput = ({ date, onInputClick, placeholder = '날짜 선택' }: Props) => {
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
