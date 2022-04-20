import React from "react";
import { HighLightCard } from "../../components/HighLightCard";
import { ITransactionCardProps, TransactionCard } from "../../components/TransactionCard";

import {
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
  TransactionsList
} from "./styles";

export interface DataListProps extends ITransactionCardProps {
  id: string;
}

const data: DataListProps[] = [
  {
    id: "1",
    type: "positive",
    amount: "R$15.000,00",
    date: "16/04/2022",
    title: "Desenvolvimento de site",
    category: {
      name: "Salário",
      icons: "dollar-sign"
    },
  },

  {
    id: "2",
    type: "negative",
    amount: "R$59,00",
    date: "05/04/2022",
    title: "Hamburgueria Pizzy",
    category: {
      name: "Alimentação",
      icons: "coffee"
    },
  },

  {
    id: "3",
    type: "negative",
    amount: "R$1.200,00",
    date: "11/01/2022",
    title: "Aluguel Apartamento",
    category: {
      name: "Casa",
      icons: "home"
    },
  }
];

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: "https://avatars.githubusercontent.com/u/92813658?v=4" }}/>

            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Lucas Gonçalves</UserName>
            </User>
          </UserInfo>

          <Icon name="power"  />
        </UserWrapper>
      </Header>

      <HighLightCards>
        <HighLightCard 
          type="up"
          amount="R$15.000,00" 
          title="Entrada" 
          lastTransaction="Última entrada no dia 16/04" 
        />

        <HighLightCard 
          type="down"
          amount="R$1.259,00" 
          title="Saida" 
          lastTransaction="Última saida hoje" 
        />

        <HighLightCard 
          type="total"
          amount="R$13.741,00" 
          title="Saldo" 
          lastTransaction="16/04 até hoje" 
        />
      </HighLightCards>

      <Transactions>
        <Title>Listagem de transações:</Title>

        <TransactionsList 
          data={data}
          keyExtractor={( item ) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  )
}