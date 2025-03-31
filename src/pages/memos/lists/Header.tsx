import { styled } from "@kuma-ui/core";
import {AnchorBtn} from "@/components/common/anchor-btn"

export const Header = () => {
	return (
    <Container>
      <AnchorBtn href="/new">New</AnchorBtn>
    </Container>
  )
};

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
