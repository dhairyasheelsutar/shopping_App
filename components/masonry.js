import React  from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Image,FlatList} from 'react-native';
import Masonry from "react-native-masonry-list"
import {CATEGORIES} from "../dummydata/dummydata"
import Grid from "./gridscreen"
import MasonaryList from 'react-native-masonry-list'

// function Dummydata(props){

//   const renderGridItem=(itemData)=>{
//     return <Grid title={itemData.item.title} url={itemData.item.url} color={itemData.item.color} heights={itemData.item.height} price={itemData.item.price} onSelect={()=>{alert("you click on fruit")}}/>
//   }
//   return(
//     <FlatList  keyExtractor={(item,index)=>{item.id}} data={CATEGORIES} renderItem={
//       renderGridItem} numColumns={2}/>
//   )

// }

function Masonary() {
  return (
    <MasonaryList 
      images={[
        { source: require('../assets/avocado.png'), dimensions: { width: 100 } },
        { source: require('../assets/kiwi.png'), dimensions: { width: 100 } },
      ]}
    />
  );
}
export default Masonary;
