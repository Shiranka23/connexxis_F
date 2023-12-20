import React from 'react';
import { Col, Select, Space } from 'antd';

interface Option {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectInputFieldProps {
  defaultValue?: string;
  options: Option[];
  onChange: (value: string) => void;
}

const SelectInputField: React.FC<SelectInputFieldProps> = ({ defaultValue, options, onChange }) => (
  <>
  <Col className="filters">
    <Select
      defaultValue={defaultValue}
      style={{ width: 120 }}
      onChange={onChange}
      options={options}
      popupClassName="customSelectArrow"
    />
    </Col>
  </>
);

export default SelectInputField;
