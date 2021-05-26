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
            <View>
                <Text>
                   {/* PAREI AQUI 45:21  */}
                </Text>
                <Text>

                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    shadow:{
        elevation: 8,
    }
})

export default PriceAlert;
