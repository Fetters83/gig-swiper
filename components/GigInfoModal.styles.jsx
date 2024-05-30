import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      width: '100%',
      height: '100%'
    },
    header: {
      fontSize: 20,
    },
    text: {
      fontSize: 14,
    },
    modalCenter: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#00000080',
    },
    modalOuter: {
      margin: 20,
      backgroundColor: '#dde',
      borderRadius: 10,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      height: 500,
      shadowOffset: {
        width: 0,
        height: 2,
      }
    },
    topImage: {
      width: '100%',
      height: 200,
      objectFit: 'cover',
    },
    topImageContainer: {
      width: '100%',
    },
    marginVert: {
      marginVertical: 10,
    },
    padding: {
      padding: 10,
    },
    fullWidth: {
      width: '100%',
    },
    descriptionWidth:{
   width: "60%"
    },
    largeText: {
      fontSize: 24,
    },
    mediumText: {
      fontSize: 18,
    },
    smallText: {
      fontSize: 16,
    },
    row: {
      flexDirection: 'row',
    },
    spaceBetween: {
      justifyContent: 'space-between',
      // alignItems: 'space-between'
    },
    closeButton: {
      position: 'absolute',
      right: 10,
      top: 20,
    },
    closeButtonImage: {
      width: 50,
      height: 50,
    },
    darkerBackground: {
      backgroundColor: '#ccc',
    },
    dateBox: {
      alignItems: 'center',
    },
    border: {
      borderWidth: 2,
    }
  
  });
  