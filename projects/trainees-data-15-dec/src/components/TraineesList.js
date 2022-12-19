import React from "react";
import "./main.css";
import { Table, Icon } from "semantic-ui-react";

const TraineesList = ({ trainees }) => (
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
              <Table.Body key={index}>
                <Table.Row>
                  <Table.Cell>
                    {trainee.firstName} {trainee.lastName}
                  </Table.Cell>
                  <Table.Cell>{trainee.email}</Table.Cell>
                  <Table.Cell>{trainee.gender}</Table.Cell>
                  <Table.Cell>
                    <Icon name="edit" />
                    <Icon name="user delete" />
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            );
          })}
      </Table>
    )}
    <div>{trainees.length == 0 && <div>No Data Found!</div>}</div>
  </>
);

export default TraineesList;
