import React from "react";
import styled from "styled-components";

const LuncheonContainer = styled.div`
  max-width: 800px;
  margin: 155px auto 80px;
  padding: 40px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #004080;
  margin-bottom: 20px;
`;

const Section = styled.div`
  margin-bottom: 30px;
  text-align: left;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #004080;
  margin-bottom: 15px;
`;

const SectionContent = styled.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.6;
`;

const AwardLuncheon = () => {
  return (
    <LuncheonContainer>
      <Title>UCEA 2024 Awards Luncheon</Title>
      
      <Section>
        <SectionTitle>Event Summary</SectionTitle>
        <SectionContent>
          The UCEA community celebrated its 2024 UCEA Awards recipients at its annual Awards Luncheon on Thursday, November 21.
          Many thanks to emcees Michael O’Malley and Carrie Sampson for making the luncheon such a special event!
        </SectionContent>
      </Section>
    </LuncheonContainer>
  );
};

export default AwardLuncheon;