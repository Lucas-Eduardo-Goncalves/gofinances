import React from "react";
import { Feather } from '@expo/vector-icons';

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
} from "./styles";

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

          <Feather name="power" size={24} color="black" />
        </UserWrapper>
      </Header>
    </Container>
  )
}