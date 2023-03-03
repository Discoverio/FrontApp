import React from "react";
import { View, Text } from "react-native";
import s from './../assets/styles/globalStyles';

export const HeaderApp = () => {
    return (
    /* A comment. */

        <View>
            <View style={[s.primarybackgroundColor, s.center, s.w100]}>
                <Text style={[s.secondaryColor, s.fs36, s.p2]}>Discover.io</Text>
            </View>
        </View>
    )
}

export default HeaderApp;