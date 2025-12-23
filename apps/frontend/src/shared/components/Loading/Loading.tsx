import Spinner from '../Spinner/Spinner';
import * as S from './Loading.styled';

type Props = {
  message?: string;
  size?: 'small' | 'medium' | 'large';
};

const Loading = ({ message = '로딩 중...', size = 'medium' }: Props) => {
  return (
    <S.LoadingContainer>
      <Spinner size={size} />
      <S.LoadingText>{message}</S.LoadingText>
    </S.LoadingContainer>
  );
};

export default Loading;
