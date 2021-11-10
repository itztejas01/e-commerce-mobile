import React, {useState, useEffect} from 'react';
import {StyleSheet,View, ScrollView, Dimensions} from 'react-native';
import {
Container,
  Header,
  Icon,
  Item,
  Input,
  Text,
} from 'native-base';
import ProductList from './ProductList';
import SearchProducts from './SearchProducts'
import Banner from '../../Components/Banner'
import CategoriesFilter from './CategoriesFilter'



const data = require('../../assets/data/products.json');
const productsCtg = require('../../assets/data/categories.json');
const {height} = Dimensions.get('window');

function ProductContainer(props) {

  const [products, setProducts] = useState([]);
  const [productsFiltered,setProductsFiltered] = useState([]);
  const [focus, setFocus] = useState();
  const [categories, setCategories] = useState([]);
  const [productsCategories, setProductsCategories] = useState([]);
  const [active,setActive] = useState();
  const [initialState, setInitialState] = useState([]);


  useEffect(() => {
    setProducts(data);
    setProductsFiltered(data);
    setFocus(false);
    setCategories(productsCtg);
    setProductsCategories(data);
    setActive(-1);
    setInitialState(data)
    
    return () => {
      setProducts([]);
      setProductsFiltered([]);
      setFocus()
      setCategories([]);
    setActive();
    setInitialState([])
    
  };
  }, []);

 const searchProduct = (text) =>{
   setProductsFiltered(
     products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
   )
 }
 const openList = () => {
   setFocus(true);
 }

 const onBlur = () => {
   setFocus(false);
 }

//  categories 

const changeCategory = (ctg) => {
  {
    ctg === "all"
      ? [setProductsCategories(initialState), setActive(true)]
      : [
        setProductsCategories(
          products.filter((i) => i.category.$oid === ctg),
          setActive(true)
        ),
      ];
  }
}

  return (

    <Container>
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input
          placeholder="Search"
          onFocus={openList}
          onChangeText = {(text) =>
            // console.log('value types:',text)
            searchProduct(text)
          } 
          />
          {focus === true ? (
            <Icon onPress={onBlur} name="ios-close" />
          ):null}
        </Item>
      </Header>
      {focus === true ? (
        <SearchProducts 
        navigation={props.navigation}
        productsFiltered={productsFiltered}
        />
      ):(
        <ScrollView>
        <View style={styles.container}>
        <View>
          <Banner />
        </View>
        <View>
          <CategoriesFilter 
          categories={categories}
          CategoriesFilter={changeCategory}
          productsCtg = {productsCategories}
          active = {active}
          setActive={setActive}
          />
        </View>
        {productsCategories.length > 0 ?(
           <View style={styles.listContainer}>
             {productsCategories.map((item)=>{
                return (
                  <ProductList
                  navigation={props.navigation}
                  key={item._id.$oid}
                  item={item}
                  
                  
                  />
                )
             })}
         </View>
        ):(
          <View style={[styles.center, {height: height / 2}]}>
            <Text style={{color:'black'}}>
              No products
            </Text>
          </View>
        )}
       
      </View>
      </ScrollView>
      )}
     
      </Container>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
  },
  listContainer:{
    width:'100%',
    height: height,
    flex:1,
    flexDirection:'row',
    alignItems:'flex-start',
    flexWrap:'wrap',
    marginLeft:15,
    marginTop:10
  },
  center:{
    justifyContent:'center',
    alignItems:'center'
  }
});

export default ProductContainer;
