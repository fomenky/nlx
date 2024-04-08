import React, { useState } from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import stepBulding from "@/assets/stepBulding.svg";
import sendMessage from "@/assets/sendMessage.svg";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Popup from "@/utils/Popup";

const ContactUs = () => {
  const formControlStyle = {
    border: "none",
    borderBottom: "1px solid #D5D5D5",
    borderRadius: "0",
    marginBottom: "2rem",
    boxShadow: "none",
  };

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setFormErrors({
      name: "",
      email: "",
      message: "",
    });
  };

  const validateForm = () => {
    const errors = {
      name: formData.name.trim() === "" ? "Full Name is required" : "",
      email:
        formData.email.trim() === ""
          ? "Email is required"
          : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
          ? "Incorrect email format"
          : "",
      message: formData.message.trim() === "" ? "Message is required" : "",
    };

    setFormErrors(errors);

    return Object.values(errors).every((error) => error === "");
  };

  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async () => {
    if (!validateForm()) {
      return;
    }
    try {
      await axios.post(
        `https://dlt7vckjvtg3qzxe27hssf23340fglzu.lambda-url.us-east-1.on.aws/`,
        formData
      );
      resetForm();
      setShowSuccessModal(true);
      setIsSubmitSuccess(true);
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
      setShowSuccessModal(true);
      setIsSubmitSuccess(false);
    }
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <section className="bg-white" id="contactUsSection">
      <Container className="container-contact-us">
        <Row>
          <Col md={6}>
            <div className="custom-title-contact-us">Contact Us</div>
            <div className="custom-description-contact-us">
              Working something cool? Great, we want to help! <br /> Send a
              message.
            </div>
            <Image src={stepBulding} alt="" width="285" height="325" />
          </Col>

          <Col md={6}>
            <div className="my-4 mt-5">
              <Col className="mb-3">
                <Form.Control
                  style={formControlStyle}
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Full Name"
                  onChange={handleInputChange}
                />

                {formErrors.name && (
                  <div style={{ color: "red" }}>{formErrors.name}</div>
                )}
              </Col>

              <Col className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  style={formControlStyle}
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Email"
                  onChange={handleInputChange}
                />
                {formErrors.email && (
                  <p style={{ color: "red" }}>{formErrors.email}</p>
                )}
              </Col>

              <Col className="mb-3" controlId="formBasicMessage">
                <Form.Control
                  style={formControlStyle}
                  as="textarea"
                  rows={3}
                  name="message"
                  value={formData.message}
                  placeholder="Message"
                  onChange={handleInputChange}
                />
                {formErrors.message && (
                  <div style={{ color: "red" }}>{formErrors.message}</div>
                )}
              </Col>

              <Button className="button-contact-us" onClick={handleFormSubmit}>
                <Image src={sendMessage} alt="" width="150" />
              </Button>
            </div>
          </Col>
        </Row>

        <Popup
          title={isSubmitSuccess ? "Sending success" : "Failed to send"}
          msg={
            isSubmitSuccess
              ? "Your message has been sent successfully. We will contact you !"
              : "Your message could not be sent. Try again later !"
          }
          onClick={handleCloseSuccessModal}
          onHide={handleCloseSuccessModal}
          show={showSuccessModal}
        />
      </Container>
    </section>
  );
};

export default ContactUs;
