import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Text, Left, Right, ListItem, Thumbnail, Body} from 'native-base';

function CartItems(props) {
  const data = props.item.item.product;
  const [quantity, setQuantity] = useState(props.item.quantity);
  return (
    <ListItem key={Math.random()} style={styles.listItem} avatar>
      <Left>
        <Thumbnail
          source={{
            uri: data.image
              ? data.image
              : 'https://images.unsplash.com/photo-1491926626787-62db157af940?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8aG9tZSxmdXJuaXR1cmV8fHx8fHwxNjM2MTczOTI2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600',
          }}
        />
      </Left>
      <Body style={styles.body}>
        <Left>
          <Text>{data.name}</Text>
        </Left>
        <Right>
          <Text>Rs.{data.price}</Text>
        </Right>
      </Body>
    </ListItem>
    // <Text></Text>
  );
}

const styles = StyleSheet.create({
    listItem:{
        alignItems:'center',
        backgroundColor:'white',
        justifyContent:'center'
    },
    body:{
        margin: 10,
        alignItems:'center',
        flexDirection: 'row'
    },

})


export default CartItems;
