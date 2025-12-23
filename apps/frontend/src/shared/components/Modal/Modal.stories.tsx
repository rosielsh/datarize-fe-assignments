import styled from '@emotion/styled';
import type { Meta, StoryObj } from '@storybook/react';
import { ModalProvider } from './ModalContext';
import { useModal } from './useModal';

const meta = {
  title: 'Shared/Modal',
  decorators: [
    (Story) => (
      <ModalProvider>
        <Story />
      </ModalProvider>
    ),
  ],
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const DemoButton = styled.button`
  padding: 12px 24px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2563eb;
  }

  &:active {
    background-color: #1d4ed8;
  }
`;

const ModalActions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 24px;
`;

const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  border: ${({ variant }) => (variant === 'secondary' ? '1px solid #d1d5db' : 'none')};
  background-color: ${({ variant }) => (variant === 'secondary' ? 'white' : '#3b82f6')};
  color: ${({ variant }) => (variant === 'secondary' ? '#374151' : 'white')};

  &:hover {
    background-color: ${({ variant }) => (variant === 'secondary' ? '#f9fafb' : '#2563eb')};
  }
`;

const BasicModalDemo = () => {
  const { openModal } = useModal();

  const handleOpenModal = () => {
    openModal(
      <div>
        <p>모달 내용</p>
      </div>,
      {
        title: '기본 모달',
      }
    );
  };

  return <DemoButton onClick={handleOpenModal}>모달 열기</DemoButton>;
};

export const Basic: Story = {
  render: () => <BasicModalDemo />,
};

const ConfirmModalDemo = () => {
  const { openModal, closeModal } = useModal();

  const handleOpenModal = () => {
    openModal(
      <div>
        <p>정말로 이 항목을 삭제하시겠습니까?</p>
        <p style={{ color: '#ef4444', fontSize: '14px' }}>이 작업은 되돌릴 수 없습니다.</p>
        <ModalActions>
          <Button variant="secondary" onClick={closeModal}>
            취소
          </Button>
          <Button
            onClick={() => {
              alert('삭제되었습니다!');
              closeModal();
            }}
          >
            삭제
          </Button>
        </ModalActions>
      </div>,
      {
        title: '삭제 확인',
        width: '400px',
      }
    );
  };

  return <DemoButton onClick={handleOpenModal}>삭제 확인 모달</DemoButton>;
};

export const Confirm: Story = {
  render: () => <ConfirmModalDemo />,
};
