// components/ReportTable.js
import React from "react";
import { Table, Button } from "antd";
import jsPDF from "jspdf";
import "jspdf-autotable";

const ReportTable = ({ reportData }) => {
  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Отчет по загрузкам ТВЭЛов", 14, 22);

    const tableData = reportData.map((item) => [
      item.employee_full_name,
      item.subsystem_id,
      item.load_count,
      item.first_load_date,
      item.last_load_date,
    ]);

    doc.autoTable({
      head: [
        [
          "ФИО работника",
          "Реактор",
          "Количество загрузок",
          "Первая загрузка",
          "Последняя загрузка",
        ],
      ],
      body: tableData,
      startY: 30,
    });

    doc.save("report.pdf");
  };

  const reportColumns = [
    {
      title: "ФИО работника",
      dataIndex: "employee_full_name",
      key: "employee_full_name",
    },
    {
      title: "Реактор",
      dataIndex: "subsystem_id",
      key: "subsystem_id",
    },
    {
      title: "Количество загрузок",
      dataIndex: "load_count",
      key: "load_count",
    },
    {
      title: "Первая загрузка",
      dataIndex: "first_load_date",
      key: "first_load_date",
    },
    {
      title: "Последняя загрузка",
      dataIndex: "last_load_date",
      key: "last_load_date",
    },
  ];

  return (
    <div style={{ marginBottom: 16 }}>
      <Table
        dataSource={reportData}
        columns={reportColumns}
        rowKey="employee_id"
      />
      <Button type="primary" onClick={generatePDF} style={{ marginTop: 16 }}>
        Скачать PDF
      </Button>
    </div>
  );
};

export default ReportTable;
