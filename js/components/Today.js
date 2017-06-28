import React, { PropTypes } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { getDateToday } from '../utils/getDate';

const Today = () => {
    const fullDate = getDateToday();

    return(
        <View style={styles.date}>
            <Text style={styles.dateText}>{fullDate}</Text>
        </View>
    );
};

export default Today;

const styles = StyleSheet.create({
    dateView: {
        flexDirection: 'row',
        width: 600,
        flex: 1
    },
    dateText: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 50
    }
});
