import styled, { css } from "styled-components/native";
import Feather from "@expo/vector-icons/Feather";
import { RFValue } from "react-native-responsive-fontsize";

interface ITypeProps {
  type: "up" | "down" | "total";
}

const Container = styled.View<ITypeProps>`
  border-radius: 5px;
  width: ${RFValue(270)}px;

  padding: 19px 23px;
  margin-right: 16px;
  padding-bottom: ${RFValue(42)}px;

  ${({ type, theme }) => type === "total" ? css`
    background-color: ${theme.colors.secondary};
  ` : css`
    background-color: ${theme.colors.shape};
  `}
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.Text<ITypeProps>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;

  ${({ type, theme }) => type === "total" ? css`
    color: ${theme.colors.shape};
  ` : css`
    color: ${theme.colors.text_dark};
  `}
`;

const Icon = styled(Feather)<ITypeProps>`
  font-size: ${RFValue(40)}px;

  ${(props) => props.type === "up" && css`
    color: ${({theme}) => theme.colors.success};
  `}

  ${(props) => props.type === "down" && css`
    color: ${({theme}) => theme.colors.attention};
  `}

  ${(props) => props.type === "total" && css`
    color: ${({theme}) => theme.colors.shape};
  `}
`;

const Footer = styled.View``;

const Amount = styled.Text<ITypeProps>`
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  margin-top: 38px;

  ${({ type, theme }) => type === "total" ? css`
    color: ${theme.colors.shape};
  ` : css`
    color: ${theme.colors.text_dark};
  `}
`;

const LastTransaction = styled.Text<ITypeProps>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;

  ${({ type, theme }) => type === "total" ? css`
    color: ${theme.colors.shape};
  ` : css`
    color: ${theme.colors.text};
  `}
`;

export {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
};
