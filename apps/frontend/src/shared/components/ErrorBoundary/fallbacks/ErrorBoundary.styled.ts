import styled from '@emotion/styled';

export const ErrorContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  text-align: center;
  background-color: #f9fafb;
`;

export const RetryContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: 2rem;
  text-align: center;
`;

export const ErrorIcon = styled.span`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const ErrorTitle = styled.h1`
  font-size: 1.2rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
`;

export const ErrorMessage = styled.p`
  font-size: 0.75rem;
  color: #6b7280;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

export const ErrorDetails = styled.pre`
  font-size: 0.875rem;
  color: #ef4444;
  background-color: #fee2e2;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  text-align: left;
  overflow-x: auto;
  max-width: 100%;
`;
