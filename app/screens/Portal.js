import React from 'react'
import { ScrollView, StyleSheet, View, Text, SafeAreaView, Image } from 'react-native'

import { MaterialIcons, Ionicons, AntDesign, Entypo } from '@expo/vector-icons';
import colors from '../config/colors'

function Portal() {
  return (
    // <SafeAreaView style={styles.container}>
        <ScrollView style={styles.background}>
            <View style={styles.topIcon}>
                <View style={styles.activity}>
                    <Ionicons name="chevron-back-outline" size={24} color="blue" />
                    <Text>Activity</Text>
                </View>
                <MaterialIcons name="notifications-none" size={24} color="blue" />
            </View>
            <View style={styles.summary}>
                <Text style={styles.summaryText}>Summary</Text>
                <Text style={styles.monthText}>
                    This Month <AntDesign name="arrowdown" size={16} color="blue" />
                </Text>
            </View>
            <View style={styles.order}>
                <View style={styles.orderCol}>
                    <Text style={styles.orderNo}>2,000</Text>
                    <Text style={styles.orderName}>Orders</Text>
                </View>
                <View style={styles.orderCol}>
                    <Text style={styles.orderNo}>1,000</Text>
                    <Text style={styles.orderName}>Customers</Text>
                </View>
                <View style={styles.orderCol}>
                    <Text style={styles.orderNo}>2,000</Text>
                    <Text style={styles.orderName}>Products</Text>
                </View>
            </View>
            <View style={styles.expense}>
                <Text style={styles.expenseText}>Inflow/Expense</Text>
                <Image resizeMode='contain' style={styles.image} source={require('../assets/inflow.png')} />
            </View>
            <View style={styles.duration}>
                <Text style={styles.durationText}>Duration</Text>
                <View style={styles.durationTime}>
                    <Text style={styles.durationMonth}>3 Months</Text> 
                    <View>
                        <Entypo name="calendar" size={17} color="black" />
                    </View>   
                </View>
            </View>
            <View style={styles.product}>
                <Text style={styles.productText}>Top selling product</Text>
                <View style={styles.productTime}>
                    <Text style={styles.productMonth}>This Month</Text> 
                    <View>
                        <AntDesign name="arrowdown" size={16} color="blue" />
                    </View>   
                </View>
            </View>
            <View style={styles.productCol}>
                <View style={styles.productCol1}>
                    <View>
                        <Text style={styles.productColName}>Product12345</Text>
                        <Text style={styles.productColSku}>SKU: #0000003</Text>
                    </View>
                    <View style={styles.qty}>
                        <Text style={styles.productColNo}>#00.00</Text>
                        <Text style={styles.productColSku}>Qty Sold: 10,000</Text>
                    </View>
                </View>
                <View style={styles.productCol1}>
                    <View>
                        <Text style={styles.productColName}>Product12345</Text>
                        <Text style={styles.productColSku}>SKU: #0000003</Text>
                    </View>
                    <View style={styles.qty}>
                        <Text style={styles.productColNo}>#00.00</Text>
                        <Text style={styles.productColSku}>Qty Sold: 10,000</Text>
                    </View>
                </View>
                <Text style={styles.more}>View More</Text>
            </View>

            <View style={styles.product}>
                <Text style={styles.productText}>Top Customers</Text>
                <View style={styles.productTime}>
                    <Text style={styles.productMonth}>This Month</Text> 
                    <View>
                        <AntDesign name="arrowdown" size={16} color="blue" />
                    </View>   
                </View>
            </View>
            <View style={styles.productCol}>
                <View style={styles.productCol1}>
                    <View>
                        <Text style={styles.productColName}>Chukwuebuka Anene</Text>
                        <Text style={styles.productColSku}>ID: #0000003</Text>
                    </View>
                    <View style={styles.qty}>
                        <Text style={styles.productColNo}>1000 Orders</Text>
                        <Text style={styles.productColSku}>#1,000,000.00 spent</Text>
                    </View>
                </View>
                <View style={styles.productCol1}>
                    <View>
                        <Text style={styles.productColName}>Product12345</Text>
                        <Text style={styles.productColSku}>ID: #0000003</Text>
                    </View>
                    <View style={styles.qty}>
                        <Text style={styles.productColNo}>1000 Orders</Text>
                        <Text style={styles.productColSku}>#1,000,000.00 spen</Text>
                    </View>
                </View>
                <Text style={styles.more}>View More</Text>
            </View>
            <View></View>
        </ScrollView>
    // </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    background:{
        flex:1,
        backgroundColor: colors.primary,
        paddingHorizontal: 15
    },
    topIcon:{
        paddingTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    activity:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    summary:{
        marginTop: 20,
        alignItems: 'center',
    },
    summaryText:{
        fontSize: 19,
        fontWeight: '400',
        marginBottom: 3
    },
    monthText:{
        fontSize: 14,
        fontWeight: '300',
        marginBottom: 10,
        color: "blue"
    },
    order:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
    },
    orderCol: {
        alignItems: 'center'
    },
    orderName:{
        color: colors.yellow
    },
    expense:{
        flexDirection: 'column',
        marginTop: 30
    },
    expenseText:{
        fontSize: '19',
        fontWeight: '400',
        // marginBottom: 15
    },
    image:{
        width: '100%',
        height: 250,
        alignSelf: 'center',
    },
    duration:{
        backgroundColor: colors.white,
        height: 40,
        borderRadius: '30',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    durationTime:{
        flexDirection:'row',
        alignItems: 'center'
    },
    durationMonth:{
        marginRight: 10
    },
    product:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20
    },
    productText:{
        fontSize: '19',
        fontWeight: '400',
    },
    productTime:{
        flexDirection:'row',
        alignItems: 'center'
    },
    productMonth:{
        marginRight: 2
    },
    productCol:{
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginTop: 10
    },
    productCol1:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    productColName:{
        paddingVertical:4,
        color: colors.yellow,
        fontSize: 15
    },
    productColNo:{
        paddingVertical:4
    },
    productColSku:{
        color: '#4c514d'
    },
    more:{
        textAlign: 'center',
        marginBottom: 10,
        color: "blue",
    }


    

})

export default Portal