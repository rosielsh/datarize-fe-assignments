import SearchIcon from '@/shared/assets/icons/Search/Search';
import * as S from './Input.styled';

export type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
} & Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type' | 'value' | 'onChange' | 'placeholder'
>;

const Input = ({ value, onChange, placeholder, type = 'text', ...props }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <S.Container>
      <S.IconWrapper>
        <SearchIcon />
      </S.IconWrapper>
      <S.Input
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        {...props}
      />
    </S.Container>
  );
};

export default Input;
