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
        backgroundColor:COLORS.lightGray1,
        flex:1

    },
    home_image1:{
        alignSelf:'center',
        height:"100%",
        width:"90%"
    },
    home_flatList1:{
        marginVertical:10,
        height:SIZES.height*.06,
        marginHorizontal:10
    },
    loginTO:{
        alignSelf:'flex-end',
        color:COLORS.black,
        fontSize:15,
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
      }
})

export default Styles