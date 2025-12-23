import { useState } from 'react';
import * as S from './ErrorTestButton.styled';

type Props = {
  type: 'global' | 'local';
};

const ErrorTestButton = ({ type }: Props) => {
  const [shouldThrow, setShouldThrow] = useState(false);

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  if (shouldThrow) {
    if (type === 'global') {
      throw new Error('전역 에러 바운더리 테스트 에러입니다.');
    } else {
      throw new Error('로컬 에러 바운더리 테스트 에러입니다.');
    }
  }

  return (
    <S.TestButton onClick={() => setShouldThrow(true)}>
      {type === 'global' ? '전역' : '로컬'} 에러 발생시키기
    </S.TestButton>
  );
};

export default ErrorTestButton;
