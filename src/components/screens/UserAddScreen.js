import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Screen from "../layout/Screen";
import Icons from "../UI/Icons.js";
import { Button, ButtonTray } from "../UI/Button.js";

const defaultUser = {
  UserID: null,
  UserFirstname: null,
  UserLastname: null,
  UserEmail: null,
  UserImageURL: null,
  UserType: null,
  UserYear: null,
};

const UserAddScreen = ({ navigation, route }) => {
  // Initialisations--
  const { onAdd } = route.params;
  defaultUser.UserID = Math.floor(100000 + Math.random() * 900000);
  defaultUser.UserImageURL =
    "https://images.generated.photos/JaFMncOoAFAerEyw_xWIeFMjzgfkkseT_oGEyP6CgQI/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzI5MTY3LmpwZw.jpg";
  // State--
  const [user, setUser] = useState(defaultUser);

  // Handlers--
  const handleAdd = () => onAdd(user);
  const handleCancel = navigation.goBack;

  const handleChange = (field, value) => setUser({ ...user, [field]: value });

  // View--
  return (
    <Screen>
      <View style={styles.item}>
        <Text style={styles.itemLabel}>User First Name</Text>
        <TextInput
          value={user.UserFirstname}
          onChangeText={(value) => handleChange("UserFirstname", value)}
          style={styles.itemTextInput}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>User Last Name</Text>
        <TextInput
          value={user.UserLastname}
          onChangeText={(value) => handleChange("UserLastname", value)}
          style={styles.itemTextInput}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>User Email</Text>
        <TextInput
          value={user.UserEmail}
          onChangeText={(value) => handleChange("UserEmail", value)}
          style={styles.itemTextInput}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>User Image</Text>
        <TextInput
          value={user.UserImageURL}
          onChangeText={(value) => handleChange("UserImageURL", value)}
          style={styles.itemTextInput}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>User Type</Text>
        <TextInput
          value={user.UserType}
          onChangeText={(value) => handleChange("UserType", value)}
          style={styles.itemTextInput}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>User Year</Text>
        <TextInput
          value={user.UserYear}
          onChangeText={(value) => handleChange("UserYear", value)}
          style={styles.itemTextInput}
        />
      </View>

      <ButtonTray>
        <Button label="Add" icon={<Icons.Add />} onClick={handleAdd} />
        <Button label="Cancel" onClick={handleCancel} />
      </ButtonTray>
    </Screen>
  );
};

const styles = StyleSheet.create({
  itemLabel: {
    color: "grey",
    fontSize: 16,
    marginBottom: 5,
  },
  itemTextInput: {
    height: 50,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: "white",
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "lightgray",
  },
});

export default UserAddScreen;
