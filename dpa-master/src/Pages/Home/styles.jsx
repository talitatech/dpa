import styled from "styled-components";
import { Layout, Input, Row, Col, Typography, Button, Space } from "antd";
const { TextArea } = Input;
const { Content, Header} = Layout;


export const Container = styled(Layout)`
background-color: #ffffff;

  display: flex;
  flex: 1;
`;

export const CustomRow = styled(Row)`
  justify-content: center;
  align-items: center;
`;

export const CustomColumn = styled(Col)`
  align-items: left;
`;

export const CustomHeader = styled(Header)`
background-color: #ffffff;
font-size: 32px;
font-weight: 400;
text-align: left;
`;

export const CustomContent = styled(Content)`
background-color: #ffffff;

`;

export const Large = styled(Space)`
background-color: #D9D9D9;
`;


export const CustomButton = styled(Button)`
  align-items: right;
  background-color: #D9D9D9;
  color: #2D2D2D;
  :hover i {
    color: #2D2D2D;
  }

`;

export const CustomInput = styled(Input)`
  width: 50%;
  margin: 10px;
`;

export const CustomTextAreaInput = styled(TextArea)`
  width: 50%;
  margin: 10px;
`;

export const Title = styled(Typography)`
  text-align: left;
`;