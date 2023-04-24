import styled from "styled-components";
import React, { useState } from "react";
import ReactModal from "react-modal";

const FlexBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
`;

const ModalTester = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <ReactModal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0˝, 0, 0, 0.75)",
          },
          content: {
            borderRadius: "20px",
            top: "20%",
            bottom: "20%",
            left: "20%",
            right: "20%",
          },
        }}
      >
        <FlexBox>
          <h2>Modal heading</h2>
          <button onClick={() => setShowModal(false)}>x</button>
        </FlexBox>
        <p>
          Reprehenderit laboris ea sunt minim pariatur sint enim incididunt et
          elit culpa culpa. Laboris ullamco esse ullamco ex quis qui nulla velit
          commodo. Tempor sunt eu voluptate minim sit commodo anim enim sit.
          Pariatur non culpa excepteur pariatur aute quis magna. Eiusmod eiusmod
          sit ipsum voluptate ipsum sunt eiusmod nostrud eu in.
        </p>
      </ReactModal>
      <button onClick={() => setShowModal(true)}>Show modal</button>
    </div>
  );
};

export default ModalTester;
