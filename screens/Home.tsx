import { RootTabScreenProps } from "../types";
import { View, Text } from "../components/Themed";

export default function Home({ navigation }: RootTabScreenProps<"Home">) {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
