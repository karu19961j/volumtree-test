import React, { useEffect, useState } from "react";

import Heading from "./Heading";
import Button from "@material-ui/core/Button";
import { users } from "../../constant";
import "./userlist.css";
import UserTable from "./UserTable";
import UserForm from "./Form";

const UserList = () => {
  const [userList, updateUserList] = useState(() => []);
  const [formState, toggleFormState] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    localStorage.setItem("userList", JSON.stringify(users));
    updateUserList(JSON.parse(localStorage.getItem("userList")));
  }, []);
  const editUser = (user) => {
    setEdit(true);
    toggleFormState(true);
    setUserData(user);
  };
  return (
    <>
      {formState && (
        <UserForm
          isEdit={isEdit}
          modalState={formState}
          toggleModal={toggleFormState}
          userData={userData}
          updateUserList={updateUserList}
        />
      )}
      <Heading />
      <div align="right">
        <Button
          variant="contained"
          color="primary"
          onClick={() => toggleFormState(true)}
        >
          Add
        </Button>
        <UserTable
          userList={userList}
          updateUserList={updateUserList}
          onEdit={editUser}
        />
      </div>
    </>
  );
};

export default UserList;
