import styled from "styled-components";
import media from "styled-media-query";

export const Big = styled.div`
  ${media.lessThan("medium")`
  display: none;
    `}
`;

export const Small = styled.div`
  ${media.greaterThan("medium")`
    display: none;
    `}
`;
