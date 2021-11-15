import React, {useState} from 'react'
import { View, TouchableOpacity } from 'react-native'
import { 
    Container,
    Left,
    Header,
    Content,
    ListItem,
    Text,
    Radio,
    Right,
    Icon,
    Body, 
    Title ,
    Picker
} from 'native-base'

const methodsOfPayment = [
    {name:'COD - Cash on Delivery', value:1},
    {name:'Bank Transfer', value:2},
    {name:'Card Payment', value:3},
]

const paymentCard = [
    {name:'Wallet', value:1},
    {name:'Visa', value:2},
    {name:'Master Card', value:3},
    {name:'Other Method', value:4},
    
]
function Payment(props) {
    
    
    const order = props.route.params;
    // console.log("payment screen",props.route.params)

    const [selected, setSelected] = useState();
    const [card, setCard] = useState();

    const paymentConfirm = () =>{
        if (selected !==undefined || card !==undefined){
            // props.navigation.navigate('Confirm', order)
        
            props.navigation.navigate("Confirm", {order:order})

            
        }
    }
    return (
       <Container>
           <Header style={{backgroundColor:'#f4978e'}}>
               <Body>
                   <Title>Choose Title Payment Method</Title>
               </Body>
           </Header>
               <Content>
                   {methodsOfPayment.map((item,index)=>{              
                       return(
                           <ListItem key={item.name} onPress={()=>{setSelected(item.value)}}>
                               <Left>
                                   <Text>
                                   {item.name}
                                   </Text>
                               </Left>
                               <Right>
                                   <Radio selected={selected===item.value} />
                               </Right>
                           </ListItem>
                       )
                   })}
                   {selected === 3 ?(
                       <Picker 
                       mode="dropdown"
                       iosIcon={<Icon color={'#007aff'} name={'arrow-down'} />}
                       style={{backgroundColor:'#ffdab9'}}
                       selectedValue={card}
                       onValueChange={(x)=>setCard(x)}>
                           {paymentCard.map((c,index)=>{
                               return(
                                   <Picker.item key={c.name} label={c.name} value={c.name} />
                               )
                           })}
                       </Picker>
                   ):null}
                   <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
                       <TouchableOpacity 
                       style={{backgroundColor:'pink', width:100, height:50, borderRadius:10}} 
                       onPress={()=>{paymentConfirm()}}>
                           <Text style={{textAlign:'center',marginTop:10}}>
                               Confirm
                           </Text>
                       </TouchableOpacity>
                   </View>
               </Content>
                  
       </Container>
    )
}

export default Payment
