import React from "react";
import { Modal, Button } from "react-bootstrap";

type PopupProps = {
  show: boolean;
  onHide: () => void;
  onClick: () => void;
  title: string;
  msg: string;
};

const Popup: React.FC<PopupProps> = ({ show, onHide, onClick, title, msg }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title style={{ fontWeight: 600 }}>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">{msg}</Modal.Body>
      <Modal.Footer style={{ margin: "0 auto" }}>
        <Button
          style={{ color: "black", backgroundColor: "#EFEFEF" }}
          className="btn btn-light"
          onClick={onClick}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Popup;
