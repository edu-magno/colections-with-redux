import styled from "styled-components";


const StyledCard = styled.div`
  width: 250px;
  height: 320px;
  font-family: Red Hat Display;
  font-weight: 500;
  font-size: 25px;
  background-color: #fff;
  margin: 0.625rem;
  border-radius: 5px;
  box-shadow: 0 2px 4px #bdbdbd;
  text-transform: capitalize;
  transition: 0.2s;
  img {
    margin:0.625rem;
    width: 90%;
    height: 250px;
    object-fit: cover;
  }

  &:hover {
    width:245px;
    height:315px;
  }
  &:active {
    width:255px;
    height:325px;
  }
`;

export default StyledCard;
