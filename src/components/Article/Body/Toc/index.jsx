import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

import useScroll from "hooks/useScroll";
import getElementOffset from "utils/getElmentOffset";
import RevealOnScroll from "components/RevealOnScroll";

const STICK_OFFSET = 100;

const TocWrapper = styled.div`
  position: absolute;
  opacity: 1;
  left: 100%;

  & > div {
    padding-right: 20px;
    padding-left: 16px;
    margin-left: 48px;
    position: relative;
    width: 240px;
    max-height: calc(100% - 185px);
    overflow-y: auto;

    ::-webkit-scrollbar {
      width: 3px;
    }
    ::-webkit-scrollbar-track {
      background: ${(props) => props.theme.colors.scrollTrack};
    }

    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.colors.scrollHandle};
    }

    ${(props) =>
      props.stick &&
      css`
        position: fixed;
        top: ${STICK_OFFSET}px;
      `}
  }

  @media (max-width: 1300px) {
    display: none;
  }
`;

const ParagraphTitle = styled.div`
  margin-bottom: 8px;
  padding-left: ${(props) => (props.subtitle ? 19.2 : 0)}px;
  font-size: 14.4px;
  color: ${(props) => props.theme.colors.mutedText};
  line-height: 1.3;
  transition: all 0.2s;

  ${(props) =>
    props.active &&
    css`
      transform: translate(-10px, 0);
      color: ${(props) => props.theme.colors.secondaryText};
    `}

  &:hover {
    color: ${(props) => props.theme.colors.text};
    cursor: pointer;
  }
`;

const Toc = ({ items, articleOffset }) => {
  const { y } = useScroll();

  const [revealAt, setRevealAt] = useState(4000);
  const [headers, setHeaders] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const bioElm = document.getElementById("bio");
    if (bioElm) {
      const bioOffset = getElementOffset(bioElm);
      const bioHeight = bioElm.getBoundingClientRect().height;
      setRevealAt(bioOffset.top - bioHeight);
    } else {
      console.warn("Bio element not found.");
      setRevealAt(0);
    }
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll("#article-body > h2, #article-body > h3");
    const headerOffsets = [...elements].map((element) => {
      return element ? getElementOffset(element).top : 0;
    });
    setHeaders(headerOffsets);
  }, []);

  useEffect(() => {
    headers.forEach((header, i) => {
      if (header < y + 1) {
        setActive(i);
      }
    });
  }, [y, headers]);

  const handleClickTitle = (item) => {
    window.location.hash = null;
    window.location.hash = item.id;
  };

  return (
    <RevealOnScroll revealAt={revealAt} reverse>
      <TocWrapper stick={y > articleOffset - STICK_OFFSET}>
        <div>
          {items.map((item, i) => (
            <ParagraphTitle
              key={i}
              subtitle={item.tagName === "H3"}
              active={i === active}
              onClick={() => handleClickTitle(item)}
            >
              {item.innerText}
            </ParagraphTitle>
          ))}
        </div>
      </TocWrapper>
    </RevealOnScroll>
  );
};

export default Toc;