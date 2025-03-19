import React from "react";
import styled from "styled-components";

const ProgramContainer = styled.div`
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

const PdfViewer = styled.iframe`
  width: 100%;
  height: 600px;
  border: none;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Program = () => {
  return (
    <ProgramContainer>
      <Title>UCEA 2024 Program</Title>
      
      <Section>
        <SectionTitle>Important Information</SectionTitle>
        <SectionContent>
          The deadline to submit changes for the print program is October 17. Any changes submitted after October 17 will not be included in the print program.
          <br /><br />
          N/A means we do not have your affiliation. Please include university/organization affiliation for all participants. Spell out the university name in full, rather than using acronyms.
          <br /><br />
          Please send change requests to <a href="mailto:convention@ucea.org">convention@ucea.org</a>. Be sure to reference the session number, not the page number.
          <br /><br />
          <strong>Note:</strong> Saturday afternoon presentations and sessions cannot be moved to Thursday or Friday.
        </SectionContent>
      </Section>
      
      <Section>
        <SectionTitle>Program Document</SectionTitle>
        <PdfViewer src="https://www.ucea.org/docs/UCEA_2024_ProgramNov22Web.pdf" title="UCEA 2024 Program PDF" />
      </Section>
    </ProgramContainer>
  );
};

export default Program;