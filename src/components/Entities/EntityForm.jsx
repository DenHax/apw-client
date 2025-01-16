import React from "react";
import Modal from "../UI/Modal";

const EntityForm = ({ isOpen, onClose, onSubmit, entity }) => {
  const [formData, setFormData] = React.useState(entity || {});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <div key={key}>
            <label>{key}</label>
            <input
              type="text"
              name={key}
              value={formData[key]}
              onChange={handleChange}
            />
          </div>
        ))}
        <button type="submit">Сохранить</button>
      </form>
    </Modal>
  );
};

export default EntityForm;
