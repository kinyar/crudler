import { StyleSheet, Text } from "react-native";
import Screen from "../layout/Screen";
import Icons from "../UI/Icons.js";
import { Button, ButtonTray } from "../UI/Button.js";

const defaultUser = {
  UserID: Math.floor(100000 + Math.random() * 900000),
  UserFirstname: "Billie",
  UserLastname: "Eilish",
  UserEmail: "K3436261@kingston.ac.uk",
  UserImageURL:
    "https://images.generated.photos/JaFMncOoAFAerEyw_xWIeFMjzgfkkseT_oGEyP6CgQI/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzI5MTY3LmpwZw.jpg",
  UserType: "Student",
  UserYear: "2023-24",
};

const UserAddScreen = ({ navigation, route }) => {
  // Initialisations--
  const { onAdd } = route.params;

  const handleAdd = () => onAdd(defaultUser);
  const handleCancel = navigation.goBack;

  // State--
  // Handlers--
  // View--
  return (
    <Screen>
      <Text>Add</Text>
      <ButtonTray>
        <Button label="Add" icon={<Icons.Add />} onClick={handleAdd} />
        <Button label="Cancel" onClick={handleCancel} />
      </ButtonTray>
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default UserAddScreen;
