import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const StartScreen = () => {
    const router = useRouter();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, marginBottom: 20 }}>Select Your Role</Text>
            
            {["manufacturer", "warehouse", "customer", "checkpoints"].map((role) => (
                <TouchableOpacity
                    key={role}
                    style={{
                        backgroundColor: '#6200EE',
                        padding: 15,
                        margin: 10,
                        borderRadius: 10,
                        width: 200,
                        alignItems: 'center'
                    }}
                    onPress={() => router.push(`/login/${role}`)}
                >
                    <Text style={{ color: 'white', fontSize: 16 }}>{role.toUpperCase()}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default StartScreen;
