import { Select } from "antd";
import { Form } from "antd";
import { Option } from "antd/es/mentions";

const SelectField = ({ name, label, rules, options, onChange }) => {
  return (
    <Form.Item name={name} label={label} rules={rules}>
      <Select onChange={onChange}>
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default SelectField;
