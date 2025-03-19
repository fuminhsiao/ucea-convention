import React from "react";
import styled from "styled-components";

const FAQContainer = styled.div`
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

const Section = styled.div`
  margin-bottom: 30px;
  text-align: left;
`;

const Question = styled.h2`
  font-size: 1.8rem;
  color: #004080;
  margin-bottom: 10px;
`;

const Answer = styled.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.6;
`;

const PDFButton = styled.a`
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

const FAQs = () => {
  return (
    <FAQContainer>
      <Title>Frequently Asked Questions</Title>
      
      <Section>
        <Question>What is the Convention mobile app?</Question>
        <Answer>
          Our Whova Convention mobile app will be ready by Nov. 7 and can be accessed in web or mobile form. Features:
          <ul>
            <li>Communicate with other attendees</li>
            <li>View the agenda / create your agenda</li>
            <li>Livestream general sessions</li>
            <li>Important announcements</li>
            <li>Meet-ups and social groups</li>
            <li>Social wall</li>
          </ul>
        </Answer>
      </Section>
      
      <Section>
        <Question>Do I need to register?</Question>
        <Answer>
          Yes. All presenters and attendees must register to attend #UCEA24. Registration is available in advance and at the event on Level 2 near the San Diego Ballroom.
        </Answer>
      </Section>
      
      <Section>
        <Question>Can I still purchase tickets to the Awards Luncheon and Annual Banquet?</Question>
        <Answer>
          Yes. Tickets for both events are still available. Award recipients receive complimentary tickets. Ticket sales will end Friday, Nov. 15 for the luncheon and Thursday, Nov. 21 for the banquet or until sold out. Email us if you have already registered and would like to purchase tickets.
        </Answer>
      </Section>
      
      <Section>
        <Question>Where do I upload my final paper? When is it due?</Question>
        <Answer>
          Visit All Academic and follow the instructions to upload your final paper by November 1.
        </Answer>
      </Section>
      
      <Section>
        <Question>How do I view uploaded papers in All Academic?</Question>
        <Answer>
          Visit All Academic, search for the session, click the specific paper, and click the Download button. If there is no Download button available, the author(s) have not uploaded a final paper.
        </Answer>
      </Section>
      
      <Section>
        <Question>Where do I go to register when I arrive at the Westin Bonaventure?</Question>
        <Answer>
          UCEA registration area will be on Level 2 near the San Diego Ballroom. Proceed to the UCEA registration desk.
        </Answer>
      </Section>
      
      <Section>
        <Question>What are Registration Desk hours?</Question>
        <Answer>
          <ul>
            <li>Wed. Nov. 20: 11:00 am–5:00 pm</li>
            <li>Thurs. Nov. 21: 7:30 am–5:30 pm</li>
            <li>Fri. Nov. 22: 7:30 am–5:30 pm</li>
            <li>Sat. Nov. 23: 7:30 am-1:00 pm</li>
          </ul>
        </Answer>
      </Section>
      
      <Section>
        <Question>Where are the special accommodation rooms located this year?</Question>
        <Answer>
          <ul>
            <li><strong>Lactation Room:</strong> The Westin has a dedicated lactation room on the Lobby Level</li>
            <li><strong>Meditation Room:</strong> Mt. Washington (Level 2)</li>
            <li><strong>Ombudsperson Office:</strong> Silver Lake Room (Level 2)</li>
          </ul>
        </Answer>
      </Section>
      
      <PDFButton href="#">Download Full FAQs</PDFButton>
    </FAQContainer>
  );
};

export default FAQs;
