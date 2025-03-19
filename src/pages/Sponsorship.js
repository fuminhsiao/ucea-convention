import React from "react";
import styled from "styled-components";

const SponsorshipContainer = styled.div`
  max-width: 1200px;
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

const SponsorshipImage = styled.img`
  width: 100%;
  border-radius: 10px;
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

const ExploreButton = styled.a`
  display: inline-block;
  padding: 15px 30px;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  background-color: #004080;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  margin-top: 20px;

  &:hover {
    background-color: #0059b3;
  }
`;

const Sponsorship = () => {
  return (
    <SponsorshipContainer>
      <Title>Sponsorship Opportunities</Title>
      <SponsorshipImage src="https://ucea.org/photos/9642228_09172024150156.JPG" alt="Sponsorship Event" />
      
      <Section>
        <SectionTitle>Customizable Sponsorship Packages</SectionTitle>
        <SectionContent>
          We are thrilled to offer a variety of sponsorship levels and specific opportunities tailored to meet your interests.
          You can choose from our options to design a customizable package or contact us directly, and we’ll work with you to develop a package that aligns with your goals and budget.
        </SectionContent>
      </Section>
      
      <Section>
        <SectionTitle>Sponsorship Benefits</SectionTitle>
        <SectionContent>
          When you select specific sponsorships, you’ll also enjoy the benefits of the corresponding sponsorship level, based on the total value of the selected sponsorships.
          For instance, if you sponsor the Plenum and Graduate Student Reception, Graduate Student Promotional Item, and a Coffee Break, you will receive Gold Level benefits.
        </SectionContent>
      </Section>
      
      <Section>
        <SectionTitle>Get in Touch</SectionTitle>
        <SectionContent>
          Email us with any questions or to set up custom sponsorships.
        </SectionContent>
      </Section>
      
      <ExploreButton href="#">Explore Sponsorship Opportunities</ExploreButton>
    </SponsorshipContainer>
  );
};

export default Sponsorship;