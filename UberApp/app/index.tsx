import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
    return (
        <SafeAreaView className="flex-1 justify-center items-center">
            <Text className="text-6xl">Home</Text>
        </SafeAreaView>
    );
}

export default Home;