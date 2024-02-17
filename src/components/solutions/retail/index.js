import styled from "styled-components";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import Link from "next/link";
import {breakpoints} from "../../../../styles/theme";


const Retail = () => {
    return (
        <>
            <div>
                <h1
                    style={{
                        textAlign: "center",
                        fontSize: "2.5rem",
                        paddingTop: "2rem",
                        paddingBottom: "2rem"
                    }}

                >Retail</h1>
                <HeaderContainer>
                    <HeaderBody>
                        <h1>Great solution for your</h1>
                        <h2>Business Growth</h2>
                        <span></span>
                        <p>
                            We provide comprehensive IT support services to healthcare
                            organizations, including network maintenance.
                        </p>
                    </HeaderBody>
                    <LinkContainer>
                        <Link href={"/"}>
                            <div>
                                <p>Learn More</p>
                                <MdOutlineKeyboardArrowRight size={30} className="icon"/>
                            </div>
                        </Link>
                    </LinkContainer>
                </HeaderContainer>
                {/* Cards */}

            </div>
        </>
    );
};

export default Retail;

const HeaderContainer = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
  url("/assets/homepage/healthcare/h1.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  height: 350px;
  width: 85%;
  margin: 0 auto;
  padding-top: 2.5rem;

  ${breakpoints.lg} {
    padding-top: 2rem;
  }
`;
const HeaderBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #fff;
    font-size: 25px;
    font-weight: 700;
    padding-top: 3rem;

    ${breakpoints.lg} {
      font-size: 22px;
    }

    ${breakpoints.md} {
      font-size: 18px;
    }
  }

  h2 {
    font-size: 25px;
    font-weight: 700;
    color: #e9000e;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;

    ${breakpoints.lg} {
      font-size: 22px;
    }

    ${breakpoints.md} {
      font-size: 18px;
    }
  }

  p {
    font-size: 16px;
    text-align: center;
    width: 400px;
    min-width: 200px;
    padding: 1rem;
    color: #e9e8e7;

    ${breakpoints.lg} {
      font-size: 14px;
      width: 300px;
    }

    ${breakpoints.md} {
      font-size: 12px;
      padding-bottom: 3rem;
    }
  }

  span {
    width: 100px;
    border-bottom: 5px solid red;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 3rem;

  div {
    display: flex;
    align-items: center;
    gap: 10px;

    p {
      color: #fff;

      ${breakpoints.lg} {
        font-size: 14px;
      }
    }

    .icon {
      color: #fff;
      padding-top: 2px;
      background-color: #e9000e;
      border-radius: 50%;

      ${breakpoints.lg} {
        width: 20px;
        height: 20px;
        padding-top: 0;
      }

      &:hover {
        color: #e9000e;
        background-color: #fff;
        transition: all 0.2s ease-in-out;
      }
    }
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin: 50px 0;
`;
