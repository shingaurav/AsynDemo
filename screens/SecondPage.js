import React, { Component } from 'react';
import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native';
import AsyncStorage from "@react-native-community/async-storage"

export default class SecondPage extends Component {
  constructor(props){
    super(props)
    //set value in state for initial date
    this.state = {
      data : ""
    }
    this.setDataFromStorage();
  }

// componentDidMount(){
   
// }



 setDataFromStorage = async () => {
  try {
    const cardData = await AsyncStorage.getItem('cardData')
    console.log("hagkjgfkajgkjagkglalg",cardData )
    if (cardData) {
     this.setState({data: JSON.parse(cardData)})
    }
  } catch (e) {
    console.log("Failed to fetch the data from storage", e)
  }
}

componentWillUnmount(){
this.clearData()
}

clearData = async () => {
  try {
    await AsyncStorage.setItem("cardData", null)
  } catch (e) {
    console.log("Failed to clear the data to the storage")
  }
}
  render() {
    const {data} = this.state
    console.log("bkjhlkn", this.state.data)
    return (
      <View style = {styles.container}>
        <View style = {{flex : 0.5,padding:20 }}>
          <Text style = {styles.headingText}> My Personal Card</Text>
          
       
        <View style = {{flexDirection:'row'}}>
         
        <View style = {{flex:1,marginTop:20}}>
        <Text style = {styles.subHeading}>Card Number</Text>

        <Text>
              {data.cardNumber}
          </Text>
       
          
          
            
         
        </View>
        <View style = {{flex:1,marginTop:20}}>
        <Text style = {styles.subHeading}>Exp.</Text>
        </View>
         
        
        </View>

        
       
        <View style = {{flexDirection:'row'}}>
         
         <View style = {{flex:1}}>
         <Text style = {styles.subHeading}>Card holder name</Text>
           
         <Text>
              {data.cardHolder}
          </Text>
             
          
         </View>
         <View style = {{flex:1}}>
         <Text style = {styles.subHeading}>CVV / CVC</Text>
         <Text>
              {data.date}
          </Text>
         </View>
          
         
         </View>
 
         <View style = {{marginTop:20,}}>
                <TouchableOpacity style = {styles.btnStyle}
                onPress = {()=>this.props.navigation.navigate("SecondPage")}>
                  <Text style = {{alignSelf:'center', color:'blue'}}>Edit details</Text>
                  

                </TouchableOpacity>
              </View>
       
        </View>
       
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
     
  },
  headingText:{

    color:'black' , fontSize:22,fontWeight :'800'
  },
  subHeading:{

    color:'black' , fontSize:15,fontWeight :'500',marginTop:50
  },
  textInput:{
    height : 60 , borderRadius:5,borderWidth:0.5,marginTop : 10,borderColor:'grey',backgroundColor:'white'
  },
  btnStyle : {
    height : 60 , borderRadius: 5, backgroundColor:'grey',alignItems:'center',justifyContent:'center'
  }

});