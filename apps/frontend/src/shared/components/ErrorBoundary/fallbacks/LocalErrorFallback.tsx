import Button from '../../Button/Button';
import * as S from './ErrorBoundary.styled';

type Props = {
  onRetry: () => void;
  error: Error | null;
};

const LocalErrorFallback = ({ onRetry, error }: Props) => {
  return (
    <S.RetryContainer>
      <S.ErrorIcon>⚠️</S.ErrorIcon>
      <S.ErrorTitle>데이터를 불러올 수 없습니다</S.ErrorTitle>
      <S.ErrorMessage>
        데이터를 불러오는 중 오류가 발생했습니다.
        <br />
        다시 시도해주세요.
      </S.ErrorMessage>
      {error && process.env.NODE_ENV === 'development' && (
        <S.ErrorDetails>{error.message}</S.ErrorDetails>
      )}
      <Button onClick={onRetry} width="200px">
        다시 시도
      </Button>
    </S.RetryContainer>
  );
};

export default LocalErrorFallback;
