import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  container: {
    flex: 1,
    //justifyContent: 'center',
    paddingTop: 40,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 10
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  subtext: {
    fontSize: 15,
  },
  pai: {
    fontSize: 50,
  }
});

export default styles;
