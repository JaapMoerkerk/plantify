import React, {useState, useEffect} from 'react';
import {View, Text, Alert, Button, TextInput, ScrollView, Pressable, Image, ActivityIndicator} from "react-native";
import Container from '../../../components/containerGreen/containerGreen.js';
import Navbar from '../../../components/navbar/navbar.js';
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
    const [loading, setLoading] = useState(false);
    const [showSwipeBox, setShowSwipeBox] = useState(true);
    const [predictedPlant, setPredictedPlant] = useState(null);

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
        } else {
            setShowSwipeBox(false);
        }
    };

    const handleSwipeLeft = () => {
        handleSwipe('left');
    };

    const handleSwipeRight = () => {
        handleSwipe('right');
    };

//code for handling ai
    const k = 3;
    const knn = new kNear(k);
    const [plantData, setPlantData] = useState("Plant data is missing");
    const [prediction, setPrediction] = useState("No prediction has been made yet");
    const [predictionData, setPredictionData] = useState("Prediction data is missing");

    const makePrediction = async () => {
        setLoading(true);
        try {
            const response = await fetch("https://stud.hosted.hr.nl/1064361/stekkie/data.json");
            const ApiData = await response.json();

            // Format data to data we can use to call knn.learn on
            const formattedData = Object.keys(ApiData).reduce((acc, key) => {
                if (key.startsWith("plant")) {
                    const plant = ApiData[key];
                    const {environment, preferences, care} = plant;
                    // Converting values true to 10 and false to 0, so it is easier to compare with user data
                    const convertValue = (value) => (value === true ? 10 : value === false ? 0 : value);
                    // Converting data to array
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
            });

            // Classify plant using the knn with results array
            const classifiedPlant = knn.classify(results);
            setPrediction(classifiedPlant);

            // Set predicted plant data
            const predictedPlantData = ApiData[classifiedPlant];
            setPredictionData(predictedPlantData.name_dutch);


        } catch (error) {
            console.log("There is a problem loading the data", error);
        } finally {
            setLoading(false);
        }
    }

    const navigateToDashboard = () => {
        // Implement your navigation logic here
        navigation.navigate('Dashboard'); // Replace 'Dashboard' with your actual screen name
    };
    return (
        <Container>
            <Navbar/>
            {showSwipeBox ? (
                <View style={{alignItems: 'center', flex: 2}}>
                    <SwipeBox
                        text={`${swipeOptions[`option${currentIndex + 1}`].id}`}
                        img={`${imgUrl}${swipeOptions[`option${currentIndex + 1}`].image_path}`}
                        onSwipeLeft={handleSwipeLeft}
                        onSwipeRight={handleSwipeRight}
                    />
                    <View style={{
                        flex: 2,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '90%',
                        height: '20%'
                    }}>
                        <Image source={require('../../../../assets/red-cross.png')} style={{width: 40, height: 40}}/>
                        <Image source={require('../../../../assets/green-check.png')} style={{width: 40, height: 40}}/>
                    </View>
                </View>
            ) : (
                <View style={{alignItems: 'center', flex: 2, padding: 20}}>
                    <Text style={{color: 'white', fontSize: 20}}>Dat waren alle kaartjes.</Text>
                    <Pressable
                        title="Klik hier voor jouw perfecte plant!"
                        onPress={makePrediction}
                    >
                        <Text
                            style={{marginTop: 20, color: 'black', fontSize: 30, backgroundColor: '#d5e9bd', padding: 10, borderRadius: 20}}
                        >Klik hier voor jouw perfecte plant!</Text>
                    </Pressable>
                    {loading && <ActivityIndicator style={{marginTop: 20}} size="large" color="#0000ff"/>}
                    {!loading && prediction !== "No prediction has been made yet" && (
                        <View style={{justifyContent: 'center'}}>
                            <Text style={{marginTop: 20, color: 'white', fontSize: 25}}>De perfecte plant voor jou:</Text>
                            <Text style={{color: 'white', fontSize: 40}}>{predictionData}</Text>
                            <Pressable onPress={navigateToDashboard}>
                                <Text style={{marginTop: 20, color: 'black', fontSize: 30, backgroundColor: '#d5e9bd', padding: 10, borderRadius: 20}}>Terug naar dashboard</Text>
                            </Pressable>
                        </View>
                    )}
                </View>
            )}
            <Footer/>
        </Container>
    );
};

export default Verken;
