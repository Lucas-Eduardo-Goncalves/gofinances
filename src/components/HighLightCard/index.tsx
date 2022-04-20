import React from "react";

import { 
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
} from "./styles";

interface IHighLightCard {
  title: string;
  amount: string;
  lastTransaction: string;
  type: "up" | "down" | "total"
}

export function HighLightCard({ type, title, amount, lastTransaction }: IHighLightCard) {

  function TakeIcon() {
    switch(type) {
      case "up": 
        return "arrow-up-circle"

      case "down": 
        return "arrow-down-circle" 

      case "total": 
        return "dollar-sign"
    }
  }

  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon name={TakeIcon()} type={type}/>
      </Header>

      <Footer>
        <Amount type={type}>
          {amount}
        </Amount>

        <LastTransaction type={type}>
          {lastTransaction}
        </LastTransaction>
      </Footer>
    </Container>
  )
}