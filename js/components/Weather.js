import React, { Component } from 'react';
import { getForecast } from '../utils/getForecast';
import { getNextThreeDays } from '../utils/getDate';
import { Text, View } from 'react-native';
// import '../../css/components/Weather.scss';

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
            <View className="Weather">
                <View className="Weather--day Weather--today">
                    <Text className="Weather--day__title">{'Today'}</Text>
                    {highs[0] && <Text>{'High: ' + highs[0] + '°F'}</Text>}
                    {lows[0] && <Text>{ 'Low: ' +  lows[0] + '°F'}</Text>}
                    {weatherText[0] && <Text>{weatherText[0]}</Text>}
                </View>
                <View className="Weather--day">
                    {nextThreeDays[0] && <Text className="Weather--day__title">{nextThreeDays[0]}</Text>}
                    {highs[1] && <Text>{'High: ' + highs[1] + '°F'}</Text>}
                    {lows[1] && <Text>{ 'Low: ' +  lows[1] + '°F'}</Text>}
                    {weatherText[1] && <Text>{weatherText[1]}</Text>}
                </View>
                <View className="Weather--day">
                    {nextThreeDays[1] && <Text className="Weather--day__title">{nextThreeDays[1]}</Text>}
                    {highs[2] && <Text>{'High: ' + highs[2] + '°F'}</Text>}
                    {lows[2] && <Text>{ 'Low: ' +  lows[2] + '°F'}</Text>}
                    {weatherText[2] && <Text>{weatherText[2]}</Text>}
                </View>
                <View className="Weather--day">
                    {nextThreeDays[2] && <Text className="Weather--day__title">{nextThreeDays[2]}</Text>}
                    {highs[3] && <Text>{'High: ' + highs[3] + '°F'}</Text>}
                    {lows[3] && <Text>{ 'Low: ' +  lows[3] + '°F'}</Text>}
                    {weatherText[3] && <Text>{weatherText[3]}</Text>}
                </View>
            </View>
        );
    }
}
