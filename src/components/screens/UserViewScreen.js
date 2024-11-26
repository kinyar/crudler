import { StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import UserView from "../entity/users/UserView";

const UserViewScreen = ({ navigation, route }) => {
  // Initialisations--
  const { user, onDelete } = route.params;
  // State--
  // Handlers--
  // View--
  return (
    <Screen>
      <UserView user={user} onDelete={onDelete} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default UserViewScreen;
