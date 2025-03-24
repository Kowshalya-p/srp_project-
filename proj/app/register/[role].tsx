import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';

const LoginScreen = () => {
    const { role } = useLocalSearchParams();
    const router = useRouter();
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [captchaInput, setCaptchaInput] = useState('');
    const [captcha, setCaptcha] = useState(generateCaptcha());

    function generateCaptcha() {
        return Math.random().toString(36).substring(2, 8).toUpperCase(); // Random 6-letter captcha
    }

    const refreshCaptcha = () => setCaptcha(generateCaptcha());

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login as {role?.toUpperCase()}</Text>

            <TextInput 
                placeholder="Enter ID" 
                onChangeText={setId} 
                style={styles.input} 
                placeholderTextColor="#888"
            />
            <TextInput 
                placeholder="Enter Password" 
                secureTextEntry 
                onChangeText={setPassword} 
                style={styles.input} 
                placeholderTextColor="#888"
            />

            {/* Captcha Section */}
            <Text style={styles.captchaText}>Enter Captcha: <Text style={styles.captchaCode}>{captcha}</Text></Text>
            <TextInput 
                placeholder="Enter Captcha" 
                onChangeText={setCaptchaInput} 
                style={styles.input} 
                placeholderTextColor="#888"
            />
            <TouchableOpacity onPress={refreshCaptcha}>
                <Text style={styles.refreshCaptcha}>Refresh Captcha</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push(`/register/${role}`)} style={styles.registerLink}>
                <Text style={styles.registerText}>Don't have an account? Register</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24, 
        fontWeight: 'bold', 
        marginBottom: 20, 
        color: '#333',
    },
    input: {
        width: 280,
        borderWidth: 1,
        borderColor: '#DDD',
        backgroundColor: '#FFF',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
        marginBottom: 12,
        fontSize: 16,
        elevation: 2,  // Adds slight shadow effect
    },
    captchaText: {
        fontSize: 16, 
        marginBottom: 5, 
        color: '#555',
    },
    captchaCode: {
        fontWeight: 'bold',
        color: '#6200EE',
    },
    refreshCaptcha: {
        color: '#6200EE', 
        marginBottom: 10, 
        fontSize: 14,
    },
    button: {
        backgroundColor: '#6200EE', 
        paddingVertical: 12, 
        paddingHorizontal: 30, 
        borderRadius: 8, 
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3, // Android shadow effect
    },
    buttonText: {
        color: 'white', 
        fontSize: 16, 
        fontWeight: 'bold',
    },
    registerLink: {
        marginTop: 15,
    },
    registerText: {
        color: '#6200EE', 
        fontSize: 14,
        textDecorationLine: 'underline',
    },
});

export default LoginScreen;
