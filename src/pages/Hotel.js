import React from "react";
import styled from "styled-components";

const HotelContainer = styled.div`
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

const HotelImage = styled.img`
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

const ReserveButton = styled.a`
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

const Hotel = () => {
  return (
    <HotelContainer>
      <Title>Westin Bonaventure Hotel and Suites, Los Angeles</Title>
      <HotelImage src="https://ucea.org/photos/westinhotel-exterior_05082024113915.JPG" alt="Westin Bonaventure Hotel" />
      
      <Section>
        <SectionTitle>Guest Room Rates</SectionTitle>
        <SectionContent>
          <strong>Single/Double:</strong> $185.00 + tax<br/>
          Rooms available at group rate from November 14 through November 27.
        </SectionContent>
      </Section>
      
      <Section>
        <SectionTitle>Booking Information</SectionTitle>
        <SectionContent>
          The 2024 UCEA Annual Convention host hotel is the Westin Bonaventure Hotel and Suites, Los Angeles. We encourage you to make your reservation early as rooms sell quickly. All reservations must be made by Monday, October 28, 2024, to receive the rates listed above.
        </SectionContent>
      </Section>
      
      <Section>
        <SectionTitle>How to Reserve</SectionTitle>
        <SectionContent>
          Reserve your room online or by calling (213) 624-1000.<br/>
          Mention that you are with the UCEA Annual Convention when booking by phone.
        </SectionContent>
      </Section>
      
      <ReserveButton href="#">RESERVE NOW</ReserveButton>
    </HotelContainer>
  );
};

export default Hotel;