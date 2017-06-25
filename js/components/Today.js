import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';
import { getDateToday } from '../utils/getDate';
// import '../../css/components/Today.scss';

const Today = () => {
    const fullDate = getDateToday();

    return(
        <View className="Date">
            <Text>{fullDate}</Text>
        </View>
    );
};

export default Today;
