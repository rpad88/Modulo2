import { styled } from "styled-components";
import bookmark from '../../assets/img/bookmark-15.png'

export const SpanFeature = styled.span`
  position: relative;
  margin-left: 2rem;
  flex: 1 1 auto;

  &::before {
    content: "";
    position: absolute;
    padding: 0;
    top: -5px;
    left: -37px;
    width: 28px;
    height: 28px;
    background-image: url(${bookmark});
    background-repeat: no-repeat;
  }
`;