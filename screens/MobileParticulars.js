import { Text, StatusBar,View,Image,ScrollView, ActivityIndicator,TouchableOpacity,FlatList, ImageBase } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS,SIZES,FONTS } from '../constants'
import firestore from '@react-native-firebase/firestore';
import {connect} from 'react-redux'
import Styles from '../styles/Styles'
import  {one } from '../constants/images';
import Ionicons from 'react-native-vector-icons/Ionicons'
import storage from '@react-native-firebase/storage'
import { ProDesc,Loader,Header } from '../component';

const MobileParticulars = ({route,navigation}) => {

  const [imgss,setImgss] = useState([one,one,one,one])
  const {mid} =route.params
  const [data,setData]=useState()
  const  [mobileId,setMobileId]=useState('')
  const [company,setCompany]= useState('')
  const [model,setModel ]=useState("")
  const [phoneColor,setPhoneColor] = useState("")
  const [sim,setSim]= useState()
  const [network,setNetwork] =useState()
  const [screenSize,setScreenSize]= useState()
  const [platform,setPlatform] = useState()
  const [load,setLoad]=useState(true)
  const [frontCamera,setFrontCamera]=useState()
  const [mainCamera,setMainCamera]=useState()
  const [ram,setRam]=useState()
  const [memoryInternal,setMemoryInternal]=useState()
  const [memoryExternal,setMemoryExternal]=useState(null)
  const [battery,setBattery]=useState()
  const [amount1,setAmount1]=useState('') 
  const [amount2,setAmount2]=useState()
  const [image1,setImage1]= useState()
  const [image2,setImage2]= useState()
  const [image3,setImage3]= useState()
  const [image4,setImage4]= useState() 
 const [remark1,setRemark1] = useState('')
 const [remark2,setRemark2] = useState('')
 const [remark3,setRemark3] = useState('')
 const [remark4,setRemark4] = useState('')
 const [imgs,setImgs] = useState([])
 const [selectedIndex,setSelectedIndex] = useState(0) 

 useEffect(()=>{

  setTimeout(()=>{
      <View style={Styles.jai}>
      <ActivityIndicator size="large" color={COLORS.black} />
      </View>
  },1000)

      amount1 == '' ? dataExtract():noDataReturn()
      imageExtract(mid)
      },[amount1])
      const dataExtract =()=>{
        firestore().collection('mobiles').doc(mid).get().then((doc)=>{
             setAmount1(doc.data().amount1);
             setAmount2(doc.data().amount2);
             setBattery(doc.data().battery)
             setCompany(doc.data().company)
             setPhoneColor(doc.data().color)
             setMemoryInternal(doc.data().memoryInternal) 
             setModel(doc.data().model)
             setRam(doc.data().ram)
             setScreenSize(doc.data().screenSize)
             setImage1(doc.data().image1)
             setImage2(doc.data().image2)
             setImage3(doc.data().image3)
             setImage4(doc.data().image4)
             setFrontCamera(doc.data().frontCamera)
             setMainCamera(doc.data().mainCamera)
             setMobileId(doc.data().mobileId)  
             setRemark1(doc.data().remark1)
             setRemark2(doc.data().remark2)
             setRemark3(doc.data().remark3)
             setRemark4(doc.data().remark4)
            
    
         })
    }
    
    const imageExtract=(mid)=>{
    
        let iii=[]
        var urr =    'mahakal/productImages/'+mid      
        storage().ref(urr).listAll().then(async(res)=>{
            await  res.items.forEach(async(itemRef) => {
          
            await  storage().ref(itemRef.path).getDownloadURL().then((rrr)=>{
                iii.push(rrr)

                if(res.items.length===iii.length)  {
                    setLoad(false)}
                
            })
            setImgs(iii)
        });
    
        })
    
    }

    const dataReturn=()=>{
      return(
             <ScrollView >

{/* Image display starts */}

    <View style={Styles.mp_style1}>
<FlatList
data={imgs}
pagingEnabled
horizontal={true}
onScroll={e=>{setSelectedIndex((e.nativeEvent.contentOffset.x/SIZES.width).toFixed(0))}}
showsHorizontalScrollIndicator={false}
renderItem={({item})=>{
return(
     	  <View>
    		<View style={Styles.mp_style2}>
        {/* < Image source={{uri:item}}  style={{width:'100%',height:'100%'}} resizeMode='contain' /> */}
    <View style={{height:200}}>
         <Image source={one}  style={{width:'100%',height:'100%'}} resizeMode='contain' />
      </View>  
        <View style={{...Styles.mp_style9,marginTop:SIZES.radius}}>
        {imgs.map((item,index)=>{
      return(
      <View style={{height:100}}>
      <View style={{backgroundColor:index==selectedIndex?COLORS.red:COLORS.black,...Styles.mp_style8}} />
      </View>
      )
      })}
  </View>
         </View> 

           </View>
  
)}
}
ListFooterComponent={
  <View style={{height:80}}/>
}
/>

{/* <View style={{...Styles.jai,flexDirection:'row',marginTop:5}}>
  {imgs.map((i,k)=>{
    return(
    <Ionicons key={k} name="ellipse" color={COLORS.red} size={15} />

)  })}

</View> */}

</View>
{/* Image display ends */}

         {/* breakthrough line starts*/}
        <View style={Styles.horizonatalLine} />
        <View style={{marginLeft:25,marginTop:10}}>
        <Text style={Styles.mobileParticular_text}>{company}{" "}{model}{" "}{ }</Text>
         <Text style={Styles.mobileParticular_text}>{'('}{phoneColor}{", "}{ram}{", "}{memoryInternal}{')'}</Text>
        </View>
        <View style={{...Styles.horizonatalLine}} />
        {/* breakthrough line ends*/}
            {/* <ScrollView style={{marginBottom:20}}>     */}
              <View style={Styles.mp_style3}>
              {mobileId != '' &&  <ProDesc title="Mobile ID" value={    mobileId } /> }
              {model != '' &&  <ProDesc title="Model" value={company + model } /> }
              { phoneColor!= '' &&  <ProDesc title="Mobile Color" value={phoneColor } /> }
              {ram != undefined && ram != '' &&  <ProDesc title="RAM" value={ram } /> }
              {screenSize != undefined && screenSize != '' &&  <ProDesc title="Screen Size" value={screenSize } /> }
              {frontCamera != undefined && frontCamera != ''  &&  <ProDesc title="Front Camera" value={frontCamera } /> }
              {mainCamera != undefined && mainCamera != '' &&  <ProDesc title="Main Camera" value={mainCamera } /> }
              {memoryInternal != undefined && memoryInternal != '' && <ProDesc title="Memory " value={memoryInternal  } /> }
              {battery != undefined && battery != '' && <ProDesc title="Battery" value={battery } />}
              {remark1 != undefined &&  remark1 != '' && <ProDesc title="Remark 1 " value={remark1  }  valueStyle={{color:COLORS.red}} /> }
              {remark2 != undefined &&  remark2 != '' && <ProDesc title="Remark 2 " value={ remark2  }  valueStyle={{color:COLORS.red}} /> }
              {remark3 != undefined &&  remark3 != '' && <ProDesc title="Remark 3 " value={  remark3   }  valueStyle={{color:COLORS.red}} /> }
              {remark4 != undefined &&  remark4 != '' && <ProDesc title="Remark 4 " value={  remark4  }  valueStyle={{color:COLORS.red}} /> }

              </View> 
              <View style={Styles.mp_style4}>
              <View style={Styles.mp_style5}>
              <TouchableOpacity style={{flexDirection:'row'}}>
              <Text style={{color:COLORS.blue,fontWeight:'bold'}}>Rs : </Text>
              <Text style={Styles.mp_style7}> {amount1 }</Text>
              <Text style={Styles.mp_style6}>{amount2 + '/-' } </Text>    
              </TouchableOpacity>

             <TouchableOpacity style={{flexDirection:'row',padding:8}} >
             <Text style={{fontStyle:'italic',fontSize:20,fontWeight:'bold'}}></Text>
             </TouchableOpacity>
             </View>
             </View>
             <View style={{bottom:0,height:100}}/>

             
             {/* </ScrollView> */}
              </ScrollView>
    )}

    const noDataReturn=()=>{
      return <Loader />    
           }

    return(
           load?<Loader />:
           <View style={{backgroundColor:COLORS.white}}>
       
           <StatusBar hidden={true} />
           <Header           
           leftComponent={
           <View>
           <TouchableOpacity onPress={navigation.goBack}>
           <Ionicons name="arrow-back-circle" color={COLORS.black} size={30} />
           </TouchableOpacity>
           </View>
           }   
            />
       {  amount1 != '' ? dataReturn():noDataReturn()}
       </View>
 )}

 export default MobileParticulars
// const mapStateToProps = state =>{
//    return{
//        selectedTab:state.selectedTab
//    }
// }
// export default connect (mapStateToProps)(MobileParticulars)