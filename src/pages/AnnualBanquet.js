import React from "react";
import styled from "styled-components";

const BanquetContainer = styled.div`
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

const ImageGallery = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 250px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Banquet = () => {
  return (
    <BanquetContainer>
      <Title>Annual Banquet</Title>
      
      <Section>
        <SectionTitle>Banquet Theme</SectionTitle>
        <SectionContent>
          <strong>A Walk Among the Stars Sneaker Ball</strong><br/>
          Shine in Sneakers and Shades<br/><br/>
          What is a sneaker ball? A sneaker ball is your opportunity to break out your sparkly and shiny attire to wear with comfortable shoes like sneakers.
        </SectionContent>
      </Section>
      
      <Section>
        <SectionTitle>Event Details</SectionTitle>
        <SectionContent>
          The 2024 Annual Banquet is Saturday, November 23, 7:00 to 10:30 p.m. at Universal Studios. Explore Hollywood’s most famous backlot with a private group tour. Following the tour, dinner and entertainment will be provided at Antojitos Cocina Mexicana at Universal City Walk.
          <br/><br/>
          Motor coach transportation will begin boarding at the Westin Bonaventure around 6:00 p.m.
        </SectionContent>
      </Section>
      
      <Section>
        <SectionTitle>How to Attend</SectionTitle>
        <SectionContent>
          If you have already registered for the convention and would like to purchase a ticket to the Annual Banquet, please email us.
        </SectionContent>
      </Section>
      
      <ImageGallery>
        <Image src="https://ucea.org/photos/Antojitos_Exterior_Night_11042024135356.JPG" alt="Antojitos Exterior Night" />
        <Image src="https://ucea.org/photos/Studio_Tour_Loading_11042024140229.JPG" alt="Studio Tour Loading" />
        <Image src="https://ucea.org/photos/StudioTour_New_York_Streets_11042024140300.JPG" alt="Studio Tour New York Streets" />
      </ImageGallery>
      
    </BanquetContainer>
  );
};

export default Banquet;