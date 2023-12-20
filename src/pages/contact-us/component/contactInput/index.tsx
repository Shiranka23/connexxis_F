import { Col, Input, InputProps } from "antd";
import React from "react";

interface ContactInputComponentProps extends InputProps {
  title?: string;
  className?: string;
  placeholder?: string;
  type?: "text" | "password"; // Add the type prop for input type selection
}

function ContactInputComponent({ title, className, placeholder, type = "text", ...rest }: ContactInputComponentProps) {
  return (
    <>
      {title && <label>{title}</label>}
      <Input type={type} placeholder={placeholder} className={className} {...rest} />
    </>
  );
}

export default ContactInputComponent;
