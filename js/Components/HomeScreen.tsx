import React, { useState } from 'react'
import { Button, Dimensions, SafeAreaView, StyleSheet, View } from 'react-native'
import { parkingDataFormat, parkingDataRecordsFields } from '../Interfaces/ParkingData'
import { locationDataFormat, locationDataFields } from '../Interfaces/LocationData'
import MainButton from './MainButton'
import { shadows } from '../Shared/styles'
import ParkMap from './ParkMap'
import { apiKeys } from '../secrets/apikeys'

interface ParkingInfo {
  coord: [number, number]
  name: string
  address: string
  disponibility: number
}

interface GetParkingsProps {
  parkingsInfos: Array<ParkingInfo>
  setParkingsInfos: Function
}

async function GetParkings(parkingsInfos: Array<ParkingInfo>, setParkingsInfos: Function): Promise<void> {
  let parkingData: Response = await fetch(
    'https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_parkings-publics-nantes-disponibilites&q=&sort=grp_disponible&facet=grp_nom&facet=grp_statut'
  )
  let parkingDataJson: parkingDataFormat = await parkingData.json()
  for (let index = 0; index < parkingDataJson.parameters.rows; index++) {
    const parking: parkingDataRecordsFields = parkingDataJson.records[index].fields
    if (parking && parking.location && parking.location[0] !== undefined && parking.location[1] !== undefined) {
      const urlLocApi: string =
        'https://api.geoapify.com/v1/geocode/reverse?lat=' +
        parking.location[0] +
        '&lon=' +
        parking.location[1] +
        '&format=json&apiKey=' +
        apiKeys.geoapify
      const location = await fetch(urlLocApi)
      const locationJson: locationDataFormat = await location.json()
      const parkingLocation: locationDataFields = locationJson.results[0]
      const actualParking: ParkingInfo = {
        coord: parking.location,
        name: parking.grp_nom,
        address: parkingLocation.formatted,
        disponibility: parking.disponibilite
      }
      console.log(actualParking)
      setParkingsInfos([...parkingsInfos, actualParking])
    }
  }
  console.log(parkingsInfos)
}

export default function HomeScreen() {
  const [parkingsInfos, setParkingsInfos] = useState<Array<ParkingInfo>>([])
  const [actualParking, setActualParking] = useState<ParkingInfo>()
  let window = Dimensions.get('screen')

  const call = async () => {
    fetch(
      'https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_parkings-publics-nantes-disponibilites&q=&sort=grp_disponible&facet=grp_nom&facet=grp_statut'
    )
      .then((parkingData: Response) => {
        parkingData.json().then((parkingDataJson: parkingDataFormat) => {
          for (let index = 0; index < parkingDataJson.parameters.rows; index++) {
            const parking: parkingDataRecordsFields = parkingDataJson.records[index].fields
            if (parking && parking.location && parking.location[0] !== undefined && parking.location[1] !== undefined) {
              const urlLocApi: string =
                'https://api.geoapify.com/v1/geocode/reverse?lat=' +
                parking.location[0] +
                '&lon=' +
                parking.location[1] +
                '&format=json&apiKey=530708f842cd4b78ba07aba82c5fa0ad'
              fetch(urlLocApi)
                .then((location) => {
                  location
                    .json()
                    .then((locationJson: locationDataFormat) => {
                      const parkingLocation: locationDataFields = locationJson.results[0]
                      setActualParking({
                        coord: parking.location,
                        name: parking.grp_nom,
                        address: parkingLocation.formatted,
                        disponibility: parking.disponibilite
                      })
                      if (actualParking) setParkingsInfos([...parkingsInfos, actualParking])
                    })
                    .catch((error) => console.log(error))
                })
                .catch((error) => console.log(error))
            }
          }
        })
      })
      .catch((error) => console.log(error))
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <MainButton
          text="Recharger"
          color="#175676"
          textColor="#F3E9D2"
          width={window.width / 2.5}
          style={styles.reloadButtonStyle}
          onPressFunc={() => console.log('hey')}
        />
        <View
          style={[
            {
              height: window.height / 2 - window.width / 2.5,
              width: window.height / 2 - window.width / 2.5
            },
            shadows.mainShadow,
            styles.mapView
          ]}>
          <ParkMap />
        </View>
      </View>
      <View style={styles.bottomView}></View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: '#F3E9D2',
    justifyContent: 'center'
  },
  topView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  bottomView: {
    flex: 1,
    backgroundColor: 'magenta'
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center'
  },
  reloadButtonStyle: {
    alignSelf: 'center'
  },
  mapView: {
    backgroundColor: 'black',
    borderRadius: 20
  }
})
