// const getLocation = async () => {
//   dispatch(setLoading(true));
 

//   let { status } = await Location.requestForegroundPermissionsAsync();
//   if (status !== 'granted') {
//     dispatch(showToast('Permission to access location was denied'));
//     setIsLocationAvailable(false);
//     dispatch(setLoading(false));
//     return;
//   }

//   try {
//     let location = await Location.getCurrentPositionAsync({});
//     dispatch(setUserCoordinates(location.coords));

//     const response = await axios.get('https://nominatim.openstreetmap.org/reverse', {
//       params: {
//         lat: location.coords.latitude,
//         lon: location.coords.longitude,
//         format: 'json',
//         addressdetails: 1,
//       },
//     });

//     if (response.data && response.data.address) {
//       const addressParts = [
//         response.data.address.road,
//         response.data.address.neighbourhood,
//         response.data.address.subdistrict,
//       ];
//       const detailedAddress = addressParts.filter(part => part).join(', ');
//       setAddress(detailedAddress);
//       setIsLocationAvailable(true);
//     } else {
//       setErrorMsg('Unable to get address from location');
//       setIsLocationAvailable(false);
//       dispatch(showToast("something went wrong"));
//     }
//   } catch (error) {
//     setErrorMsg('Unable to get address from location');
//     setIsLocationAvailable(false);
//     dispatch(showToast("something went wrong"));
//     console.error(error);
//   } finally {
//     dispatch(setLoading(false));
//   }
// };
