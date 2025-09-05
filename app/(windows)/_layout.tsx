import React from 'react';
import {StyleSheet, View, Text, ImageBackground, Image} from 'react-native';
import {Tabs} from "expo-router";
import {images} from "@/assets/constants/images";
import {icons} from "@/assets/constants/icons";

// create component
const TabiIcon=()=>{
    return(
        <ImageBackground
            source={images.highlight}
            // className="flex flex-row w-full flex-1 min-w[112px] min-h-14 mt-4 justify-center items-center
            // rounded-full overflow-hidden"
            className="flex flex-row w-[120px] min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"
        >
            <Image source={icons.home}
                   tintColor="#151312" className="size-5"/>

            <Text className="text-secondary text-base font-semibold" >Home</Text>
        </ImageBackground>
    )
}

const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen
            name="index"
            options={{
                title: 'Home',
                headerShown: false,
                tabBarIcon:({ focused }) => (
                    <TabiIcon/>
                )
            }}
        />
        <Tabs.Screen
            name="search"
            options={{
                title: 'Search',
                headerShown: false,
            }}
        />
        <Tabs.Screen
            name="saved"
            options={{
                title: 'Saved',
                headerShown: false,
            }}
        />
        <Tabs.Screen
            name="profile"
            options={{
                title: 'Profile',
                headerShown: false,
            }}
        />
    </Tabs>
  );
};

const styles = StyleSheet.create({});

export default _layout;