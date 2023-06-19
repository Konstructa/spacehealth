import { TextInput, View, Text } from "react-native";
import ResultImc from "./ResultImc";

export default function Form() {
  return (
    <View>
        <View>
            <Text>Altura</Text>
            <TextInput 
                placeholder="Ex: 1.89" 
                keyboardType="numeric"
           />
            <Text>Peso</Text>
            <TextInput 
                placeholder="Ex: 41.859" 
                keyboardType="numeric" 
            />
        </View>
        <Button title="Calcular IMC"/>
        <ResultImc messageResultImc={messageImc} ResultImc={imc}/>
    </View>
  )
}
