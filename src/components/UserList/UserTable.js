import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { updateLocalStorage } from "../../utils";
const UserTable = ({ userList, updateUserList, onEdit }) => {
  return (
    <>
      {userList.length > 0 ? (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>S.No</TableCell>
                <TableCell align="left">First Name</TableCell>
                <TableCell align="left">Last Name</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Phone</TableCell>
                <TableCell align="left">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userList.map((user, index) => (
                <TableRow key={user.id}>
                  <TableCell align="left">{user.id}</TableCell>
                  <TableCell align="left">{user.firstName}</TableCell>
                  <TableCell align="left">{user.lastName}</TableCell>
                  <TableCell align="left">{user.email}</TableCell>
                  <TableCell align="left">{user.phone}</TableCell>
                  <TableCell align="left">
                    <span
                      className="material-icons action-icon"
                      title="edit"
                      onClick={() => {
                        user.index = index;
                        onEdit(user);
                      }}
                    >
                      edit
                    </span>
                    <span
                      className="material-icons action-icon"
                      title="delete"
                      onClick={() =>
                        updateLocalStorage(
                          { userIndex: index },
                          "delete",
                          updateUserList
                        )
                      }
                    >
                      delete
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography variant="subtitle2">Fetching data...</Typography>
      )}
    </>
  );
};
export default UserTable;
