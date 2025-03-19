import React from "react";
import styled from "styled-components";

const RegistrationContainer = styled.div`
  max-width: 800px;
  margin: 155px auto;
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

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
`;

const TableHeader = styled.th`
  background: #004080;
  color: white;
  padding: 10px;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
`;

const RegisterButton = styled.a`
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

const Registration = () => {
  return (
    <RegistrationContainer>
      <Title>UCEA 2024 Registration</Title>
      
      <Section>
        <SectionTitle>Registration Information</SectionTitle>
        <SectionContent>
          Welcome to UCEA24! All attendees, including presenters, facilitators, graduate students, and general attendees, must register. Graduate students attending the Graduate Student Summit can attend for free.
        </SectionContent>
      </Section>
      
      <Section>
        <SectionTitle>Refund Policy</SectionTitle>
        <SectionContent>
          - Full refunds are available until October 15, 2024.<br/>
          - After October 15, refunds will be evaluated case by case.<br/>
          - Processing fees are non-refundable.
        </SectionContent>
      </Section>
      
      <Section>
        <SectionTitle>Registration Fees</SectionTitle>
        <Table>
          <thead>
            <tr>
              <TableHeader>Category</TableHeader>
              <TableHeader>Early Bird (Until Sept 4)</TableHeader>
              <TableHeader>Standard (Sept 5 - Oct 18)</TableHeader>
              <TableHeader>Late/On-site (Oct 19 - Nov 23)</TableHeader>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableCell>Faculty - UCEA Member</TableCell>
              <TableCell>$265</TableCell>
              <TableCell>$320</TableCell>
              <TableCell>$380</TableCell>
            </tr>
            <tr>
              <TableCell>Faculty - Non-Member</TableCell>
              <TableCell>$325</TableCell>
              <TableCell>$375</TableCell>
              <TableCell>$450</TableCell>
            </tr>
            <tr>
              <TableCell>Graduate Student - UCEA Member</TableCell>
              <TableCell>$95</TableCell>
              <TableCell>$125</TableCell>
              <TableCell>$155</TableCell>
            </tr>
            <tr>
              <TableCell>Graduate Student - Non-Member</TableCell>
              <TableCell>$125</TableCell>
              <TableCell>$155</TableCell>
              <TableCell>$185</TableCell>
            </tr>
          </tbody>
        </Table>
      </Section>
      
      <Section>
        <SectionTitle>Questions & Assistance</SectionTitle>
        <SectionContent>
          If you have any registration-related questions, please contact our support team.
        </SectionContent>
      </Section>
      
      <RegisterButton href="#">REGISTER NOW</RegisterButton>
    </RegistrationContainer>
  );
};

export default Registration;
