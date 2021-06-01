import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { updateLocalStorage } from "../../utils";

const UserForm = ({
  isEdit,
  modalState,
  toggleModal,
  userData,
  updateUserList,
}) => {
  const [user, updateUserForm] = useState(() => {
    return isEdit ? userData : {};
  });
  const onChange = (e) => {
    e.preventDefault();
    debugger;
    updateUserForm((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };
  return (
    <div>
      <Dialog
        open={modalState}
        onClose={() => toggleModal(!modalState)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          {isEdit ? "Edit User" : "Add user"}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="First Name"
            type="text"
            name="firstName"
            onChange={onChange}
            defaultValue={userData?.firstName || ""}
            fullWidth
          />
          <TextField
            margin="dense"
            id="name"
            label="Last Name"
            type="text"
            name="lastName"
            onChange={onChange}
            defaultValue={userData?.lastName || ""}
            fullWidth
          />
          <TextField
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            name="email"
            onChange={onChange}
            defaultValue={userData?.email || ""}
            fullWidth
          />
          <TextField
            margin="dense"
            id="name"
            label="Phone"
            type="text"
            name="phone"
            onChange={onChange}
            defaultValue={userData?.phone || ""}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => toggleModal(!modalState)} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              toggleModal(!modalState);
              if (isEdit) {
                updateLocalStorage(user, "edit", updateUserList);
              } else {
                updateLocalStorage(user, "add", updateUserList);
              }
            }}
            color="primary"
          >
            {isEdit ? "Update" : "Submit"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default UserForm;
