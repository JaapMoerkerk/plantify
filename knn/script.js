import {useState} from "react";
import {Pressable, Text, View} from "react-native";
//plant data is not yet loaded correctly, doesnt work yet but no errors xoxo.
const KnnVerken = () => {
    const [plantData, setPlantData] = useState("plant data is missing")

    async function loadAPI() {
        try {
            const response = await fetch("https://stud.hosted.hr.nl/1064361/stekkie/data.json");
            console.log(response)
            let ApiData = JSON.parse(await response.text())
            setPlantData(JSON.stringify(ApiData))
        } catch (error) {
            console.log("there is a problem loading the data", error)
        }
    }

    return (
        <View>
            <Text>This is the api: {plantData}</Text>
            <Pressable onPress={loadAPI}>
                <Text>load api</Text>
            </Pressable>
        </View>
    );
};

export default KnnVerken;
