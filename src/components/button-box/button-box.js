import {Pressable, Text, View} from "react-native";
import styles from "../button-box/button-box-style";
import React from "react";

const buttonBox = () => {
    return (
<View style={styles.buttonsContainer}>
    <Pressable style={styles.footerButton}>
        <Text style={styles.footerButtonText}>terug naar post</Text>
    </Pressable>
</View>

    );
};
export default buttonBox;