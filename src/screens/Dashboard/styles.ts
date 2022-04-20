import styled from "styled-components/native";
import { FlatList, FlatListProps } from "react-native";
import { DataListProps } from ".";

import Feather from '@expo/vector-icons/Feather';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`; 

const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;

  align-items: flex-start;
  justify-content: center;
  flex-direction: row;

  background-color: ${({ theme }) => theme.colors.primary};
`;

const UserWrapper = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  padding: 0 24px;
  margin-top: ${RFValue(57)}px;
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

const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.secondary};
`;

const HighLightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 }
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(20)}px;
`;

const Transactions = styled.View`
  flex: 1;
  padding: 0 24px;

  margin-top: ${RFPercentage(10)}px;
`;

const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-bottom: 16px;
`;

const TransactionsList = styled(
  FlatList as new (props: FlatListProps<DataListProps>) => FlatList<DataListProps>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 15,
  },
})``;

export { 
  Container, 
  Header, 
  UserWrapper, 
  UserInfo, 
  Photo, 
  User, 
  UserGreeting, 
  UserName, 
  Icon,
  HighLightCards,
  Transactions,
  Title,
  TransactionsList,
};