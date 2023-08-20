import styled from "styled-components";
import { Input as AntdInput } from "antd";
import { InputProps } from "./types";
import { colors } from "../variables";

const StyledInput = styled(AntdInput)`
  background-color: ${colors.dark};
  border: 3px solid ${colors.lightRGBA50};
  border-width: 3px !important;
  border-radius: 6px;

  & > input {
    background-color: ${colors.dark};
    color: ${colors.light};
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${colors.light};
    opacity: 0.3; /* Firefox */
  }
  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${colors.light};
    opacity: 0.3;
  }
  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${colors.light};
    opacity: 0.3;
  }
`;

const Input = (props: InputProps & { placeholder?: string }) => (
  <StyledInput
    {...props}
    size="large"
    placeholder={props.placeholder || "Please input"}
  />
);
export default Input;
