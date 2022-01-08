import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <Wrapper>
      <h5>
        <span> ISTANBUL ZURA {" "}</span>
        &copy; {new Date().getFullYear()} г.
      </h5>
      <h5>Все права защищены</h5>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(218, 224, 245);
  text-align: center;

  span {
    color: var(--clr-primary-7);
  }

  h5 {
    /color: var(--clr-green);
    margin: 0.1rem;
    font-weight: 600;
    text-transform: none;
    //line-height: 1.25;
  }

  @media (min-width: 776px) {
    flex-direction: row;
  }
`;

export default Footer;