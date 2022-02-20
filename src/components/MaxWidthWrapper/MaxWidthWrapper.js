import styled from "styled-components/macro";

const MaxWidthWrapper = styled.div`
  position: relative;
  max-width: min(100%, calc(1200px + 32px * 2));
  margin: 0 auto;
  padding: 0 16px;
`;

export default MaxWidthWrapper;
