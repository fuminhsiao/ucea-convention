import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// 背景區塊（漸層）
const HeaderWrapper = styled.div`
  width: 100%;
  background: linear-gradient(to right, #20407e, #3366cc);
  padding: 300px 0 50px; /* 留出空間給 fixed Navbar */
  display: flex;
  justify-content: center;
`;

// 中央容器
const HeaderContainer = styled.div`
  width: 1080px;
  padding: 0 40px;
  position: relative;
`;

// Breadcrumb 和 Title 共用 wrapper，統一左偏移
const HeaderTextWrapper = styled.div`
  position: relative;
  left: -80px;
  display: flex;
  flex-direction: column;
`;

// Breadcrumb 列
const Breadcrumb = styled.div`
  font-size: 1rem;
  color: white;
  margin-bottom: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;

  a {
    color: white;
    text-decoration: none;
    font-weight: 400;

    &:hover {
      text-decoration: underline;
    }
  }

  span {
    margin: 0 5px;
  }
`;

// 標題
const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 600;
  color: #ffcc33;
  text-align: left;
  margin: 0;
  line-height: 1;
`;

const PageHeader = ({ title, breadcrumb }) => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderTextWrapper>
          <Breadcrumb>
            {breadcrumb.map((item, index) => (
              <React.Fragment key={index}>
                {item.link ? (
                  <Link to={item.link}>{item.label}</Link>
                ) : (
                  <span>{item.label}</span>
                )}
                {index < breadcrumb.length - 1 && <span>/</span>}
              </React.Fragment>
            ))}
          </Breadcrumb>
          <Title>{title}</Title>
        </HeaderTextWrapper>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default PageHeader;
