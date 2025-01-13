import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

const Title = ({ children }) => {
    return (
        <View>
            <Text style={styles.title}>{children}</Text>
        </View>
    )
}

export default Title

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 16,
        padding: 12,
    }
})