import React, { useState } from "react";
import EntityTable from "../components/Entities/EntityTable";
import EntityForm from "../components/Entities/EntityForm";
import Button from "../components/UI/Button";
import useFetchData from "../hooks/useFetchData";

const EntityPage = ({ url }) => {
  const { data, loading, error } = useFetchData(url);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEntity, setSelectedEntity] = useState(null);

  const handleAdd = () => {
    setSelectedEntity(null);
    setIsModalOpen(true);
  };

  const handleEdit = (entity) => {
    setSelectedEntity(entity);
    setIsModalOpen(true);
  };

  const handleDelete = (entity) => {
    // Логика удаления
  };

  const handleSubmit = (formData) => {
    // Логика сохранения
  };

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error.message}</p>;

  return (
    <div>
      <h1>Сущность</h1>
      <Button onClick={handleAdd}>Добавить</Button>
      <EntityTable data={data} onEdit={handleEdit} onDelete={handleDelete} />
      <EntityForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        entity={selectedEntity}
      />
    </div>
  );
};

export default EntityPage;
