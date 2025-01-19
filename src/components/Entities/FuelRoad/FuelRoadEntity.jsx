import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import EntityTable from "../../Table/Table";

const FuelRoadEntity = () => {
  const [fuelRoads, setFuelRoads] = useState([]);

  useEffect(() => {
    fetchFuelRoad();
  }, []);

  console.log(fuelRoads);

  const fetchFuelRoad = async () => {
    const responseUrl = `/api/fuel-road/`;
    const response = await axios.get(responseUrl);
    setFuelRoads(response.data);
  };

  const columns = [
    {
      title: "ТВЭЛ",
      dataIndex: "fuel_road_number",
      key: "fuelRoadNumber",
      render: (_, record) =>
        `ТВЭЛ#${fuelRoads.findIndex((fr) => fr.fuel_road_number === record.fuel_road_number) + 1}`,
      sorter: (a, b) => a.fuel_road_number - b.fuel_road_number,
    },
    {
      title: "Тип топлива",
      dataIndex: "type_name",
      key: "fuelTypeName",
      sorter: (a, b) => {
        const firstType = a.type_name.toLowerCase();
        const secondType = b.type_name.toLowerCase();
        return firstType.localeCompare(secondType);
      },
    },
    {
      title: "Масса",
      key: "subsystemId",
      dataIndex: "mass",
      sorter: (a, b) => a.mass - b.mass,
    },
    {
      title: "Состояние",
      key: "feulRoadCondition",
      dataIndex: "condition",
      sorter: (a, b) => {
        const condA = a.condition.toLowerCase();
        const condB = b.condition.toLowerCase();
        return condA.localeCompare(condB);
      },

      filters: [
        {
          text: "плохое",
          value: "плохое",
        },
        {
          text: "хорошее",
          value: "хорошее",
        },
        {
          text: "удовлетворительное",
          value: "удовлетворительное",
        },
      ],
      onFilter: (value, record) => record.status.indexOf(value) === 0,
    },
  ];

  return (
    <>
      <EntityTable data={fuelRoads} columns={columns} />
    </>
  );
};

export default FuelRoadEntity;
