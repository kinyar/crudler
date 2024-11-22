import { StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import UserList from "../entity/users/UserList.js";

import initialUsers from "../../data/users.js";

const UserListScreen = () => {
  // Initialisations--
  const users = initialUsers;
  // State--
  // Handlers--
  const handleSelect = (user) => alert(`Item ${user.UserFirstname} selected`);
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
