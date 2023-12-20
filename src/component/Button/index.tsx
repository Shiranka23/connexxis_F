import { Button, ButtonProps } from "antd";
import React from "react";

interface FilledButtonComponentProps extends ButtonProps {
  className?: string;
  children: React.ReactNode;
}

const FilledButtonComponent: React.FC<FilledButtonComponentProps> = ({ children, className, ...rest }) => {
  return (
    <Button className={className} {...rest}>
      {children}
    </Button>
  );
}

export default FilledButtonComponent;