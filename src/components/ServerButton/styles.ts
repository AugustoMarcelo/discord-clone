import styled from 'styled-components';
import { ButtonProps } from './index';

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 48px;
  height: 48px;
  border-radius: ${({ isHome }) => isHome ? '16px' : '50px'};
  margin-bottom: 8px;
  
  background-color: ${({ isHome }) => isHome ? 'var(--rocketseat)' : 'var(--primary)'};

  cursor: pointer;
  position: relative;

  > img {
    width: 24px;
    height: 24px;
  }

  &::before {
    width: 9px;
    height: ${({ selected }) => selected ? '40px' : '9px'};

    position: absolute;
    left: -17px;
    top: ${({ selected }) => selected ? 'calc(50% - 20px)' : 'calc(50% - 4.5px)'};

    background-color: var(--white);
    border-radius: ${({ selected }) => selected ? '16px' : '50%'};

    content: '';
    display: ${({ hasNotifications }) => hasNotifications ? 'inline' : 'none' };
  }

  &::after {
    background-color: var(--notification);
    height: 16px;
    width: auto;

    padding: 0 4px;

    position: absolute;
    bottom: -4px;
    right: -4px;

    border-radius: 12px;
    border: 4px solid var(--quaternary);

    text-align: right;
    font-size: 13px;
    font-weight: bold;
    color: var(--white);

    content: '${({ mentions }) => mentions && mentions}';
    display: ${({ mentions }) => mentions && mentions > 0 ? 'inline' : 'none' };
  }

  transition: border-radius .2s, background-color .2s;

  &.active, &:hover {
    border-radius: 16px;
    background-color: ${({ isHome }) => isHome ? 'var(--rocketseat)' : 'var(--discord)'};
  }

  &:hover {
    ${({ selected, hasNotifications }) => !selected && (
      `&::before {
        width: 9px;
        height: ${hasNotifications ? '20px' : '9px'};
  
        position: absolute;
        left: -17px;
        top: ${hasNotifications ? 'calc(50% - 10px)' : 'calc(50% - 4.5px)'};
  
        background-color: var(--white);
        border-radius: ${hasNotifications ? '16px' : '50%'};
  
        content: '';
        display: ${ hasNotifications ? 'inline' : 'none' };
      }`
    )}
  }
`;
