import { useNavigate } from 'react-router-dom';
import Button from '../../Button/Button';
import * as S from './ErrorBoundary.styled';

type Props = {
  error: Error | null;
};

const GlobalErrorFallback = ({ error }: Props) => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
    window.location.reload();
  };

  return (
    <S.ErrorContainer>
      <S.ErrorIcon>⚠️</S.ErrorIcon>
      <S.ErrorTitle>오류가 발생했습니다</S.ErrorTitle>
      <S.ErrorMessage>
        예상치 못한 오류가 발생했습니다.
        <br />
        페이지를 새로고침하거나 홈으로 돌아가주세요.
      </S.ErrorMessage>
      {error && process.env.NODE_ENV === 'development' && (
        <S.ErrorDetails>{error.message}</S.ErrorDetails>
      )}
      <Button onClick={handleGoHome} width="200px">
        홈으로 돌아가기
      </Button>
    </S.ErrorContainer>
  );
};

export default GlobalErrorFallback;
