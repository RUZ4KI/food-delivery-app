import {Text, SafeAreaView, Image, View, TextInput} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
// import deliveryLogo from '../../food_delivery_app/assets/delivery_icon.avif';

const Home = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView className="bg-white">
      <View className="flex-row pb-4 items-center mx-4 space-x-2">
        <Image
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          source={{
            uri: 'https://links.papareact.com/wru',
          }}
        />
        <View className="flex-1">
          <Text className="font-bold text-xs text-gray-400">Delivery Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
      <View className="mx-4 flex-row items-center space-x-2 pb-4">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput placeholder="Search Icecream" keyboardType="default" />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>
    </SafeAreaView>
  );
};

export default Home;
