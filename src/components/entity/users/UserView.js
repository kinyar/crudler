import { Alert, StyleSheet, Text, View } from "react-native";
import FullWidthImage from "react-native-fullwidth-image";
import Icons from "../../UI/Icons";
import { Button, ButtonTray } from "../../UI/Button";

const UserView = ({ user, onDelete, onModify }) => {
  // initialisations --
  // state --
  // handlers --
  const handleDelete = () => onDelete(user);

  const requestDelete = () =>
    Alert.alert(
      "Delete warning",
      `Are you sure you want to delete user ${user.UserFirstname} ${user.UserLastname}`,
      [{ text: "Cancel" }, { text: "Delete", onPress: handleDelete }]
    );
  // view --
  return (
    <View style={styles.container}>
      <FullWidthImage
        source={{ uri: user.UserImageURL }}
        style={styles.image}
      />
      <View style={styles.infoTray}>
        <Text style={styles.boldText}>
          {user.UserFirstname} {user.UserLastname}
        </Text>
        <Text style={styles.text}>Email: {user.UserEmail}</Text>
        <Text style={styles.dimText}>
          {user.UserType} {user.UserYear}
        </Text>
        <ButtonTray>
          <Button icon={<Icons.Edit />} label="Modify" onClick={onModify} />
          <Button
            icon={<Icons.Delete />}
            label="Delete"
            onClick={requestDelete}
          />
        </ButtonTray>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
  image: {
    borderRadius: 3,
  },
  infoTray: {
    gap: 5,
  },
  text: {
    fontSize: 16,
  },
  boldText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  dimText: {
    color: "grey",
  },
});

export default UserView;
