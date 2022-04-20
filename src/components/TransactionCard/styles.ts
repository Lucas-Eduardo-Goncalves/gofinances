import styled, { css } from "styled-components/native";
import Feather from "@expo/vector-icons/Feather";
import { RFValue } from "react-native-responsive-fontsize";

interface TypeProps {
  type: "positive" | "negative";
}

const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  padding: 17px 24px;
  margin-bottom: 16px;
`;

const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

const Amount = styled.Text<TypeProps>`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-top: 2px;

  ${(props) => props.type === "negative" 
    ? css`
        color: ${({ theme }) => theme.colors.attention};
      ` 
    : css`
      color: ${({ theme }) => theme.colors.success};
      `
  }
`;

const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 19px;
`;

const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
`;

const CategoryName = styled.Text`
  margin-left: 17px;
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
`;

const Date = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date,
};
