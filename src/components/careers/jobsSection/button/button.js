import styled from "styled-components";

export const BTN = styled.div`
  width: 120px;
  height: 40px;
  color: white;
  background: linear-gradient(255.79deg, #AC2121 14.97%, #E9000E 89.5%);

  /* border: 1.5px solid rgba(0, 0, 0, 0.3); */
  border-radius: 8px;
  text-align: center;
  margin-top: 4rem;
  margin-right: 4rem;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 0 0 0;
 
  @media screen and (max-width: 540px) {
   font-size: 0.7rem;
    width: 90px;
    height: 30px;

    margin-top: 0;
    margin-right: 0;
  margin-left: auto;

 
  }

  @media screen and (min-width: 768px) and (max-width: 912px){
    margin-left: auto;
  }
`;
