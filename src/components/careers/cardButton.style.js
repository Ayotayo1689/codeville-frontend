import styled from "styled-components";

export const CardButton = styled.div`
  text-align: center;

  > button {
    width: 9rem;
    margin: auto;
    height: 3rem;
    background: #ffffff;
    box-shadow: 0px 1.55172px 3.10345px rgba(0, 0, 0, 0.3),
      0px 1.55172px 4.65517px 1.55172px rgba(0, 0, 0, 0.15);
    border-radius: 12.4138px;
    display: flex;
    align-items: center;
    padding-left: 0.5rem;
    text-align: center;
  }

  .button_icon {
    margin-top: 0.1rem;
    margin-left: 1rem;
    background-color: #e9000e;
    color: white;
    height: 1.25rem;
    width: 1.25rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
