import Header from '@/shared/components/Header/Header';
import { useNavigate } from 'react-router-dom';
import * as S from './NotFoundPage.styled';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <S.Container>
      <Header />
      <S.Content>
        <S.ErrorContainer>
          <S.ErrorTitle>페이지를 찾을 수 없습니다</S.ErrorTitle>
          <S.ErrorMessage>
            요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
            <br />
            URL을 확인하시거나 홈으로 돌아가주세요.
          </S.ErrorMessage>
          <S.HomeButton onClick={handleGoHome}>홈으로 돌아가기</S.HomeButton>
        </S.ErrorContainer>
      </S.Content>
    </S.Container>
  );
};

export default NotFoundPage;
