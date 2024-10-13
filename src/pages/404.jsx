import React from "react";
import styled from "styled-components";
import Layout from "components/Layout";
import SEO from "components/SEO";

const NotFound = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.tertiaryText};
  text-align: center;

  & > h2 {
    margin-bottom: 16px;
    font-weight: bold;
    font-size: 48px;
  }

  & > h3 {
    font-weight: lighter;
    font-size: 30.4px;
  }

  @media (max-width: 768px) {
    min-height: 300px;
    & > h2 {
      font-size: 36px;
    }
    & > h3 {
      font-size: 24px;
    }
  }
`;

const NotFoundPage = () => (
  <Layout>
      <SEO 
      title="404: Page Not Found" 
      description="This page does not exist." 
      url={process.env.SITE_URL || "http://localhost:8000"} 
      />
    <NotFound>
      <h2>404 ERROR</h2>
      <h3>Page Not Found X</h3>
    </NotFound>
  </Layout>
);

export default NotFoundPage;