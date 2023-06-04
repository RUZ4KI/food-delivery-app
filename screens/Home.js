import {Text, SafeAreaView, Image, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ChevronDownIcon} from 'react-native-heroicons/outline';
// import deliveryLogo from '../../food_delivery_app/assets/delivery_icon.avif';

const Home = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView>
      <View className="flex-row pb-4 items-center mx-4 space-x-2">
        <Image
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          source={{
            uri: 'https://links.papareact.com/wru',
          }}
        />
        <View>
          <Text className="font-bold text-xs text-gray-400">Delivery Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} />
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
