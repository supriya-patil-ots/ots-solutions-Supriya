import React, { useEffect, useState } from "react";
import "./EditOrDeleteModule.css";
import { Table, Button, Header, Icon, Modal, Form } from "semantic-ui-react";

const EditOrDeleteModule = ({
  open,
  popupContent,
  handleModel,
  handleModalData,
}) => {
  const [fName, setFName] = useState("");
  const [lName, setlName] = useState("");
  const [mailid, setMailId] = useState("");

  useEffect(() => {
    const { firstName, lastName, email } = popupContent;
    setFName(firstName);
    setlName(lastName);
    setMailId(email);
  }, [popupContent]);

  const handleSubmit = () => {
    handleModalData(fName, lName, mailid);
    handleModel(false);
  };

  return (
    <div>
      <Modal
        closeIcon
        open={open}
        onClose={() => handleModel(false)}
        onOpen={() => handleModel(true)}
      >
        <Header
          icon="archive"
          content={`${popupContent.firstName}'s Details`}
        />

        <Modal.Content>
          <Form>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                id="form-subcomponent-shorthand-input-first-name"
                label="First name"
                value={fName}
                onChange={(event) => setFName(event.target.value)}
                placeholder="First name"
              />
              <Form.Input
                fluid
                id="form-subcomponent-shorthand-input-last-name"
                label="Last name"
                value={lName}
                onChange={(event) => setlName(event.target.value)}
                placeholder="Last name"
              />
              <Form.Input
                label="Email"
                placeholder="joe@schmoe.com"
                value={mailid}
                onChange={(event) => setMailId(event.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" onClick={() => handleModel(false)}>
            <Icon name="remove" /> No
          </Button>
          <Button color="green" onClick={handleSubmit}>
            <Icon name="checkmark" /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default EditOrDeleteModule;
