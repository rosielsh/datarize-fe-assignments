import * as S from './Empty.styled';

type Props = {
  message?: string;
};

const Empty = ({ message = '데이터가 없습니다.' }: Props) => {
  return <S.EmptyText>{message}</S.EmptyText>;
};

export default Empty;
