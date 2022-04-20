import React from "react";

import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date,
} from "./styles";

interface CategoryProps {
  name: string;
  icons: string;
}

export interface ITransactionCardProps {
  type: "positive" | "negative";
  title: string;
  amount: string;
  category: CategoryProps;
  date: string;
}

interface Props {
  data: ITransactionCardProps;
}

export function TransactionCard({ data }: Props) {
  return (
    <Container>
      <Title>{data.title}</Title>
      <Amount type={data.type}>
        {data.type === "negative" && "- "}
        {data.amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={data.category.icons} />
          <CategoryName>{data.category.name}</CategoryName>
        </Category>

        <Date>{data.date}</Date>
      </Footer>
    </Container>
  )
};
