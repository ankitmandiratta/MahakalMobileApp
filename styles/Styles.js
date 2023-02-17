import { StyleSheet } from "react-native";
import { COLORS,FONTS,SIZES } from "../constants";

const Styles = StyleSheet.create({
    jai:{
        justifyContent:'center',
        alignContent:'center', 
        alignItems:'center'   
    },
    header_View:{
        flexDirection:'row',
        marginHorizontal:20,
        marginTop:10,
      }   

  ,
    header_text:{
        fontWeight:'bold',fontSize:SIZES.bigFont,color:COLORS.black
    },
    header_leftComponent_view:{
        height:60,
        width:40,
        justifyContent:'center'
    },
    header_leftComponent_image:{
        height:'100%',
        width:'100%'
    },
    home_to:{
        marginRight:SIZES.radius,
        borderRadius:10,
        marginVertical:10,
        backgroundColor:COLORS.lighttGray,
        flex:1,
        borderWidth:1,
        borderColor:COLORS.lightGray1

    },
    home_image1:{
        alignSelf:'center',
        height:"100%",
        width:"120%"
    },
    home_flatList1:{
        marginVertical:10,
        height:SIZES.height*.07,
        marginHorizontal:10
    },
    loginTO:{
        alignSelf:'flex-end',
        color:COLORS.black,
        fontSize:20,
        marginTop:10,
        fontWeight:'bold'

    },
    horizonatalLine:{
        backgroundColor:COLORS.gray,
        height:1,
        marginTop:10,
        marginHorizontal:20
    },
    mobileParticular_text:{
        ...FONTS.h3,
        color:COLORS.black,
        fontWeight:'bold',
        fontSize:20

    },
    ProductStyleText:{
        color:COLORS.black,
        fontSize:SIZES.body4    
      },
      mp_style1:{
        marginTop:30,
        width:SIZES.width,
        height:SIZES.height*.30,
        
      },
      mp_style2:{
        height:300,
        width:SIZES.width
      },
      mp_style3:{
        paddingLeft:20,
        marginTop:20,
        marginLeft:SIZES.base,
        marginRight:2
      },
      mp_style4:{
        bottom:0,
        backgroundColor:COLORS.transparent,
        position:'relative',
        marginTop:30
      },
      mp_style5:{justifyContent:'space-between',
      flexDirection:'row',
      alignItems:'baseline',
      backgroundColor:COLORS.lightGray1,
      marginHorizontal:10,
      borderRadius:SIZES.radius,
      padding:10
    },
      
      mp_style6:{
        fontStyle:'italic',
        fontSize:22,
        color:COLORS.red,
        marginLeft:SIZES.radius,
        top:-5,
        right:5,
        fontWeight:'bold'
      },
      mp_style7:{
        fontStyle:'italic',
        textDecorationLine:'line-through',
        fontWeight:'bold'
      },
      mp_style8:{

        width:10,
        borderRadius:10,
        height:5,
        padding:5,
        marginHorizontal:2
      },
      mp_style9:{
        width:SIZES.width,height:100,position:'absolute',bottom:0,flexDirection:'row',justifyContent:'center',alignItems:'center'
      }



})

export default Styles