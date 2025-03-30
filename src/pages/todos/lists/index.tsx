import { styled } from "@kuma-ui/core";
import { Header } from "./Header";

export const TodoLists = () => {
	return (
		<section>
			<Header />
			<Content>todo lists</Content>
		</section>
	);
};

const Content = styled.div`
  margin: 2rem 0;
`;
