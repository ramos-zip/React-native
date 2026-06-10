import { globalStyles, colors } from "../styles/global"
import { initialGames } from "../data/initialGames"
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native"
import { useState } from "react"



export default function HomeScreen() {
    const [games, setGames] = useState(initialGames)

    return(
        <View style={globalStyles.container}>

            <Text style={globalStyles.title}>
                Meus Jogos
            </Text>
            <TouchableOpacity style={StyleSheet.buttonModal}
                onPress={() => 'oi'}
            >
                    <Text style={StyleSheet.newGameText}>
                        Novo Jogo
                    </Text>

            </TouchableOpacity>
            <FlatList
                data={games}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Text>{item.name}</Text>
                )}
            />
        
        </View>
    )
}


const styles = StyleSheet.create({
    buttonModal: {
        backgroundColor: colors.primary,
        padding: 16,
        borderRadius: 'center',
        marginBottom: 20
    },
    newGameText: {
        color: colors.white,
        fontWeight: 'bold'
    }
})




























