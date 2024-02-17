import styled from "styled-components";
import React, {useState} from "react";
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from "react-icons/md";
import {breakpoints} from "../../../styles/theme";
import Image from "next/image";

const Technologies = ({tech}) => {
    const [showAll, setShowAll] = useState(false);
    const maxItemsToShow = 10;
    const toggleShowAll = () => {
        setShowAll(!showAll);
    };
    return (
        <Container>
            <Text>Technologies</Text>
            <Text2>
                <span>Technologies</span> we work with
            </Text2>
            <ImageContainer>
                {tech.slice(0, showAll ? tech.length : maxItemsToShow).map((stack) => (
                    <ImageWrapper key={stack.id}>
                        <Image src={stack.logos} alt={stack.name} width={80} height={50}/>
                    </ImageWrapper>
                ))}
            </ImageContainer>
            {tech.length > maxItemsToShow && (
                <ViewMoreButton onClick={toggleShowAll}>
                    {showAll ? (
                        <>
                            Show Less <MdKeyboardArrowUp size={30} className="icon"/>
                        </>
                    ) : (
                        <>
                            View More <MdKeyboardArrowDown size={30} className="icon"/>
                        </>
                    )}
                </ViewMoreButton>
            )}
        </Container>
    );
};
export default Technologies;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;
const Text = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: #636363;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
const Text2 = styled.p`
  text-align: center;
  font-size: 26px;
  font-weight: 600;
  color: #444444;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 22px;
  }
  ${breakpoints.sm} {
    font-size: 20px;
    span {
      color: #ff0000;
    }
  }
`;
const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const ViewMoreButton = styled.button`
  color: #b60e09;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 22px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  margin-top: 1rem;
  .icon {
    padding-top: 5px;
  }
  &:hover {
    opacity: 0.6;
  }
`;
const ImageWrapper = styled.div`
  flex: 0 0 calc(100% / 6);
  margin-right: 10px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 0.6rem;
  @media (max-width: 992px) {
    flex: 0 0 calc(100% / 4);
  }
  @media (max-width: 768px) {
    flex: 0 0 calc(100% / 5);
  }
  @media (max-width: 576px) {
    flex: 0 0 calc(100% / 4);
  }
`;
