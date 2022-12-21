import React from "react";
import "./main.css";
import { useState } from "react";
import { Table, Button, Header, Icon, Modal, Form } from "semantic-ui-react";

const TraineesList = ({ trainees }) => {
  const [open, setOpen] = React.useState(false);
  const [popupContent, setPopupContent] = useState([]);
  // const showDetails = (trainee) => {
  //   setPopupContent(trainee);
  // };
  console.log(popupContent);
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
                <Table.Body key={index}>
                  <Table.Row>
                    <Table.Cell>
                      {trainee.firstName} {trainee.lastName}
                    </Table.Cell>
                    <Table.Cell>{trainee.email}</Table.Cell>
                    <Table.Cell>{trainee.gender}</Table.Cell>
                    <Table.Cell>
                      <Modal
                        closeIcon
                        open={open}
                        trigger={<Icon name="edit" />}
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                      >
                        <Header
                          icon="archive"
                          onClick={() => setPopupContent(trainees)}
                          // content={`${trainee.firstName}'s Details`}
                        />
                        {console.log(popupContent)}
                        <Modal.Content>
                          <Form>
                            <Form.Group widths="equal">
                              <Form.Input
                                fluid
                                id="form-subcomponent-shorthand-input-first-name"
                                label="First name"
                                placeholder="First name"
                              />
                              <Form.Input
                                fluid
                                id="form-subcomponent-shorthand-input-last-name"
                                label="Last name"
                                placeholder="Last name"
                              />
                              <Form.Input
                                label="Email"
                                placeholder="joe@schmoe.com"
                              />
                            </Form.Group>
                          </Form>
                        </Modal.Content>
                        <Modal.Actions>
                          <Button color="red" onClick={() => setOpen(false)}>
                            <Icon name="remove" /> No
                          </Button>
                          <Button color="green" onClick={() => setOpen(false)}>
                            <Icon name="checkmark" /> Yes
                          </Button>
                        </Modal.Actions>
                      </Modal>

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
};
export default TraineesList;
