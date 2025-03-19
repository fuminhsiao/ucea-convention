import React from "react";
import styled from "styled-components";

const PresenterTipsContainer = styled.div`
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

const PdfViewer = styled.iframe`
  width: 100%;
  height: 600px;
  border: none;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const PresenterTips = () => {
  return (
    <PresenterTipsContainer>
      <Title>Presenter & Facilitator Tips</Title>
      
      <Section>
        <SectionTitle>Roundtable Presenter Tips</SectionTitle>
        <PdfViewer src="https://www.ucea.org/docs/2024_UCEA_Roundtable_Presenter_Instructions1.pdf" title="Roundtable Presenter Tips" />
      </Section>
      
      <Section>
        <SectionTitle>Paper Presenter Tips</SectionTitle>
        <PdfViewer src="https://www.ucea.org/docs/2024_UCEA_Roundtable_Presenter_Instructions1.pdf" title="Paper Presenter Tips" />
      </Section>
      
      <Section>
        <SectionTitle>Facilitator Role</SectionTitle>
        <PdfViewer src="https://www.ucea.org/docs/2024_UCEA_Roundtable_Presenter_Instructions1.pdf" title="Facilitator Role" />
      </Section>
      
    </PresenterTipsContainer>
  );
};

export default PresenterTips;
