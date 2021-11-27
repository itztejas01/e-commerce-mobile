import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, Dimensions, View, ScrollView, Text} from 'react-native';
// import Swiper from 'react-native-swiper/src';

var {width, height} = Dimensions.get('window');

function Banner() {
//   const [bannerData, setBannerData] = useState([]);
  const [imageActive, setImageActive] = useState(0);

  const images = [
    'https://images.unsplash.com/photo-1535303311164-664fc9ec6532?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8dmlkZW8sZ2FtZXx8fHx8fDE2MzYzNTU5MDU&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600',
    'https://images.unsplash.com/photo-1555864400-cc47dd93d427?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8dmlkZW8sZ2FtZXx8fHx8fDE2MzYzNTU4NTM&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600',
    'https://images.unsplash.com/photo-1533236098109-273df099b421?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8dmlkZW8sZ2FtZXN8fHx8fHwxNjM2MzU1ODAy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600',
  ]

 const onchange = (nativeEvent) =>{
    if(nativeEvent){
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);

        if(slide !== imageActive){
            setImageActive(slide)
        }
    }
 }

  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <ScrollView onScroll={({nativeEvent})=>onchange(nativeEvent)}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        style={styles.wrap}
        >
            {images.map((image,index)=>{
                return(
                    <Image
                    key={image}
                    resizeMode='stretch'
                    style={styles.imageBanner}
                    source={{uri:image}}
                    
                    />
                )
            })}
        </ScrollView>
        <View style={styles.wrapDot}>
            {
                images.map((image,index)=>{
                    // console.log('index : ',index)
                    return(
                    <Text key={image}
                    style={imageActive == index ? styles.dotActive : styles.dot}
                    >
                        &#x25cf;
                        
                    </Text>
                    )
                })
            }
           
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrap: {
    width: width,
    marginTop: 10,
    marginBottom:10
  },
  imageBanner: {
    height: width / 2,
    width: width - 40,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  wrapDot:{
      position:'absolute',
      bottom:0,
      flexDirection:'row',
      alignSelf:'center'
  },
  dotActive:{
    margin:3,
    color:'black',

  },
  dot:{
      margin:3,
      color:'white'

  }
});

export default Banner;
