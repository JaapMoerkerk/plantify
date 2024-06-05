import {useState} from "react";
import {Pressable, Text, View} from "react-native";
import kNear from "./knear.js"

const KnnVerken = () => {

    const k = 3
    const knn = new kNear(k);
    let formattedData;
    const [plantData, setPlantData] = useState("plant data is missing")
    const [prediction, setPrediction] = useState("there has no prediction been done yet")


    async function loadAPI() {
        try {
            const response = await fetch("https://stud.hosted.hr.nl/1064361/stekkie/data.json");
            console.log(response)
            let ApiData = await response.json()

            formattedData = Object.keys(ApiData).reduce((acc, key) => {
                if (key.startsWith("plant")) {
                    const plant = ApiData[key];
                    const { environment, preferences, care } = plant;
                    //converting values true to 10 and false to 0 so its easier to compare with user data
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

                setPrediction(knn.classify([4,9,2,7,0,8,2,8,6,5,7,4,8,1,8]))
        } catch (error) {
            console.log("There is a problem loading the data", error);
        }
    }



        return (
        <View>
            <Text>This is the api: {plantData}</Text>
            <Text>This is the prediction: {prediction}</Text>

            <Pressable onPress={loadAPI}>
                <Text>load api</Text>
            </Pressable>

        </View>
    );
};

export default KnnVerken;
