import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import EntityTable from "../../Table/Table";

const SubsystemEntity = () => {
  const [subsystems, setSubsystems] = useState([]);

  useEffect(() => {
    fetchSubsystem();
  }, []);
  const fetchSubsystem = async () => {
    const responseUrl = `/api/subsystem/`;
    const response = await axios.get(responseUrl);
    setSubsystems(response.data);
  };

  const columns = [
    {
      title: "Реактор",
      key: "subsystemId",
      render: (_, record) =>
        `Реактор#${subsystems.findIndex((em) => em.subsystem_id === record.subsystem_id) + 1}`,
      sorter: (a, b) => a.subsystem_id - b.subsystem_id,
    },
    {
      title: "Статус",
      key: "subsystemStatus",
      dataIndex: "status",
      filters: [
        {
          text: "работает",
          value: "работает",
        },
        {
          text: "остановлен",
          value: "остановлен",
        },
        {
          text: "в ремонте",
          value: "в ремонте",
        },
        {
          text: "не работает",
          value: "не работает",
        },
      ],
      onFilter: (value, record) => record.status.indexOf(value) === 0,
    },
  ];

  return (
    <>
      <EntityTable data={subsystems} columns={columns} />
    </>
  );
};

export default SubsystemEntity;
