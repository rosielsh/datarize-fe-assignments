import * as S from './Spinner.styled';

type Props = {
  size?: 'small' | 'medium' | 'large';
};

const Spinner = ({ size = 'medium' }: Props) => {
  return <S.Spinner size={size} />;
};

export default Spinner;

