import React from 'react';
import { Heading, StyledSidebar, StyledHeader } from './Commons';
import styled from 'styled-components';

const Page = (props) => {
  return (
    <div className={props.className}>
      <div
        style={{
          gridColumn: '1 / 3',
          gridRow: '1',
          position: 'sticky',
          top: '1em',
          left: '0',
          padding: '0 1em',
        }}
      >
        <StyledHeader />
      </div>
      <div style={{ gridColumn: 1, gridRow: 2 }}>
        <StyledSidebar />
      </div>
      <div style={{ gridColumn: 2, gridRow: 2, overflow: 'scroll' }}>
        <Heading heading={props.contentHeading} />
        <props.Content />
      </div>
    </div>
  );
};

export const StyledPage = styled(Page)`
  display: grid;
  grid-template-columns: 2fr 10fr;
  grid-template-rows: 1fr 12fr;
  height: 100%;
  width: 100%;
  padding: 1em;
  fontsize: 15px;
`;
