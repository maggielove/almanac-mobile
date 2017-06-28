import React, { Component } from 'react';
import { getForecast } from '../utils/getForecast';
import { getNextThreeDays } from '../utils/getDate';
import { Text, View, StyleSheet } from 'react-native';

export default class Weather extends Component {
    constructor(props){
        super(props);

        this.state = {
            highs: [],
            lows: [],
            weatherText: [],
            errorMessage: ''
        }

        this.getWeatherToday = this.getWeatherToday.bind(this);
        this.handleSuccess = this.handleSuccess.bind(this);
        this.handleFailure = this.handleFailure.bind(this);
    }

    componentDidMount() {
        this.getWeatherToday();
    }

    getWeatherToday() {
        getForecast()
        .then(this.handleSuccess)
        .catch(this.handleFailure);
    }

    handleSuccess(response) {
        const textForecast = response.data.forecast.txt_forecast;
        const simpleForecast = response.data.forecast.simpleforecast;
        const forecastToday = simpleForecast.forecastday[0];
        const firstThreeDayForecast = simpleForecast.forecastday[1];
        const secondThreeDayForecast = simpleForecast.forecastday[2];
        const thirdThreeDayForecast = simpleForecast.forecastday[3];

        this.setState({
            highs: [ forecastToday.high.fahrenheit, firstThreeDayForecast.high.fahrenheit, secondThreeDayForecast.high.fahrenheit, thirdThreeDayForecast.high.fahrenheit ],
            lows: [ forecastToday.low.fahrenheit, firstThreeDayForecast.low.fahrenheit, secondThreeDayForecast.low.fahrenheit, thirdThreeDayForecast.low.fahrenheit ],
            weatherText: [ textForecast.forecastday[0].fcttext, textForecast.forecastday[1].fcttext, textForecast.forecastday[2].fcttext, textForecast.forecastday[3].fcttext ]
        })
    }

    handleFailure(reason) {
        this.setState({
            errorMessage: reason.message
        })
    }

    render() {
        const { highs, lows, weatherText, errorMessage } = this.state;
        const nextThreeDays = getNextThreeDays();

        return (
            <View style={styles.wrappingDiv}>
                <View style={styles.todayView}>
                    {highs[0] && lows[0] && <Text style={styles.overview}>{`${highs[0]} °F / ${lows[0]} °F`}</Text>}
                    {weatherText[0] && <Text style={styles.info}>{weatherText[0]}</Text>}
                </View>
                <View style={styles.threeDayView}>
                    {nextThreeDays[0] && <Text style={styles.threeDayText}>{nextThreeDays[0]}</Text>}
                    {highs[1] && lows[1] && <Text style={styles.threeDayText}>{`${highs[1]} °F / ${lows[1]} °F`}</Text>}
                </View>
                <View style={styles.threeDayView}>
                    {nextThreeDays[1] && <Text style={styles.threeDayText}>{nextThreeDays[1]}</Text>}
                    {highs[2] && lows[2] && <Text style={styles.threeDayText}>{`${highs[2]} °F / ${lows[2]} °F`}</Text>}
                </View>
                <View style={styles.threeDayView}>
                    {nextThreeDays[2] && <Text style={styles.threeDayText}>{nextThreeDays[2]}</Text>}
                    {highs[3] && lows[3] && <Text style={styles.threeDayText}>{`${highs[3]} °F / ${lows[3]} °F`}</Text>}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrappingDiv: {
        marginTop: 20,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    overview: {
        fontSize: 16,
        paddingBottom: 25,
        textAlign: 'center'
    },
    info: {
        paddingRight: 20,
        paddingLeft: 20,
        fontSize: 14,
        lineHeight: 21
    },
    todayView: {
        paddingTop: 20,
        height: 200,
        borderWidth: 1,
        borderColor: 'black'
    },
    threeDayView: {
        alignSelf: 'stretch',
        marginTop: 10,
        marginBottom: 10,
        paddingTop: 20,
        height: 70,
        borderWidth: 1,
        borderColor: 'black'
    },
    threeDayText: {
        textAlign: 'center'
    }
});
