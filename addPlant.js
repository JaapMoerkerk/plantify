import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import t from 'tcomb-form-native';
import db from '@react-native-firebase/database';

const Form = t.form.Form;

const Plant = t.struct({
name: t.String,
image: t.String,
location: t.String,
description: t.String
});

const createPlant = async () => {
    db().ref(`/stekjes/`)
}

const AddPlant = ({ navigation }) => {
return(
<View>
<Form type={Plant}/>
</View>
);
}

export default AddPlant;