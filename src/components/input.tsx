import React from "react";
import styled from "@emotion/styled";
import { TextField } from "@material-ui/core";
// reference https://qiita.com/acro5piano/items/1eab887998dcf6dda2b4
type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const Input: React.FC<Props> = ({ onChange, value }) => {
  return <Text onChange={onChange} value={value} />;
};

// TextFieldの型をアサーションする
const Text = styled(TextField as React.FC<Props>)`
  padding: 10px;
`;

export default Input;
