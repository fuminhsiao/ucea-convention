import styled from "styled-components";
import logo from "../assets/UCEALOGO.png"; // 引入 logo 圖片

// Styled Components
const FooterContainer = styled.footer`
  background-color: #f4f4f4;
  padding: 30px 40px;
  width: 100%;
  border-top: 2px solid #ccc;
  margin-top: auto;
  font-family: Arial, sans-serif;
`;

const FooterContent = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  img {
    height: 60px;
    margin-bottom: 8px;
  }

  p {
    font-size: 1rem;
    color: #004080;
    margin: 5px 0;
  }
`;

const FooterRight = styled.div`
  text-align: right;
  font-size: 1rem;
  color: #004080;
  line-height: normal;
  p {
    font-size: 1rem;
    color: #004080;
    margin: 0;
  }

  @media (max-width: 768px) {
    text-align: left;
    margin-top: 15px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        {/* 左邊 Logo + Powered by UCEA */}
        <FooterLeft>
          <a href="https://convention@ucea.org/" target="_blank" rel="noopener noreferrer">
            <img src={logo} alt="UCEA Logo" />
          </a>
          
        </FooterLeft>

        {/* 右邊聯繫信息 */}
        <FooterRight>
          <p><strong>Michigan State University</strong></p>
          <p>College of Education</p>
          <p>620 Farm Lane</p>
          <p>431 Erickson Hall</p>
          <p>East Lansing, MI 48824</p>
          <br />
          <p>Convention Email: <a href="mailto:convention@ucea.org">convention@ucea.org</a></p>
        </FooterRight>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
