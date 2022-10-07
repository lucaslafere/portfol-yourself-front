import styled from "styled-components";

const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #fff;
  width: 100%;
  padding: 16px;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  border: 1px solid #fafafa;
  position: absolute;
  align-self: flex-end;
  bottom: 0;
  z-index: 2;
  
  p {
    color: rgba(0, 0, 0, 0.87);
  font-size: 1rem;
  font-weight: 400;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  }
`;

const ClickableIcon = styled.div`
  font-size: 1.5rem;
  color: red;
  
`;

export { Modal, ClickableIcon };
