import { styled } from "styled-components"
import bookmark from '../../assets/img/bookmark-15.png'

export const CardStyled = styled.div`
  border: 1px solid lightgray;
  margin-bottom: 1rem;
  border-radius: 5px;

  .img-div {
    position: relative;
    /* margin-bottom: 1rem; */
  }

  span.price {
    background-color: #000;
    color: #fff;
    position: absolute;
    padding: 5px;
    border-radius: 10px 0 0 10px;
    top: 1rem;
    right: 0;
  }

  div.card-title {
    margin: 1rem 0;
  }

  div.card-body {
    padding: 0 1rem;
  }

  div.card-body .row {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px;
  }

  .details-wrapper ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .row .btn-wrapper {
    display: grid;
    place-items: end;
    padding-bottom: 1rem;
  }
`;

export const ProductDetails = styled.li`
    position: relative;

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
`