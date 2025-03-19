import React from "react";
import styled from "styled-components";

const GeneralSessionsContainer = styled.div`
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

const GeneralSessions = () => {
  return (
    <GeneralSessionsContainer>
      <Title>General Sessions</Title>
      
      <Section>
        <SectionTitle>Mitstifer Lecture (Sponsored by Penn State University)</SectionTitle>
        <SectionContent>
          <strong>From Research to Practice: Using Afrofuturist Development Theory to Design for Justice and Joy in Schools</strong><br/>
          <em>Thursday, 11/21 | 1:45 PM – 3:15 PM</em><br/>
          <strong>Location:</strong> Sacramento/San Francisco Ballroom<br/><br/>
          <strong>Speaker:</strong> Brendesha Tynes, University of Southern California
        </SectionContent>
      </Section>
      
      <Section>
        <SectionTitle>General Session II</SectionTitle>
        <SectionContent>
          <strong>Leading What Works: Positive Schooling Strategies to Engage Students, Faculty, and Administrators in Deep Learning and Wellbeing While Sustaining Joy</strong><br/>
          <em>Friday, 11/22 | 9:20 AM – 10:30 AM</em><br/>
          <strong>Location:</strong> Sacramento/San Francisco Ballroom<br/><br/>
          <strong>Panelists:</strong> Pedro Noguera (University of Southern California), Adam Clark (Mt. Diablo School District), Francisco Escobedo (NCUST), Marco Nava (Los Angeles Unified School District), Pamela Maddox (Compton Early College High School & Willowbrook Middle School)<br/>
          <strong>Moderator:</strong> Rebecca Cheung, University of California, Berkeley<br/><br/>
          The panel will focus on equity and excellence as we consider bringing about better quality of life outcomes for students of color. Essentially, panelists will be asked to discuss what works in administration research and practice: Using Positive Psychology and Positive Schooling Strategies to realize the joy in student, faculty, and administrator success given our contemporary challenges. This will be considered through a K-12 and Higher Ed lens inclusive of notions of belonging, Wellbeing, and Deep learning strategies.
        </SectionContent>
      </Section>
    </GeneralSessionsContainer>
  );
};

export default GeneralSessions;
