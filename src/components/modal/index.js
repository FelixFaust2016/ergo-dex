import { Tint, ModalContainer } from "./style";

export const Modal = ({ width, closeModal, children, ...restProps }) => {
  return (
    <>
      <Tint onClick={closeModal} />
      <ModalContainer width={width} {...restProps}>
        {children}
      </ModalContainer>
    </>
  );
};
