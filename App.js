import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Api from './Api';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { memos: [] };
    this.userId = 1;
    this.getMemos();
  }

  getMemos() {
    var self = this;
    Api
      .getMemosByUser(this.userId)
      .then(memos => {
        console.log(memos.data);
        self.setState({ memos: memos.data }, () => {
          console.log(self.state.memos);
        });
      })
      .catch(console.error);
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.memos}
          renderItem={({item}) => <Text>{item.title}</Text>}
          keyExtractor={memo => memo._id}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  memo: {
    backgroundColor: '#ddd',
    margin: '20px'
  }
});
