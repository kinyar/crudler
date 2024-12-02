import { StyleSheet, Text, View } from "react-native";
import Selector from "../../UI/Selector";

const UserItem = ({ user, onSelect }) => {
  // Initialisations --
  // State --
  // Handlers --
  const handleSelect = () => onSelect(user);
  // View --
  return (
    <Selector onPress={handleSelect} pressedStyle={styles.pressedItem}>
      <View style={styles.item}>
        <Text style={styles.text}>
          {user.UserFirstname} {user.UserLastname} {user.UserType}
        </Text>
      </View>
    </Selector>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: "lightgray",
  },
  text: {
    fontSize: 16,
  },
  pressedItem: {
    backgroundColor: "azure",
  },
});

export default UserItem;
