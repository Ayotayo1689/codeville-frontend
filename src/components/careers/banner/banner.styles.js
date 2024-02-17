import styled from "styled-components";



export const BannerImage = styled.div`
  background-image: url("/assets/careerAssets/careerBanner.png");
  width: 100%;
  height: 15rem;
  background-repeat: no-repeat;
  background-size: cover;

  .banner-img {
    position: relative;
    display: flex;
    color: white;

    > img {
      position: absolute;
      bottom: -75px;
      left: 0;
    }

    > div {
      width: 80%;
      margin: auto;
    }
  }

  .banner-img h1 {
    margin-top: 7rem;
    font-size: 4rem;
  }
  @media screen and (max-width: 912px) {
    .heading {
      font-size: 40px;
    }
  }
  .half_shape {
    color: rgba(255, 255, 255, 0.8);
    opacity: 0.5;
    font-size: 1rem;
    margin-top: 7rem;
  }
`;
