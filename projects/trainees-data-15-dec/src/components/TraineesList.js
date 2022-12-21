import React from "react";
import "./main.css";
import { useState } from "react";
import EditOrDeleteModule from "./EditOrDeleteModule/EditOrDeleteModule";
import { Table, Button, Header, Icon, Modal, Form } from "semantic-ui-react";

const TraineesList = ({ trainees }) => {
  const [open, setOpen] = React.useState(false);
  const [popupContent, setPopupContent] = useState([]);
  const [index, setIndex] = useState(0);

  const handleModel = (status) => {
    setOpen(status);
  };
  const handleClick = (index) => {
    setOpen(true);
    setIndex(index);
    setPopupContent(trainees[index]);
  };

  const handleModalData = (firstName, lastName, email) => {
    trainees[index].firstName = firstName;
    trainees[index].lastName = lastName;
    trainees[index].email = email;
  };

  return (
    <>
      {trainees.length > 0 && (
        <Table fixed>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Gender</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          {trainees.length > 0 &&
            trainees.map((trainee, index) => {
              return (
                <>
                  <Table.Body key={index}>
                    <Table.Row>
                      <Table.Cell>
                        {trainee.firstName} {trainee.lastName}
                      </Table.Cell>
                      <Table.Cell>{trainee.email}</Table.Cell>
                      <Table.Cell>{trainee.gender}</Table.Cell>
                      <Table.Cell>
                        <Icon name="edit" onClick={() => handleClick(index)} />
                        <Icon name="user delete" />
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>

                  <EditOrDeleteModule
                    open={open}
                    popupContent={popupContent}
                    handleModel={handleModel}
                    handleModalData={handleModalData}
                  />
                </>
              );
            })}
        </Table>
      )}
      <div>{trainees.length == 0 && <div>No Data Found!</div>}</div>
    </>
  );
};
export default TraineesList;
