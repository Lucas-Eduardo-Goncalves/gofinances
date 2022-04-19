import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`; 

const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;

  align-items: center;
  justify-content: center;
  flex-direction: row;

  background-color: ${({ theme }) => theme.colors.primary};
`;

const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;
`;

const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;

  border-radius: 10px;
`;

const User = styled.View`
  margin-left: 17px;
`;

const UserGreeting = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
`;

const UserName = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.shape};
`;

export { 
  Container, 
  Header, 
  UserWrapper, 
  UserInfo, 
  Photo, 
  User, 
  UserGreeting, 
  UserName, 
};