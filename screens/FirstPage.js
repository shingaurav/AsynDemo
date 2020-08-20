import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableOpacity,TextInput, } from 'react-native';
import DatePicker from 'react-native-datepicker'
import AsyncStorage from "@react-native-community/async-storage"
export default class FirstPage extends Component {
  constructor(props){
    super(props)
    //set value in state for initial date
    this.state = {
       date:"20-08-2000",
      cardNumber : "",
      cardHolder : ""
    }
  }
  

  performAddToCard = async () => {
    try {
      const data = JSON.stringify(this.state)
      await AsyncStorage.setItem("cardData", data)
      console.log("abkjgbakjgba", this.state)
      this.props.navigation.navigate("SecondPage")
    } catch (e) {
      console.log("Failed to save the data to the storage ,", e)
    }
  }
  

  render() {
    return (
      
        <View style = {styles.container}>
           <View style = {{alignItems:'center',marginTop : 50}}>
             <Text style ={styles.headingText}>Add Credit Card</Text>
           
             <Text  style ={styles.subHeading}>The monkey-rope is found in all whalers; but it</Text>
             <Text  style ={styles.subHeading}>was only in the Pequod that the monkey and</Text>
           </View>
           <View style = {{height:1 , backgroundColor :'grey',width:'100%',marginTop:50}}/>


          <View style={{flex:1,padding:20}}>
          <View style = {{marginTop :20}}>
          <Text style ={styles.headingText}> Card Number</Text>

                <TextInput style = {styles.textInput}
                 placeholder = {"Enter your card number"}
                 onChangeText = {text => this.setState({cardNumber:text})}>

                </TextInput>
              </View>
              <View style = {{marginTop :20}}>
              <Text style ={styles.headingText}>CARD Holder</Text>

              <TextInput style = {styles.textInput}
                 placeholder = {"Enter your Name"}
                  onChangeText = {text => this.setState({cardHolder:text})}>

                </TextInput>
              </View>
              {/* final view */}
              <View style = {{marginTop :20}}>
              <Text style ={styles.headingText}> Expiration Date</Text>
                    <View style = {{flexDirection : 'row'}}>
                      <View style = {{flex:1,padding : 2}}>
                      <DatePicker
          style={{width: 200}}
          date={this.state.date} 
          mode="date" 
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2000"
          maxDate="01-01-2025"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
          }}
          onDateChange={(date) => {this.setState({date: date})}}
        />
                      </View>
{/*                    
                      <View style = {{flex:1,padding : 2}}>
                      <TextInput style = {styles.textInput}
                 placeholder = {""}>

                </TextInput>
                      </View>
                      <View style = {{flex:1,padding : 2}}>
                      <TextInput style = {styles.textInput}
                 placeholder = {""}>

                </TextInput>
                      </View> */}
                    </View>
               
              </View>

              {/* button */}
              <View style = {{marginTop:20}}>
                <TouchableOpacity style = {styles.btnStyle}
                onPress = {()=>this.performAddToCard()}>
                  <Text style = {{alignSelf:'center', color:'white'}}>Add Card</Text>
                  

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
     backgroundColor:'white'
  },
  headingText:{

    color:'black' , fontSize:22,fontWeight :'800'
  },
  subHeading:{

    color:'black' , fontSize:15,fontWeight :'500',marginTop:10
  },
  textInput:{
    height : 60 , borderRadius:5,borderWidth:0.5,marginTop : 10,borderColor:'grey',backgroundColor:'white'
  },
  btnStyle : {
    height : 60 , borderRadius: 5, backgroundColor:'blue',alignItems:'center',justifyContent:'center'
  }

});