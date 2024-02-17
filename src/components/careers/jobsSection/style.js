import styled from "styled-components";

export const Container = styled.div``;
export const Paragraph = styled.div`
  margin-top: 3rem;

  text-align: center;

  .paragraph__title h2 {
    font-size: 2.1875rem;
    font-weight: 600;
    color: #444444;

    @media screen and (max-width: 540px) {
      font-size: 1.5rem;
      position: relative;
      top: 2rem;
    }
  }
  #tittle__sub {
    color: #e9000e;
  }

  .jobSection__tittle{
    @media screen and (max-width: 540px) {
    }
  }
  .paragraph__title h4 {
    color: #212121;
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    margin-top: 1.5rem;

    @media screen and (max-width: 540px) {
      font-size: 12px;
      font-weight: 500;
      width: 100%;
      padding: 0 2rem 0 2rem;
      margin-top:3rem;
    }
  }
  .paragraph {
  
    padding: 0 9rem;
    margin-top: 1rem;
    color: #303030;
    font-size: 0.9rem;
    font-weight: 500;

    @media screen and (max-width: 540px) {
 
      padding: 0 ;
      margin-top: 1rem;
      color: #303030;
      font-size: 0.9rem;
      font-weight: 500;
    }
  }
`;
export const JobSection = styled.div`
  text-align: left;
  margin-top: 2rem;
  padding: 2rem;
  @media screen and (max-width: 540px) {
    padding: 0;
    }
  @media screen and (min-width: 768px) and (max-width: 912px) {
    padding: 0 ;
  }

  .no_opening{
    margin-top: 2rem;
  }

  .no_opening h3 {
    font-size: 1.5625rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
    border-bottom: 0.1px solid rgba(0, 0, 0, 0.5);
    padding-bottom: 1rem;
    padding-top: 1rem;
    @media screen and (max-width: 540px) {
      font-size: 1rem;
      padding: 0 ; 
      width: 100%;
    }
    @media screen and (min-width: 768px) and (max-width: 912px) {
      font-size: 1.5rem;
      //padding: 0 0 0 5rem;
    }
  }
  .no_opening p {
    color:rgba(48, 48, 48, 1) ;
    margin-top: 0.3rem;
    font-size: 1rem;
    font-weight: 400;
    @media screen and (max-width: 540px) {
      font-size: 0.7rem;
      margin-top: 0.1rem;
      padding: 0 ;
      
    }
    @media screen and (min-width: 768px) and (max-width: 912px) {
      font-size: 1rem;
   
    }
  }
  
  .available_jobs h3 {
    font-size: 1.5625rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
    margin-top: 2rem;
    color: rgba(0, 0, 0, 1);
    border-bottom: 0.1px solid rgba(0, 0, 0, 0.5);
    padding-bottom: 1rem;
    padding-top: 1rem;
   

    @media screen and (max-width: 540px) {
      font-size: 1rem;
      padding: 0 ;
      width: 100%;
    }
    @media screen and (min-width: 768px) and (max-width: 912px) {
      font-size: 1.5rem;
    }
  }
  .available_jobs h2 {
    font-weight: 600;
    font-size: 1.5rem;
    margin-left: 2rem;
    color: rgba(0, 0, 0, 1);

    @media screen and (max-width: 540px) {
      font-size: 1.2rem;
      width: 100%;
      padding-right: 1rem;
   
      margin-left: 0;
    }
  
  }
  .job__details {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;

    @media screen and (max-width: 540px) {
      font-size: 1.2rem;
      display: block;
     
    }
    @media screen and (min-width: 768px) and (max-width: 912px) {
      font-size: 1.2rem;
      padding: 0 0 0 5rem;
      display: block;
    }
  }
  #job__details__text {
    width: 33.3125rem;

    font-size: 1rem;
    font-weight: 400;
    padding: 1rem;

    @media screen and (max-width: 540px) {
      font-size: 0.7rem;
      width: 100%;
   
    }
    @media screen and (min-width: 768px) and (max-width: 912px) {
      font-size: 1.5rem;
      width: 100%;
      margin-right: 3rem;
      padding: 0 5rem 0 10rem;
    }
  }
  #job__details__price {
   
    font-size: 1.25rem;
  
    padding: 2rem;
    @media screen and (max-width: 540px) {
      font-size: 1rem;
      padding: 0 0 0 1rem;
     
    }
    @media screen and (min-width: 768px) and (max-width: 912px) {
      font-size: 1rem;
      padding: 0 0 0 1rem;
    }
  }
  #price {
    margin-top: 2rem;
    @media screen and (max-width: 540px) {
      font-size: 1rem;
      margin-top: 0;
  
    }
    @media screen and (min-width: 768px) and (max-width: 1000px) {
      font-size: 1rem;
      margin-top: 0.5rem;
    }
  }
`;
export const Socials = styled.div`
  .note {
    margin-top: 2rem;
    font-size: 1rem;
    font-weight: 400;
    width: 58.4375rem;
    padding-left: 3rem;
    text-align: center;

    @media screen and (max-width: 540px) {
      text-align: center;
      padding: 0 3rem 0 3rem;
      font-size: 0.7rem;
      width: 100%;
    }

    @media screen and (min-width: 768px) and (max-width: 912px) {
      text-align: center;
      padding: 0 5rem 0 5rem;
      font-size: 1rem;
      width: 100%;
    }
  }

  .socials__icons ul {
    display: flex;
    justify-content: center;
    margin-bottom: 4rem;

    @media screen and (max-width: 540px) {
      display: flex;
      justify-content: center;
      margin-bottom: 4rem;
    }
  }
  .socials__icons li {
    list-style: none;
    margin-right: 2rem;
    font-size: 1.5rem;
    color: #404040;

    @media screen and (max-width: 540px) {
      font-size: 1rem;
      margin-top: 0.6rem;
    }
    @media screen and (min-width: 768px) and (max-width: 912px) {
      margin-top: 0.6rem;
    }
  }
`;
