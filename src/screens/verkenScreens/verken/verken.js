import React, {useState, useEffect} from 'react';
import {View, Text, Alert, Button, TextInput, ScrollView, Pressable, Image} from "react-native";
import Container from '../../../components/containerRed/containerRed.js';
import Navbar from '../../../components/navbar/navbar.js';
import ButtonBox from '../../../components/button-box/buttonBox.js';
import Footer from '../../../components/footer/footer.js';
import styles from './verkenStyle';
import kNear from "./knear";
import SwipeBox from "../../../components/swipeBox/SwipeBox";
import swipeOptions from './swipeoptions.json';
import title from "react-native-paper/src/components/Typography/v2/Title";

/**
 * Bij verkenScreens kan je alle onderdelen vinden die te maken hebben de Plantverkennert,
 * die voorheen plantswiper heette.
 */

const Verken = ({navigation}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [results, setResults] = useState([]);

    const imgUrl = `https://stud.hosted.hr.nl/1064361/stekkie/`;

    useEffect(() => {
        Alert.alert(
            "Welkom bij de Plantverkennert.",
            "We laten je een aantal plaatjes zien. Herken jij deze meme/het probleem? " +
            "Swipe naar rechts. Zo niet, swipe naar links. Wij vinden jouw ideale plant!",
            [{text: 'Begrepen!'}]
        )
    }, []);

    const handleSwipe = (direction) => {
        const currentOption = swipeOptions[`option${currentIndex + 1}`];
        if (direction === 'left') {
            setResults([...results, currentOption.not_rel_value]);
        } else {
            setResults([...results, currentOption.rel_value]);
        }

        if (currentIndex < Object.keys(swipeOptions).length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handleSwipeLeft = () => {
        handleSwipe('left');
    };

    const handleSwipeRight = () => {
        handleSwipe('right');
    };

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
                    const {environment, preferences, care} = plant;
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
                knn.learn(formattedData[plantKey], plantKey);
            })

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
        <Container>
            <Navbar/>
            {currentIndex < Object.keys(swipeOptions).length ? (
                <View style={{alignItems: 'center', flex: 2}}>
                    <SwipeBox
                        text={`${swipeOptions[`option${currentIndex + 1}`].id}`}
                        img={`${imgUrl}${swipeOptions[`option${currentIndex + 1}`].image_path}`}
                        onSwipeLeft={handleSwipeLeft}
                        onSwipeRight={handleSwipeRight}
                    />
                    <View style={{flex: 2, flexDirection: 'row', justifyContent: 'space-between', width: '90%', height: '20%'}}>
                        <Image source={require('../../../../assets/red-cross.png')} style={{width: 40, height: 40}}/>
                        <Image source={require('../../../../assets/green-check.png')} style={{width: 40, height: 40}}/>
                    </View>
                </View>
            ) : (
                <View style={{padding: 20}}>
                    <Text>All cards have been swiped!</Text>
                    <Button
                        title="Klik hier voor jouw perfecte plant!"
                        onPress={() => Alert.alert('Results', `Results: ${results.join(', ')}`)}
                    />
                </View>
            )}
            <Footer/>
        </Container>
    );

};
export default Verken;
