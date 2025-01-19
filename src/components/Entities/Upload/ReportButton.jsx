// components/ReportButton.js
import React, { useState } from "react";
import { Button, DatePicker, Modal } from "antd";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";

const { RangePicker } = DatePicker;

const ReportButton = ({ onReportGenerated }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [dateRange, setDateRange] = useState([]);
  const [loading, setLoading] = useState(false);

  // Открытие модального окна
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Закрытие модального окна
  const handleCancel = () => {
    setIsModalVisible(false);
    setDateRange([]);
  };

  // Обработка выбора даты
  const handleDateChange = (dates) => {
    setDateRange(dates);
  };

  // Получение данных для отчета
  const fetchReportData = async () => {
    if (!dateRange || dateRange.length !== 2) {
      alert("Выберите корректный интервал дат.");
      return;
    }

    setLoading(true);
    try {
      const [startDate, endDate] = dateRange;
      const response = await axios.get(`/api/upload/report/`, {
        params: {
          fdate: startDate.format("YYYY-MM-DD"),
          sdate: endDate.format("YYYY-MM-DD"),
        },
      });
      onReportGenerated(response.data); // Передаем данные в родительский компонент
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    } finally {
      setLoading(false);
      setIsModalVisible(false); // Закрываем модальное окно после получения данных
    }
  };

  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        style={{ marginBottom: 16, width: 200 }}
      >
        Сформировать отчет
      </Button>

      <Modal
        title="Выберите интервал дат"
        open={isModalVisible}
        onOk={fetchReportData}
        onCancel={handleCancel}
        okText="Сформировать"
        cancelText="Отмена"
        confirmLoading={loading}
      >
        <RangePicker onChange={handleDateChange} />
      </Modal>
    </>
  );
};

export default ReportButton;
