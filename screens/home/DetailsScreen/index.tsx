import * as React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'
import { useGetPokemonByNameQuery } from '../../../utils/store/reducers/Apis/pokemon'
import { selectCounter } from '../../../utils/store/reducers/counter'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getData, getJwtToken, getUserData, storeData, storeJwtToken, storeUserData } from '../../../utils/AsyncStrorage'
import { JWt } from '../../../utils/AsyncStrorage/types'
import { useGetProfileQuery, useLazyGetProfileQuery, useLogInMutation } from '../../../utils/store/reducers/Apis/auth'
import Animated, { FadeIn, BounceInUp, BounceInRight } from 'react-native-reanimated'
import { AnimatedBox } from '../../../utils/AnimatedComponents'
///////////////////////////////THHHHHEME OF NATIVE BASE
interface DetailsScreenProps {}

const DetailsScreen = (props: DetailsScreenProps) => {
  const { data, error, isLoading } = useGetPokemonByNameQuery('1')
  const [token, setToken] = React.useState<string>('')
  const [LogInHandler, { data: userData, isLoading: isLoadingUser }] = useLogInMutation()
  const [getUserHandler, { data: dataTokenUserProfile }] = useLazyGetProfileQuery()

  return (
    <View>
      <TouchableOpacity
        onPress={async () => {
          /*  const JWTToken = await getData(JWt)
          setToken(JWTToken) */
        }}>
        <Text> Your Token is : {token}</Text>
      </TouchableOpacity>

      <Animated.Text entering={FadeIn.delay(1100)}> Details Screen</Animated.Text>
      <AnimatedBox entering={BounceInRight.duration(100)}>
        <Text>Details Screen</Text>
      </AnimatedBox>
      {error ? (
        <Text>Error</Text>
      ) : isLoading ? (
        <Text>loading</Text>
      ) : data ? (
        <>
          <Text>{data.category}</Text>
          <Text>{data.price}</Text>
          <Text>{data.thumbnail}</Text>
        </>
      ) : null}

      <TouchableOpacity
        onPress={async () => {
          await LogInHandler({
            password: '11112222',
            phone: '+201028803403'
          })
        }}>
        <Text>Auth With RTK QUERY LOGIN</Text>
      </TouchableOpacity>
      <Text style={{ color: 'green' }}>Data Back From RTK : {userData ? userData.token : 'LOADING'}</Text>
      <TouchableOpacity
        onPress={async () => {
          if (userData?.token) {
            await storeJwtToken(userData?.token)
            await storeUserData(userData.user)
          }
        }}>
        <Text>Store TOKEN </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={async () => {
          let token = await getJwtToken()
          if (token) {
            /*  await getUserHandler(token) */
            let da = await getUserData()
            /*  console.log(da) */
          }
        }}>
        <Text>FETCH PROFILE WITH TOKEN </Text>
      </TouchableOpacity>
      <Text>lalal {dataTokenUserProfile?.phone}</Text>
    </View>
  )
}

export default React.memo(DetailsScreen)
