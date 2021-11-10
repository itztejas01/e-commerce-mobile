import React, {useState, useEffect} from 'react'
import { Image, StyleSheet, Dimensions, View, ScrollView } from 'react-native'
import Swiper from 'react-native-swiper/src'

var {width} = Dimensions.get('window')

function Banner() {
    const [bannerData, setBannerData] = useState([]);

    useEffect(()=>{
        setBannerData([
            "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8dmlkZW8sZ2FtZXx8fHx8fDE2MzYzNTU5MDU&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600",
        "https://images.unsplash.com/photo-1555864400-cc47dd93d427?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8dmlkZW8sZ2FtZXx8fHx8fDE2MzYzNTU4NTM&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600",
        "https://images.unsplash.com/photo-1533236098109-273df099b421?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8dmlkZW8sZ2FtZXN8fHx8fHwxNjM2MzU1ODAy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600"])

        return () =>{
            setBannerData([])
        }
    },[])

    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.swiper}>
                <Swiper 
                style={{height: width / 2}}
                showButtons={false}
                autoplay={true}
                autoplayTimeout={2}
                
                >
                {bannerData.map((item)=>{
                    return(
                        <Image
                        key={item}
                        style={styles.imageBanner}
                        resizeMode='contain'
                        source={{uri: item}}
                        
                        />
                    );
                })}
                </Swiper>
                <View style={{height:20}}>

                </View>
            </View>
        </View>
        </ScrollView> 
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'#ffef9f'
        // width: width
    },
    swiper:{
        width:width ,
        // alignItems:'center',
        marginTop:25,

    },
    imageBanner:{
        height:width / 2, 
        width: width - 40,
        borderRadius:10,
        marginHorizontal:20
    }
})

export default Banner
