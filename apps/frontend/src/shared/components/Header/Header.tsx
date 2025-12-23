import ChartIcon from '@/shared/assets/icons/Chart/ChartIcon';
import * as S from './Header.styled';

const Header = () => {
  return (
    <S.Container>
      <S.IconWrapper>
        <ChartIcon />
      </S.IconWrapper>
      <S.Title>쇼핑몰 구매 대시보드</S.Title>
    </S.Container>
  );
};

export default Header;
