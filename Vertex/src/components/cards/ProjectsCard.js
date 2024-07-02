import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { ButtonStyles, ButtonText, TextStyles, cardStyle } from '../../theme/Theme';

const ProjectsCard = ({ project, onViewDetails }) => {
  return (
    <View style={cardStyle.projectItem}>
      <Text style={TextStyles.Heading}>{project.name}</Text>
      <Text style={TextStyles.Text}>{project.description}</Text>
      <TouchableOpacity style={[style.Buttons , ButtonStyles.ButtonColor]}> 
        <Text style={ButtonStyles.ButtonText}> View Detail</Text>
      </TouchableOpacity>
    </View>
  );
};
const style = StyleSheet.create({
  Buttons:
  {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 10,
    marginTop: '5%',
    alignSelf:'center'

  },
})
export default ProjectsCard;
