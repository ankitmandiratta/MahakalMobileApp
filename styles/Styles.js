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
    }
    ,
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

    }
})

export default Styles