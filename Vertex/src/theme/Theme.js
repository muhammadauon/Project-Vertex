import { View, Text, StyleSheet, Button } from 'react-native';
export const ButtonStyles = StyleSheet.create({
    ButtonColor:
    {
        backgroundColor: '#0077b6',
        
    },
    ButtonText: {
      fontWeight: 'bold',
      color: 'white',
    },
})
export const Inputstyles = StyleSheet.create({
    input: {
        width: '95%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
      },
})
export const cardStyle = StyleSheet.create({
    projectItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 3,
      },
      
})
export const TextStyles = StyleSheet.create ({
  Heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  Text: {
    color: 'gray',
    marginBottom: 10,
  },
  MainHeading:
  {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0077b6',
  }
})

