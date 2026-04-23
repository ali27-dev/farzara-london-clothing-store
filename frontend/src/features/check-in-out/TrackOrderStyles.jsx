import styled from "styled-components";

export const SearchWrapper = styled.section`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 5%;
  text-align: center;
`;

export const SearchBox = styled.form`
  width: 100%;
  max-width: 50rem;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 2rem;
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-sm);
  font-size: 1.6rem;
  text-align: center;
  transition: all 0.3s;

  &:focus {
    outline: none;
    border-color: var(--color-brand-600);
    box-shadow: 0 0 0 4px rgba(var(--color-brand-600-rgb), 0.1);
  }
`;

export const SearchButton = styled.button`
  background-color: var(--color-grey-900);
  color: white;
  padding: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: var(--border-radius-sm);
  transition: all 0.3s;

  &:hover {
    background-color: var(--color-brand-600);
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: var(--color-grey-300);
    cursor: not-allowed;
  }
`;
