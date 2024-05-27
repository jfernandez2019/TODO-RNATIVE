import React from "react";
import { Text,View,TouchableOpacity } from "react-native";
import Estilo from "../styles/style";
import { task } from "../../App";

interface itemProps {
    item: task
    markDone: (tarea:task) => void
    deleteFunction: (tarea:task)=>void
}

export default function renderItem({item, markDone,deleteFunction}:itemProps){
    return(
      <View style={Estilo.itemcontainer}>
        <TouchableOpacity onPress={()=>markDone(item)}>
          <Text style={item.done ? Estilo.textDone : Estilo.text}>
            {item.title}</Text> 
          <Text style={item.done ? Estilo.textDone : Estilo.text}>
            {item.date.toLocaleString()}</Text>   
        </TouchableOpacity>
        {
          //Para hacer una renderizacion condicional 
          //se utiliza el valor booleano seguido de &&
          item.done && <TouchableOpacity style={Estilo.removeButton}
          onPress={()=>deleteFunction(item)}>
          <Text style={Estilo.whiteText}>Eliminar</Text>
        </TouchableOpacity>
        }
      </View>
    );

  }
