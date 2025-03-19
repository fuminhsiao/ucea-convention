import React from "react";
import styled from "styled-components";

const ExhibitorContainer = styled.div`
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

const ExhibitorImage = styled.img`
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

const Exhibitors = () => {
  return (
    <ExhibitorContainer>
      <Title>Welcome Exhibitors</Title>
      <ExhibitorImage src="https://ucea.org/photos/iStock-1438154054_09252024094123.JPG" alt="Exhibitor Event" />
      
      <Section>
        <SectionTitle>Convention Location</SectionTitle>
        <SectionContent>
          <strong>Westin Bonaventure Hotel and Suites, Los Angeles</strong><br/>
          404 S Figueroa St., Los Angeles, CA 90071 <br/>
          (213) 624-1000 <br/>
          Website
        </SectionContent>
      </Section>
      
      <Section>
        <SectionTitle>Exhibit Hours</SectionTitle>
        <SectionContent>
          <strong>Thursday, November 21:</strong> 12:00 PM – 5:00 PM (set-up begins at 10:00 AM)<br/>
          <strong>Friday, November 22:</strong> 9:00 AM – 5:00 PM<br/>
          <strong>Saturday, November 23:</strong> 9:00 AM – 3:00 PM
        </SectionContent>
      </Section>
      
      <Section>
        <SectionTitle>Expected Attendance</SectionTitle>
        <SectionContent>Between 900-1100</SectionContent>
      </Section>
      
      <Section>
        <SectionTitle>Exhibit Space Location</SectionTitle>
        <SectionContent>Exhibit tables will be set up on the lobby level near the Santa Anita rooms to maximize traffic as attendees go to sessions.</SectionContent>
      </Section>
      
      <Section>
        <SectionTitle>Exhibit Space Cost</SectionTitle>
        <SectionContent>
          $250/table + 3% processing fee for credit card payments.<br/>
          Tables are skirted – there are no booths.<br/>
          Note: UCEA will not provide staffing for any booth and will not set up or take down any booth.
        </SectionContent>
      </Section>
      
      <Section>
        <SectionTitle>Reserve Your Table</SectionTitle>
        <SectionContent>
          You will reserve your booth through the convention registration.
        </SectionContent>
        <ReserveButton href="#">Reserve Your Booth</ReserveButton>
      </Section>
      
      <Section>
        <SectionTitle>Convention Registration</SectionTitle>
        <SectionContent>
          You will receive two complimentary staff registrations with your table(s) purchase. Email us if the person who filled out the form will not be attending on-site and/or if you would like to add a second staff member. We will send you the necessary discount code and instructions.
        </SectionContent>
      </Section>
      
      <Section>
        <SectionTitle>Internet</SectionTitle>
        <SectionContent>Complimentary wireless internet will be available in all meeting spaces.</SectionContent>
      </Section>
      
      <Section>
        <SectionTitle>Security</SectionTitle>
        <SectionContent>UCEA and the hotel cannot guarantee the security of your items and will not be held responsible for any items on the tables.</SectionContent>
      </Section>
      
      <Section>
        <SectionTitle>Shipping</SectionTitle>
        <SectionContent>
          Exhibitors are responsible for the shipping and receiving of all packages to the Westin Bonaventure. UCEA will not accept any packages.
        </SectionContent>
      </Section>
    </ExhibitorContainer>
  );
};

export default Exhibitors;