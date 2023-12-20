import React, { useState } from 'react';
import styles from "../../search.module.css"
import { Cascader, Col, Input, Select, Space } from 'antd';
import { SVG } from '@/assest/svg';

const { Option } = Select;

const selectBefore = (
  <Select defaultValue="For Sale: Apartment">
    <Option value="For Sale: Apartment">For Sale: Apartment</Option>
    <Option value="For Sale: ">For Sale: Apartment</Option>
  </Select>
);

const DropDownInput = () => {
  const [inputValue, setInputValue] = useState(''); // Initial value
  const [isStateTrue, setIsStateTrue] = useState(false);

  const handleInputChange = (event: { target: { value: any; }; }) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    setIsStateTrue(newValue === 'true');
  };

  const clearInput = () => {
    setInputValue('');
    setIsStateTrue(false);
  };

  return (
    <>
      <Col className="searchList" style={{ position: "relative" }}>
        <SVG.Vector className={`${styles.vector}`} />
        <Input
          addonBefore={selectBefore}
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Pittsburgh, PA"
        />
        {inputValue && <SVG.Close className={`${styles.closeSvg}`} onClick={clearInput} />}
      </Col>
    </>
  );
};

export default DropDownInput;
