import { Dimensions, StyleSheet } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    bg_primary: {
        backgroundColor: '#22252A',
        color: '#fff',
        flex: 1,
        alignItems:'center', 
    },

    // DashBroad Style
    header_mobile: {
        position: 'relative',
        height: 50,
        textAlign: 'center',
        alignItems: 'center',
        marginBottom: 40,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    logo_title: {
        width: 80,
        height: 50,
        margin: 20,
        marginTop: 50,

    },
    content_body: {
        flex: 1,
        marginBottom: 10,
        flexDirection: 'column',
    },
    box_noti_dashboard: {
        padding: 10,
        flexDirection: 'row',
        flex: 1,
        marginBottom: -430
    },
    row: {
        marginRight: - 10,
        marginLeft: -10
    },
    col_xs_4: {
        textAlign: 'left',
        minHeight: 1,
        marginLeft: 15,
    },
    icon_noti: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    box_content: {
        backgroundColor: '#2d3035',
        padding: 15,
        marginBottom: 20,
        borderRadius: 4,
        flex:1
    },
    txt_noti: {
        textAlign: 'center',
        fontSize: 25,
        color: '#fff',
        margin: 5
    },
    box_home: {
        backgroundColor: '#2d3035',
        marginBottom: 10,
        flex: 1
    },
    title_box: {
        fontSize: 18,
        marginBottom: 20,
        color: '#fff',
        fontFamily: 'blod'
    },
    box_item:{
        backgroundColor: '#2d3035',
        padding: 15,
        marginBottom: 20,
        borderRadius: 4,
        // flex:1
    },

    //End DashBroad

    //Login
    login_logo: {
        marginTop: 150,
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 105,
        marginBottom: 10
    },
    txt_logo: {
        fontSize: 20,
        color: '#fff',
        marginBottom: 30,
    },
    form_group: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#22252A',
        borderColor: '#fff',
        borderWidth: 1,
        margin: 5,
        borderRadius: 10,
        marginBottom:20,
    },
    searchIcon: {
        padding: 10,
    },
    form_control: {
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#22252A',
        color: '#fff',
        width: '80%',
        height: 50
    },
    btn_login: {
        backgroundColor: '#F17128',
        alignItems: 'center',
        borderColor: '#F17128',
        width: '90%',
        height: 60,
        paddingTop: 15,
        margin: 10,
        borderRadius: 5,
    },
    txt_btnLogin: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
    },
    btn_gotpass: {
        alignItems: 'center',
        backgroundColor: '#22252A',
        marginTop: 20,
    },
    txt_forgotpass: {
        color: '#F17128',
        fontSize: 16,
    },
    alert_success: {
        width: '90%',
        height: 80,
        backgroundColor: 'rgba(4,164,33,0.2)',
        borderRadius: 10,
        margin: 5,
    },
    txt_alert: {
        color: '#41c300',
        fontSize: 16,
        margin: 5,
        textAlign: 'center',
    },
    //End Login

    //For got Pass
    btn_gotpass: {
        alignItems: 'center',
        backgroundColor: '#22252A',
        marginTop: 20,
    },
    txt_forgotpass: {
        color: '#F17128',
        fontSize: 16,
    },
    alert_success: {
        width: '90%',
        height: 80,
        backgroundColor: 'rgba(4,164,33,0.2)',
        borderRadius: 10,
        margin: 5,
    },
    txt_alert: {
        color: '#41c300',
        fontSize: 16,
        margin: 5,
        textAlign: 'center',
    },

    //end forgotPass

    //Ticket screen
    title_ticket: {
        color: '#fff',
        fontSize: 30,
        flex: 2,
        textAlign: "center",
        marginLeft: 25
    },
    btn_add: {
        justifyContent: 'flex-start',
        flex: 1
    },
    box_list_content: { height: '100%' },

    //end Ticket Screen

    //Add Ticket
    tab_content: {
        paddingTop: 0,
        display: 'none',

    },
    tab_pane: {
        color: '#878787',
        lineHeight: 26,
        paddingTop: 15
    },
    box_noti_ticket: {
        flex: 1,
        padding: 20
    },
    box_add_new_content: {
        flex: 1,
        flexDirection:'column',
    },
    txt_box_add_new: {
        fontSize: 18,
        color: '#fff',
        marginTop: 0
    },
    box_noti_ticket: {
        flex: 1,
        padding: 20
    },
    form_add:{
        padding:10,
        flexDirection:'column'
    },
    group_inline:{
        display:'flex',
        justifyContent:'space-between'
    },
    txt_group_inline:{
        color:'#fff',
        fontSize:18,
        
    },

    //End Add Ticket

});
export default styles;