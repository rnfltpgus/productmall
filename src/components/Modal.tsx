import React from 'react';

import styled from '@emotion/styled';

interface ModalStyleProps {
  visible: boolean;
}

type ModalProps = {
  className: string;
  visible: boolean;
  children: React.ReactNode;
};

const Modal = ({ className, visible, children }: ModalProps) => {
  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper className={className} visible={visible}>
        <ModalInner className="modal-inner">{children}</ModalInner>
      </ModalWrapper>
    </>
  );
};

export default Modal;

const ModalWrapper = styled.div<ModalStyleProps>`
  box-sizing: border-box;
  display: ${props => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div<ModalStyleProps>`
  box-sizing: border-box;
  display: ${props => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  max-width: 27rem;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 1rem;
`;
