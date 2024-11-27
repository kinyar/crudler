import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Icons from "../../UI/Icons.js";
import Form from "../../UI/Form.js";

const defaultUser = {
  UserID: null,
  UserFirstname: null,
  UserLastname: null,
  UserEmail: null,
  UserImageURL: null,
  UserType: null,
  UserYear: null,
};

const UserForm = ({ originalUser, onSubmit, onCancel }) => {
  // Initialisations--
  defaultUser.UserID = Math.floor(100000 + Math.random() * 900000);
  defaultUser.UserImageURL =
    "https://images.generated.photos/JaFMncOoAFAerEyw_xWIeFMjzgfkkseT_oGEyP6CgQI/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzI5MTY3LmpwZw.jpg";

  const types = [
    { value: "(Staff)", label: "Staff" },
    { value: "(Student)", label: "Student" },
  ];

  // State --
  const [user, setUser] = useState(originalUser || defaultUser);

  // Handlers --
  const handleChange = (field, value) => setUser({ ...user, [field]: value });
  const handleSubmit = () => onSubmit(user);

  // View --
  const submitLabel = originalUser ? "Modify" : "Add";
  const submitIcon = originalUser ? <Icons.Edit /> : <Icons.Add />;
  return (
    <Form
      onSubmit={handleSubmit}
      onCancel={onCancel}
      submitLabel={submitLabel}
      submitIcon={submitIcon}
    >
      <Form.InputText
        label="User First Name"
        value={user.UserFirstname}
        onChange={(value) => handleChange("UserFirstname", value)}
      />

      <Form.InputText
        label="User Last Name"
        value={user.UserLastname}
        onChange={(value) => handleChange("UserLastname", value)}
      />

      <Form.InputText
        label="User Email"
        value={user.UserEmail}
        onChange={(value) => handleChange("UserEmail", value)}
      />

      <Form.InputText
        label="User Image"
        value={user.UserImageURL}
        onChange={(value) => handleChange("UserImageURL", value)}
      />

      <Form.InputSelect
        label="User Type"
        prompt="Select user type..."
        options={types}
        value={user.UserType}
        onChange={(value) => handleChange("UserType", value)}
      />

      <Form.InputText
        label="User Year"
        value={user.UserYear}
        onChange={(value) => handleChange("UserYear", value)}
      />
    </Form>
  );
};

const styles = StyleSheet.create({});

export default UserForm;
