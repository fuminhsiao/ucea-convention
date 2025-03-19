import React from "react";
import styled from "styled-components";
import heroBanner from "../assets/home-banner.webp"; // Import 本地圖片
import theme from "../assets/theme2.png";
import { useEffect, useState } from "react";

// Home Page Container
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color:rgb(255, 255, 255);
  position: relative;
`;

// Hero Section with Imported Background Image
const HeroSection = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(90deg, rgba(51, 102, 204, 0.3) 11%, rgba(11, 154, 109, 0.6) 91%),
    url(${heroBanner}); 
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
`;

// Hero Text Section
const HeroText = styled.div`
  color: white;
  text-align: left;
  width: 100%;
  max-width: 1080px;
  padding: 20px;
`;

const HeroTitle = styled.h1`
  font-size: 5rem; /* 增大標題字體 */
  font-weight: bold; /* 加粗 */
  margin-bottom: 20px;
  text-transform: uppercase; /* 全大寫，使其更有專業感 */
  letter-spacing: 2px; /* 增加字間距 */
`;

const HeroSubtitle = styled.h4`
  font-size: 2rem; /* 副標題字體增大 */
  font-weight: 300; /* 使其更細 */
  color:rgb(255, 255, 255);
  margin-bottom: 30px;
  font-weight:400;
`;

// Styled Register Button
const RegisterButton = styled.a`
  display: inline-block;
  padding: 15px 40px;
  font-size: 1.5rem;
  font-weight: 500;
  color: white;
  background-color: #3366cc;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  margin-top: 10px;

  &:hover {
    background-color: #0059b3;
  }
`;

// Centered Content Wrapper (max 1080px) - 放在 HeroSection 底部
const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1080px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 2px;
`;

const InfoBlock = styled.div`
  width: 33%;
  height: 150px;
  background-color: rgba(60, 92, 112, 0.9);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.2rem;
  padding: 20px;
`;

//Theme part
const ThemeSection = styled.section`
  max-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 75%;
  margin: 80px auto;
  background:rgb(240, 238, 243);
  border-radius: 40px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ThemeTextContainer = styled.div`
  width: 40%;
  padding: 80px;
  text-align: left;

  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    color:rgb(0, 0, 0);
    font-style: italic; 
    position: relative;
    display: inline-block;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.3rem;
    color: #000;
    line-height: 1.8;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 30px;
  }
`;

const ThemeImageContainer = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px;

  img {
    max-height: 80%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 30px;
  }
`;
// Countdown Timer Section
const CountdownSection = styled.section`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(90deg, #003366, #007a5e);
  color: white;
  font-size: 2rem;
  font-weight: bold;
  padding: 20px;
`;

const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  max-width: 1080px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const CountdownText = styled.div`
  text-align: left;

  small {
    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  h2 {
    font-size: 2.2rem;
    margin-top: 5px;
  }

  h1 {
    font-size: 3rem;
    font-weight: bold;
    line-height:0.5;
    margin: 5px 0;
  }

  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 20px;
  }
`;

const Timer = styled.div`
  display: flex;
  gap: 20px;

  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-transform: uppercase;
  }

  strong {
    font-size: 3rem;
  }

  small {
    font-size: 1rem;
    margin-top: -5px;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

//Contact Section
const ContactSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
`;

const ContactContainer = styled.div`
  width: 100%;
  max-width: 600px;
  background: white;
  padding: 40px;
  border-radius: 10px;
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  color: #004080;
  margin-bottom: 20px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  outline: none;

  &:focus {
    border-color: #004080;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
  resize: none;
  height: 120px;

  &:focus {
    border-color: #004080;
  }
`;

const SubmitButton = styled.button`
  padding: 12px 20px;
  width:150px;
  margin: auto;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #004080;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0059b3;
  }
`;


const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("Nov 19, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <CountdownSection>
      <CountdownContainer>
        <CountdownText>
          <small>REGISTER NOW!</small>
          <h1>CONVENTION</h1>
          <h2>STARTS IN...</h2>
        </CountdownText>
        <Timer>
          <span>
            <strong>{timeLeft.days}</strong>
            <small>DAY(S)</small>
          </span>
          <span>
            <strong>{timeLeft.hours}</strong>
            <small>HOUR(S)</small>
          </span>
          <span>
            <strong>{timeLeft.minutes}</strong>
            <small>MINUTE(S)</small>
          </span>
          <span>
            <strong>{timeLeft.seconds}</strong>
            <small>SECOND(S)</small>
          </span>
        </Timer>
      </CountdownContainer>
    </CountdownSection>
  );
};
const Contact = () => {
  return (
    <ContactSection>
      <ContactContainer>
        <ContactTitle>CONTACT US</ContactTitle>
        <ContactForm>
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <TextArea placeholder="Your Message" required />
          <SubmitButton type="submit">SUBMIT</SubmitButton>
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  );
};
const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroText>
          <HeroTitle>UCEA Annual Convention 2025</HeroTitle>
          <HeroSubtitle>Connecting Minds, Building Futures</HeroSubtitle>
          <RegisterButton href="#register">REGISTER NOW</RegisterButton>
        </HeroText>

        <ContentWrapper>
          <InfoContainer>
            <InfoBlock>
              WHERE: <br />
              Sheraton Puerto Rico Resort and Casino <br />
              San Juan, Puerto Rico
            </InfoBlock>
            <InfoBlock>
              WHEN: <br />
              Nov 19-22, 2025
            </InfoBlock>
            <InfoBlock>
              WHO: <br />
              UCEA Community
            </InfoBlock>
          </InfoContainer>
        </ContentWrapper>
      </HeroSection>
      <ThemeSection>
  <ThemeTextContainer>
    <h2>“Renewing Our Engagement: Leading Schools and Communities with Justice and Joy”</h2>
    <p>
      The 38th annual UCEA Convention will be held November 20–23, 2024 at the
      Westin Bonaventure Hotel & Suites in Los Angeles, California. The purpose of
      the 2024 UCEA Convention is to engage participants in discussions about
      research, policy, practice, and preparation in the field of education with a
      focus on the need for and promise of leading schools and communities with
      justice and joy.
    </p>
    <p>
      The 2024 Convention Planning Committee includes Karen Stansberry Beard (Ohio
      State University), Rebecca Cheung (University of California, Berkeley),
      Matthew Militello (East Carolina University), Nathaniel Stewart (University
      of Minnesota Twin Cities), and Karl Gildner (UCEA Events Manager).
    </p>
  </ThemeTextContainer>

  <ThemeImageContainer>
    <img src={theme} alt="Convention Theme" />
  </ThemeImageContainer>
</ThemeSection>
<CountdownTimer />
<Contact />

    </HomeContainer>
  );
};

export default Home;
