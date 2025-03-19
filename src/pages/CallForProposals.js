import React from "react";
import styled from "styled-components";

const CFPContainer = styled.div`
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

const CFP = () => {
  return (
    <CFPContainer>
      <Title>Call for Proposals - UCEA 2024</Title>
      
      <Section>
        <SectionTitle>Conference Information</SectionTitle>
        <SectionContent>
          The 38th Annual UCEA Convention will take place November 20–23, 2024, at the Westin Bonaventure Hotel & Suites in Los Angeles, California. This event brings together scholars, practitioners, and policymakers to explore key issues in educational leadership.
        </SectionContent>
      </Section>
      
      <Section>
        <SectionTitle>Submission Guidelines</SectionTitle>
        <SectionContent>
          The submission deadline for proposals has passed. The All Academic system is currently closed for submissions. <br /><br />
          Submitted proposals should align with the conference theme and contribute to advancing research, policy, or practice in educational leadership. 
        </SectionContent>
      </Section>
      
      <Section>
        <SectionTitle>Session Types</SectionTitle>
        <SectionContent>
          Proposals were accepted for a variety of session formats, including individual paper presentations, symposia, innovative sessions, and roundtable discussions.
        </SectionContent>
      </Section>
      
      <Section>
        <SectionTitle>Graduate Student Summit</SectionTitle>
        <SectionContent>
          The UCEA Graduate Student Summit provides an opportunity for emerging scholars to present their research, receive feedback, and engage in mentorship opportunities.
        </SectionContent>
      </Section>
      
    </CFPContainer>
  );
};

export default CFP;