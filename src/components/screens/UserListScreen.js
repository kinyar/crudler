import { useState } from "react";
import { StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import UserList from "../entity/users/UserList.js";

import initialUsers from "../../data/users.js";

const UserListScreen = ({ navigation }) => {
  // Initialisations--
  // State--
  const [users, setUsers] = useState(initialUsers);

  // Handlers--
  const handleDelete = (user) =>
    setUsers(users.filter((item) => item.UserID !== user.UserID));

  const onDelete = (user) => {
    handleDelete(user);
    navigation.goBack();
  };

  const handleSelect = (user) =>
    navigation.navigate("UserViewScreen", { user, onDelete });

  // View--
  return (
    <Screen>
      <UserList users={users} onSelect={handleSelect} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default UserListScreen;
