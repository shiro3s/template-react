import { styled } from "@kuma-ui/core";

type Props = {
	href: string;
	children: string;
	disabled?: boolean;
};

export const AnchorBtn: React.FC<Props> = ({ children, href, disabled }) => {
	return <Container href={href} aria-disabled={disabled}>{children}</Container>;
};

const Container = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  height: 32px;
  padding: 8px 15px;
  box-sizing: border-box;
  border: 1px solid #dcdcdc;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  background-color: #fff;
  white-space: nowrap;
  color: #606266;
  cursor: pointer;

  &[aria-disabled="true"] {
    cursor: not-allowed;
    pointer-events: none;
  }
`;
