import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const FrameBox = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: ${p => p.justifyContent || 'center'};
`;

const ContentsBox = styled.div`
  position: absolute;
  z-index: 95;
`;

const ButtonBase = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
  width: 30%;
  z-index: 101;
  background-color: rgb(200, 200, 200, 0.3);
  border: none;
  opacity: 0;
  cursor: pointer;
  &:hover {
    opacity: 0.3;
  }
`;

const RightButton = styled(ButtonBase)`
  margin-left: auto;
  &:before {
    font-size: 3em;
    content: '>';
  }
`;

const LeftButton = styled(ButtonBase)`
  margin-right: auto;
  &:before {
    font-size: 3em;
    content: '<';
  }
`;

const Frame = React.forwardRef(
  ({ id, justifyContent, children, disableLeft, disableRight }, ref) => {
    const forwardedRef = ref || React.createRef();
    const scrollPrev = () =>
      window.scroll({
        top: window.scrollY - window.innerHeight,
        behavior: 'smooth',
      });
    const scrollNext = () =>
      window.scroll({
        top: window.scrollY + window.innerHeight,
        behavior: 'smooth',
      });

    return (
      <FrameBox id={id} justifyContent={justifyContent} ref={forwardedRef}>
        <ContentsBox>{children}</ContentsBox>
        {!disableLeft && <LeftButton onClick={scrollPrev} />}
        {!disableRight && <RightButton onClick={scrollNext} />}
      </FrameBox>
    );
  },
);

Frame.propTypes = {
  disableLeft: PropTypes.bool,
  disableRight: PropTypes.bool,
  children: PropTypes.node,
  justifyContent: PropTypes.string,
  id: PropTypes.string,
};

export default Frame;
