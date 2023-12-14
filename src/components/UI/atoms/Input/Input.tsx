import React from 'react';
import * as S from './styled';
import { useFormContext } from 'react-hook-form';

export interface InputProps {
  width?: number;
  height?: number;
  margin?: string;
  fontSize?: number;
  isError?: boolean;
  borderRadius?: number;
  borderColor?: string;
  placeholder?: string;
  backGroundColor?: string;
  borderColorOnFocus?: string;
  value?: string;
  maxLength?: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  children?: React.ReactNode;
  registerName?: string;
}

const Input: React.FC<InputProps> = ({
  margin,
  width = 328,
  height = 48,
  borderColor,
  fontSize = 14,
  isError = false,
  borderRadius = 4,
  backGroundColor = 'white',
  borderColorOnFocus = 'gray',
  value,
  maxLength,
  placeholder,
  registerName,
  onChange,
  onFocus,
}) => {
  const { register } = useFormContext();

  return (
    <S.Input
      $fontSize={0}
      width={width}
      height={height}
      $margin={margin}
      $isError={isError}
      $borderColor={borderColor}
      $borderRadius={borderRadius}
      $backGroundColor={backGroundColor}
      $borderColorOnFocus={borderColorOnFocus}
      value={value}
      maxLength={maxLength}
      placeholder={placeholder}
      onFocus={onFocus}
      onChange={onChange}
      {...(registerName && register(registerName))}
    />
  );
};
export default Input;
