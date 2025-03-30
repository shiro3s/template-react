import { styled } from "@kuma-ui/core";
import {AnchorBtn} from "@/components/anchor-btn"

export const Header = () => {
	return (
    <Container>
      <AnchorBtn href="/todos/new">New todo</AnchorBtn>
    </Container>
  )
};

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
