import { styled } from "@kuma-ui/core";
import { Header } from "./Header";

export const MemoLists = () => {
	return (
		<section>
			<Header />
			<Content>memo lists</Content>
		</section>
	);
};

const Content = styled.div`
  margin: 2rem 0;
`;
