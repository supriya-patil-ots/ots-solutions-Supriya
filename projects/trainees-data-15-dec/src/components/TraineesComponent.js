import React, { useEffect, useState } from "react";
import { Header, Input, Button, Dropdown } from "semantic-ui-react";
import TraineesList from "./TraineesList";

const TraineesComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [traineesList, setTraineesList] = useState([]);
  const [searchedTraineesList, setSearchedTraineesList] = useState([]);
  const [order, setOrder] = useState("ascending");

  const mockTraineesData = [
    {
      id: "1",
      firstName: "Rahul",
      lastName: "Rauniyar",
      email: "rahul@otssolutions.com",
      gender: "Male",
    },
    {
      id: "2",
      firstName: "Saurabh",
      lastName: "Singh",
      email: "saurabh@otssolutions.com",
      gender: "Male",
    },
    {
      id: "3",
      firstName: "Mohd.",
      lastName: "Ehtesham",
      email: "ehtesham@otssolutions.com",
      gender: "Male",
    },
    {
      id: "4",
      firstName: "Arun",
      lastName: "Kumar",
      email: "ehtesham@otssolutions.com",
      gender: "Male",
    },
    {
      id: "5",
      firstName: "Hrishi",
      lastName: "Bhagat",
      email: "rahul@otssolutions.com",
      gender: "Male",
    },
    {
      id: "6",
      firstName: "Yogesh",
      lastName: "Abnave",
      email: "saurabh@otssolutions.com",
      gender: "Male",
    },
    {
      id: "7",
      firstName: "Supriya",
      lastName: "Patil",
      email: "ehtesham@otssolutions.com",
      gender: "Female",
    },
    {
      id: "8",
      firstName: "Manisha",
      lastName: "More",
      email: "ehtesham@otssolutions.com",
      gender: "Female",
    },
    {
      id: "9",
      firstName: "Akshay",
      lastName: "Khurana",
      email: "rahul@otssolutions.com",
      gender: "Male",
    },
    {
      id: "10",
      firstName: "Amit",
      lastName: "Sahani",
      email: "saurabh@otssolutions.com",
      gender: "Male",
    },
    {
      id: "11",
      firstName: "Kaustubh",
      lastName: "Rastogi",
      email: "ehtesham@otssolutions.com",
      gender: "Male",
    },
    {
      id: "12",
      firstName: "Pratiksha",
      lastName: "Sail",
      email: "ehtesham@otssolutions.com",
      gender: "Female",
    },
  ];

  // const options = [
  //   {
  //     key: "ascending",
  //     text: "Ascending Order",
  //     value: "first-name",
  //   },
  //   {
  //     key: "descending",
  //     text: "Descending Order",
  //     value: "descending",
  //   },
  // ];

  const handleSort = (event) => {
    setOrder(event.target.value);
  };

  useEffect(() => {
    setTraineesList(mockTraineesData);
  }, []);

  useEffect(() => {
    if (searchTerm != "") {
      const filteredData = mockTraineesData.filter((trainee) =>
        trainee.firstName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchedTraineesList(filteredData);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (order == "ascending") {
      //  sort by String property ASCENDING (A - Z)

      const strAscending = [...mockTraineesData].sort((a, b) =>
        a.firstName > b.firstName ? 1 : -1
      );

      console.log(strAscending);

      setTraineesList(strAscending);
    } else if (order == "descending") {
      //  sort by String property DESCENDING (Z - A)

      const strDescending = [...mockTraineesData].sort((a, b) =>
        a.firstName > b.firstName ? -1 : 1
      );

      console.log(strDescending);

      setTraineesList(strDescending);
    }
  }, [order]);

  return (
    <>
      <Header as="h2">TRAINEES</Header>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "1rem",
        }}
      >
        <Input
          style={{ width: "25rem" }}
          icon={{ name: "search", circular: true, link: true }}
          placeholder="Search Name"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div>
          <select
            name="sort"
            id="sort"
            onChange={handleSort}
            style={{
              padding: "10px",
              border: "1px solid #d5d5d5",
              borderRadius: "4px",
              marginLeft: "10px",
            }}
          >
            <option value="ascending">Ascending Order</option>
            <option value="descending">Descending Order</option>
          </select>
        </div>

        {/* <div>
          <Button.Group color="blue" style={{ marginLeft: "1rem" }}>
            <Button>Sort</Button>
            <Dropdown
              className="button icon"
              floating
              options={options}
              trigger={<></>}
            />
          </Button.Group>
        </div> */}
      </div>

      <div style={{ margin: "1rem" }}>
        <TraineesList
          trainees={searchTerm == "" ? traineesList : searchedTraineesList}
        />
      </div>
    </>
  );
};

export default TraineesComponent;
