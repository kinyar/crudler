import { useState } from "react";
import { StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import UserList from "../entity/users/UserList.js";
import Icons from "../UI/Icons.js";
import { Button, ButtonTray } from "../UI/Button.js";
import initialUsers from "../../data/users.js";

const UserListScreen = ({ navigation }) => {
  // Initialisations--
  // State--
  const [users, setUsers] = useState(initialUsers);

  // Handlers--
  const handleDelete = (user) =>
    setUsers(users.filter((item) => item.UserID !== user.UserID));

  const handleAdd = (user) => setUsers([...users, user]);

  const onDelete = (user) => {
    handleDelete(user);
    navigation.goBack();
  };

  const onAdd = (user) => {
    handleAdd(user);
    navigation.goBack();
  };

  const gotoViewScreen = (user) =>
    navigation.navigate("UserViewScreen", { user, onDelete });

  const gotoAddScreen = () => navigation.navigate("UserAddScreen", { onAdd });

  // View--
  return (
    <Screen>
      <ButtonTray>
        <Button label="Add" icon={<Icons.Add />} onClick={gotoAddScreen} />
      </ButtonTray>
      <UserList users={users} onSelect={gotoViewScreen} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default UserListScreen;
