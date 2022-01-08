import React from "react";
import styled from "styled-components";

const Stars = () => {
  return (
    <Wrapper>
      <ul className="rating">
        <li className="fas fa-star" />
        <li className="fas fa-star" />
        <li className="fas fa-star" />
        <li className="fas fa-star" />
        <li className="fas fa-star" />
      </ul>

    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;

  .rating li{
    display: inline-block;
    font-size: 10px;
    color: #ffc000;
  }
  
  span {
    color: #ffb900;
    //font-size: 1rem;
    font-size: 12px;
    margin-right: 0.25rem;
  }

  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }

  margin-bottom: 0.5rem;
`;
export default Stars;