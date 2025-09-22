import { TextFieldProps } from '@mui/material';
import { StyledTextField } from './CustomTextField.styled';

export const CustomTextField = (props: TextFieldProps) => {
  return <StyledTextField {...props} fullWidth size="small" />;
};
