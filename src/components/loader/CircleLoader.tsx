import styled from "styled-components";

export default function CircleLoader() {
  return <StyledLoader className="loader"></StyledLoader>;
}

const StyledLoader = styled.div`
  border-top-color: ${({ theme }) => theme.colors.green300};
`;
