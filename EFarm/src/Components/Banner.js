import React, { Component } from 'react';
import { View,Text, StyleSheet,ScrollView, Dimensions, Image } from 'react-native'

const images = [
    'https://images.unsplash.com/photo-1535303311164-664fc9ec6532?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8dmlkZW8sZ2FtZXx8fHx8fDE2MzYzNTU5MDU&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600',
    'https://images.unsplash.com/photo-1555864400-cc47dd93d427?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8dmlkZW8sZ2FtZXx8fHx8fDE2MzYzNTU4NTM&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600',
    'https://images.unsplash.com/photo-1533236098109-273df099b421?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8dmlkZW8sZ2FtZXN8fHx8fHwxNjM2MzU1ODAy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600',
]

const {width, height} = Dimensions.get('window');

class Banner extends Component {
    
    scrollRef = React.createRef();
    
    constructor(props){
        super(props);
        this.state = {
            selectedIndex:0
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState(prev =>({selectedIndex: prev.selectedIndex === images.length - 1 ? 0 : prev.selectedIndex + 1 }),
            () => {
                this.scrollRef.current.scrollTo({
                    animated:true,
                    y:0,
                    x: width * this.state.selectedIndex
                })
            }
            )
        },3000)
    }

    setSelectedIndex = event =>{
        //width of the  viewSize 
        const viewSize = event.nativeEvent.layoutMeasurement.width;
        //get current position of the scrollview 
        const contentOffset = event.nativeEvent.contentOffset.x;

        const selectedIndex = Math.floor(contentOffset / viewSize)

        this.setState({selectedIndex})
    }
    render() {
        const {selectedIndex} = this.state
        return (
            <View style={styles.container}> 
            <View style={styles.wrap}>
               <ScrollView 
               horizontal 
               pagingEnabled
                showsHorizontalScrollIndicator={false} 
                onMomentumScrollEnd={this.setSelectedIndex}
                ref={this.scrollRef}
                >
                   {images.map((image,index)=>{
                   
                       return(
                           <Image
                           key={image}
                           source={{uri:image}}
                           resizeMode='cover'
                           style={styles.imageBanner}
                           
                           />
                       )
                   })}
               </ScrollView>
               <View style={styles.circleDiv}>
                   {images.map((image,index)=>{
                       
                       return(
                            <View key={image} style={[styles.whiteCircle, {opacity:index === selectedIndex ? 0.5 : 1}]} /> 
                        
                       )
                   })}
               </View>
               </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    imageBanner: {
        height: width / 2,
        width: width - 40,
        borderRadius: 10,
        marginHorizontal: 20,
    },
    wrap: {
        width: width,
        marginTop: 10,
        marginBottom:10
    },
    circleDiv:{
        position:'absolute',
        bottom:0,
        height:10,
        flexDirection:'row',
        // width:'100%',?
        justifyContent:'center',
        alignSelf:'center'
    },
    whiteCircle:{
        width:6,
        height:6,
        borderRadius:3,
        margin:5,
        backgroundColor:"#fff"
    }
})
export default Banner
