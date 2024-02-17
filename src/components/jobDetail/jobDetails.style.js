import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0;
  padding: 0;
`;
export const JobTittle = styled.div`
  background-color: rgba(52, 48, 48, 1);
  height: 13.25rem;
  width: 100%;
  top: -4rem;
  position: relative;
  color: white;

  h2 {
    color: white;
    font-size: 3rem;
    text-align: left;
    top: 4rem;
    position: relative;
    font-weight: 700;
    width: 72%;
    margin: auto;

    @media screen and (max-width: 540px) {
      font-size: 1.5rem;
      align-items: center;
      text-align: center;
      margin-left: 2rem;
    }
    @media screen and (min-width: 768px) and (max-width: 912px) {
      font-size: 2rem;
      align-items: center;
      text-align: center;
      margin-right: 8rem;
    }
  }
  hr {
    border: 1.5px solid white;
    width: 5%;
    @media screen and (max-width: 540px) {
      width: 25%;
      margin-left: 6rem;
      border: 2px solid white;
      margin-top: 1rem;
    }

    @media screen and (min-width: 768px) and (max-width: 912px) {
      width: 20%;
      //margin-left: rem;
      border: 2px solid white;
      margin-top: 1rem;
    }
  }
`;
export const OverviewBody = styled.div`
  @media screen and (max-width: 540px) {
    background-color: #f7f3f5;
  }
`;
export const Overview = styled.div`
  background-color: rgba(244, 244, 244, 1);
  height: 24.5rem;
  position: relative;
  top: -4rem;

  @media screen and (max-width: 540px) {
    background-color: #f7f3f5;
    height: 13rem;
  
  }

  .overview {
    display: flex;
    justify-content: space-between;

    width: 80%;
    margin: auto;
  }
  .overview__icons {
    display: flex;
    margin-top: 3rem;
    padding: 0 3rem 0 0;
    color: rgba(64, 64, 64, 1);
    font-size: 2rem;

    @media screen and (max-width: 540px) {
      font-size: 1rem;
      padding: 0 2rem 0 0;
      margin-left: 2rem;
    }
    @media screen and (min-width: 768px) and (max-width: 912px) {
      font-size: 1rem;
      padding: 0 2rem 0 0;
    }
  }
  .overview__icons p {
    margin-right: 3rem;

    @media screen and (max-width: 540px) {
      margin-right: 1rem;
      margin-top: 0.5rem;
    }
    @media screen and (min-width: 768px) and (max-width: 912px) {
      margin-right: 1rem;
      margin-top: 0.5rem;
    }
  }

  .overview__tittle {
    font-size: 3rem;
    font-weight: 700;
    margin-top: 2rem;
    padding: 0 0 0 3rem;

    @media screen and (max-width: 540px) {
      font-size: 2rem;
      margin-left: 1.5rem;
      padding: 0;
    }
    @media screen and (min-width: 768px) and (max-width: 912px) {
      font-size: 2rem;
      margin-left: 1.5rem;
      padding: 0;
    }
  }
  hr {
    border: 1.5px solid red;
    width: 25%;
  }
  .overview__text {
    font-size: 1.2rem;
    font-weight: 400;
    padding: 4rem 4rem 0 4rem;
    color: #1f1f1f;

    @media screen and (max-width: 540px) {
      font-size: 0.84375rem;
      padding: 2rem 2rem 0 2rem;
    }
    @media screen and (min-width: 768px) and (max-width: 912px) {
      font-size: 1.5rem;
      padding: 2rem 2rem 0 2rem;
    }
  }
`;
export const DetailsSection = styled.div`
 
  .job___details {
    @media screen and (max-width: 540px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-left: 1rem;
      margin-top: 2rem;
    }
    @media screen and (min-width: 768px) and (max-width: 912px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-left: 2rem;
    }
    .details__ {
      @media screen and (max-width: 540px) {
        margin-left: 2rem;
       
      }
      @media screen and (min-width: 768px) and (max-width: 912px) {
        margin-left: 2rem;
      }
    }
  }
  .job___details h2 {
    font-size: 2rem;
    font-weight: 500;
    color: rgba(0, 0, 0, 1);
    //margin-top: 1.5rem;

    @media screen and (max-width: 540px) {
      font-size: 1rem;
      margin-top: 0.5rem;
    }
    @media screen and (min-width: 768px) and (max-width: 912px) {
      font-size: 1rem;
      margin-top: 0.5rem;
    }
  }

  .job___details p {
    font-size: 1.25rem;
    color: rgba(0, 0, 0, 1);
    font-weight: 400;
    margin-top: 1rem;

    @media screen and (max-width: 540px) {
      font-size: 0.625rem;
      margin-top: 0.5rem;
    }
    @media screen and (min-width: 768px) and (max-width: 912px) {
      font-size: 0.625rem;
      margin-top: 0.5rem;
    }
  }

  .list_items_tittle {
    @media screen and (max-width: 540px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 3rem;
    }
  }
  .list_items_tittle span {
    display: none;
    @media screen and (max-width: 540px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1.5rem;
      font-size: 2rem;
      padding-left: 2rem;
    }
  }
  .list_items h2 {
    font-size: 2rem;
    font-weight: 500;
    color: rgba(0, 0, 0, 1);
    //margin-top: 1.5rem;

    @media screen and (max-width: 540px) {
      margin-left: 2rem;
      font-size: 1rem;
    }
    @media screen and (min-width: 768px) and (max-width: 912px) {
      margin-left: 2rem;
      font-size: 2rem;
    }
  }
  .list_items ul {
    width: 47.75rem;
    margin-left: 3rem;
    margin-bottom: 5rem;
    margin-top: 2rem;
    @media screen and (max-width: 540px) {
      margin-left: 2rem;
      width: 100%;
      padding-right: 4rem;
    }

    @media screen and (min-width: 768px) and (max-width: 912px) {
      margin-left: 2rem;

      width: 100%;
      padding-right: 4rem;
    }
  }
  .list_items h2::after {
    content: "";
    display: block;
    height: 3px;
    background-color: red;
    margin: 10px 0;
    width: 7%;
  }
  .list-items {
    display: flex;
    font-size: 1.2rem;
    margin-top: 1.5rem;
    @media screen and (max-width: 540px) {
      font-size: 0.78rem;
    }
  }
  .desktop_design {
    @media screen and (max-width: 540px) {
      display: none;
    }
  }
  .mobile-design {
    @media screen and (min-width: 600px) {
      display: none;
    }
  }
  .rectangle_icon {
    margin-top: 0.4rem;
    margin-right: 1rem;
    color: red;
  }
  .apply-btn {
    width: 12.0625rem;
    height: 2.8125rem;
    color: white;
    background: rgba(233, 0, 14, 1);
    border-radius: 8px;
    text-align: center;
    font-size: 1rem;
    margin-bottom: 5rem;
    @media screen and (max-width: 540px) {
      margin-top: 3rem;
   
    }

    @media screen and (min-width: 768px) and (max-width: 912px) {
      //margin-left: 5rem;
    }
  }
`;
