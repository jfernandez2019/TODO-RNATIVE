import { StyleSheet, Dimensions } from "react-native";

const Estilo = StyleSheet.create({
    container :{
        width:'100%',
        padding: 20,
    },
    title:{
        fontSize: 20,
        color: '#6f6f6f',
        textAlign: 'center'
    },
    text:{
        fontSize: 16,
        color: '#6f6f6f'
    },
    textDone:{
        fontSize: 16,
        color: '#6f6f6f',
        textDecorationLine: 'line-through',
    },
    whiteText:{
        fontSize: 16,
        color: '#fff'
    },
    textInput:{
        borderColor: '#6f6f6f',
        borderWidth: 1,
        width: Dimensions.get('screen').width * 0.6,
        borderRadius: 15,
        paddingLeft: 15,
    },
    inputContainer:{
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    adbutton:{
        backgroundColor: '#5897fb',
        width: Dimensions.get('screen').width * 0.25,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15.
    },
    scrollcontainer:{
        marginTop: 20,
    },
    itemcontainer:{
        paddingVertical: 20,   //espaciado vertical
        borderBottomColor: '#e4e4e4', //color de borde inferior
        borderBottomWidth: 1, //grosor de borde
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    removeButton:{
        backgroundColor: '#f33d3d',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 10,
    },
});

export default Estilo;