import { StatusBar } from "expo-status-bar";
import { HomeScreen } from "./src/screens/Home";
import styled from "styled-components/native";

export default function App() {
  return (
    <Container>
      <HomeScreen />
      <StatusBar style="auto" />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;
