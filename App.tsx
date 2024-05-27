//El view es como el div de html o sea los espacios de trabajo
//El text para ingresar texto
//TextInput para ingresar texto por pantalla
//El hook useEfect permite ejecutar una accion al momento en que la app se lanza
import React, {useState,useEffect} from "react";
import { Text,
         View,
         TextInput,
         TouchableOpacity,
         FlatList,
         Task,
        } from "react-native";
import Estilo from "./android/styles/style";
import RenderItem from "./android/components/RenderItem";
import AsyncStorage from '@react-native-async-storage/async-storage';



export interface task {
  title:string,
  done:boolean,
  date:Date,
}

export default function App () {
  //Con este primer hook(useState) voy a manejar el contenido de mi carga de datos
  const [text,setTex] = useState('');
  //al useState de tareas le pasamos un vector(array) por que el flatlist requiere eso
  //Al useState tambien hay que especificarle que sera un arreglo de tareas por eso
  // <task[]> den del codifo
  const [task,setTask] = useState<task[]>([]);
  //Funcion para almacenar la informacion del asyncStorage
  const storeData = async (value: task[]) => {
    try {
      await AsyncStorage.setItem('misTareas', JSON.stringify(value));
    } catch (e) {
      // saving error
    }
  };
  //Funcion para leer la informacion del AsynStorage
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('misTareas');
      if (value !== null) {
        const taskLocal = JSON.parse(value);
        setTask(taskLocal);
      }
    } catch (e) {
      // error reading value
    }
  };
  
  useEffect(()=> {
    getData();
  },[])

  const addtask = () =>{
    /*no se debe hacer un push directo sobre el useState a ingresar
     se debe crear una variable temporal*/
    const tmp = [...task]; //variable temporal que clona la lista de tareas generadas
    const newTask = {
      title: text,
      done:false,
      date: new Date(),
    }
    tmp.push(newTask); //cargamos a la lista temporal
    setTask(tmp); //seteamos en el useState la tarea
    storeData(tmp); //Se guarda en JSON
    setTex(''); //Esto para limpiar el campo de la tarea que escribimos
  }
  const markDone = (tarea:task) =>{
    const tmp = [...task];
    const index = tmp.findIndex(el => el.title === tarea.title);
    const todo = task[index];
    todo.done = !todo.done; //Niego el estado para poder pasar de true a false y viceversa
    setTask(tmp); //envio el useState
    storeData(tmp);//para guardar en el JSON

  }
  const deleteFunction = (tarea:task) =>{
    const tmp = [...task];
    const index = tmp.findIndex(el => el.title === tarea.title);
    tmp.splice(index,1); //splice sirve para sacar un elemento de un indice 
    //A splice se le pasa la cantidad de elementos que va a eliminar
    //en el ejemplo a partir de ese indice solo se elimina un elemento
    setTask(tmp);
    storeData(tmp); //Se guarda em Json
  }
  return(
  <View style={Estilo.container}>
    <Text style={Estilo.title}>Mis Tareas por hacer</Text>
    <View style={Estilo.inputContainer}>
        <TextInput 
        placeholder="Agregar una nueva tarea" 
        onChangeText={(escrito:string)=>{setTex(escrito)}}
        value={text} 
        style={Estilo.textInput}
        />
        <TouchableOpacity onPress={addtask} style={Estilo.adbutton}>
          <Text style={Estilo.whiteText}>Agregar</Text>
        </TouchableOpacity>
    </View>
    <View style={Estilo.scrollcontainer}>
      <FlatList
        renderItem={({item})=>(
          <RenderItem
            item={item}
            markDone={markDone}
            deleteFunction={deleteFunction}
          />
        )}
        data={task}
      />
    </View>
  </View>
  )
}

