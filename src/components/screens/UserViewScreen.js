import { StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import UserView from "../entity/users/UserView";

const UserViewScreen = ({ navigate, route }) => {
  // Initialisations--
  const { user } = route.params;
  // State--
  // Handlers--
  // View--
  return (
    <Screen>
      <UserView user={user} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default UserViewScreen;
