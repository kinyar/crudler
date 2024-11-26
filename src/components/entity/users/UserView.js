import { StyleSheet, Text, View } from "react-native";
import FullWidthImage from "react-native-fullwidth-image";
import Icons from "../../UI/Icons";
import { Button, ButtonTray } from "../../UI/Button";

const UserView = ({ user }) => {
  // initialisations --
  // state --
  // handlers --
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
          <Button icon={<Icons.Edit />} label="Modify" />
          <Button icon={<Icons.Delete />} label="Delete" />
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
