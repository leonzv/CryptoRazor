import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import useColorScheme from 'react-native/Libraries/Utilities/useColorScheme'
import {COLORS, SIZES, FONTS, icons} from "../constants"

const PriceAlert = ({customContainerStyle}) =>{
    return(
        <TouchableOpacity style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: SIZES.padding * 4.5,
            marginHorizontal: SIZES.padding,
            paddingHorizontal: SIZES.radius,
            paddingVertical: SIZES.padding,
            backgroundColor:  COLORS.white,
            borderRadius: SIZES.radius,
            ...customContainerStyle,
            ...styles.shadow
        }}>
            <Image
            source={icons.notification_color}
            style={{
                width: 30,
                height: 30,
            }}
            />
            <View style={{flex: 1, marginLeft: SIZES.radius}}>
                <Text style={{...FONTS.h3}}>
                   Definir alerta de preço
                </Text>
                <Text style={{...FONTS.body4}}>
                    Seja notificado quando suas moedas estiverem mudando
                </Text>
            </View>
            <Image
            source={icons.right_arrow}
            style={{
                width: 25,
                height: 25,
                tintColor: COLORS.gray,
            }}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    shadow:{
        elevation: 8,
    }
})

export default PriceAlert;
