import React, {useState} from 'react';
import ContainerGreen from '../../../components/containerGreen/containerGreen.js';
import Navbar from '../../../components/navbar/navbar.js';
import ButtonBox from '../../../components/button-box/buttonBox.js';
import Footer from '../../../components/footer/footer.js';
import styles from './verkenStyle';
import kNear from "./knear";
import {Pressable, ScrollView, Text, TextInput, View} from "react-native";
// bij verkenScreens kan je alle onderdelen vinden die te maken hebben de Plantverkennert, die voorheen plantswiper heette

const Verken = ({ navigation }) => {
    // komt vanuit navbar of home

//code for handling ai
    const k = 3
    const knn = new kNear(k);
    const [plantData, setPlantData] = useState("plant data is missing")
    const [prediction, setPrediction] = useState("there has no prediction been done yet")
    const [predictionData, setPredictionData] = useState("Prediction data is missing");
    const [inputValues, setInputValues] = useState(Array(15).fill(0)); // 15 input fields

    const handleInputChange = (index, value) => {
        const newValues = [...inputValues];
        newValues[index] = Number(value); // Convert value to number
        setInputValues(newValues);
    };

    async function makePrediction() {
        try {
            // Load api
            const response = await fetch("https://stud.hosted.hr.nl/1064361/stekkie/data.json");
            console.log(response)
            let ApiData = await response.json()

            // Format data to data we can use to call kkn.learn on
            const formattedData = Object.keys(ApiData).reduce((acc, key) => {
                if (key.startsWith("plant")) {
                    const plant = ApiData[key];
                    const { environment, preferences, care } = plant;
                    //converting values true to 10 and false to 0, so it is easier to compare with user data
                    const convertValue = (value) => (value === true ? 10 : value === false ? 0 : value);
                    //converting data to array
                    acc[key] = [
                        ...Object.values(environment).map(convertValue),
                        ...Object.values(preferences).map(convertValue),
                        ...Object.values(care).map(convertValue),
                    ];
                }
                return acc;
            }, {});

            setPlantData(JSON.stringify(formattedData));

            // Automatically call knn.learn for each plant
            Object.keys(formattedData).forEach(plantKey => {
                knn.learn(formattedData[plantKey], plantKey);})

            // Classify plant using the knn
            let classifiedPlant = knn.classify(inputValues)
            setPrediction(classifiedPlant);

            // Fetch prediction data based on the classified plant
            setPredictionData(JSON.stringify(ApiData[classifiedPlant]));

        } catch (error) {
            console.log("There is a problem loading the data", error);
        }
    }


    return (
        <ContainerGreen>
            {/*<Text>This is the prediction: {plantData}</Text>*/}
            <Text>This is the prediction: {prediction}</Text>
            <Text>This is the prediction data: {predictionData}</Text>
            <Text>This is the prediction data: {inputValues}</Text>
            <Pressable onPress={makePrediction}>
                <Text>classify prediction</Text>
            </Pressable>
            <ScrollView>
                {inputValues.map((value, index) => (
                    <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TextInput
                            value={String(value)}
                            onChangeText={(text) => handleInputChange(index, text)}
                            keyboardType="numeric"
                            style={{ borderWidth: 1, margin: 5, padding: 5 }}
                        />
                    </View>
                ))}
            </ScrollView>
            <Footer navigation={navigation} />
        </ContainerGreen>
    )
};
export default Verken;
