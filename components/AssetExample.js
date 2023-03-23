import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        E-Mail: ishubham11anand@gmail.com{'\n'}
        Phone: +91-9097420804{'\n'}
        {'\n'}
        Full Stack Developer{'\n'}
        Currently Employed: Frontend Developer Intern at Skilzen.
      </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
    backgroundColor: '#3a4c43',
    height: 200,
  },
  paragraph: {
    margin: 24,
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#fff',
    wordWrap: 'breakWord',
  },
});
