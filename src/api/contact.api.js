
const CONTACT_API = {

    // 每分钟粒度查询
    "getActionMinuteList":{
        "method":'post',
        "url":'/am/getActionMinuteList'
    },

    // 每5分钟粒度查询
    "getActionMinute5List":{
        "method":'post',
        "url":'/am5/getActionMinute5List'
    },

    // 每小时粒度查询
    "getActionHourList":{
        "method":'post',
        "url":'/ah/getActionHourList'
    },

    // 每日粒度查询
    "getActionDailyList":{
        "method":'post',
        "url":'/ad/getActionDailyList'
    },

    // 每周粒度查询
    "getActionWeekList":{
        "method":'post',
        "url":'/aw/getActionWeekList'
    },

    // 每月粒度查询
    "getActionMonthList":{
        "method":'post',
        "url":'/amo/getActionMonthList'
    },

    // 每年粒度查询
    "getActionYearList":{
        "method":'post',
        "url":'/ay/getActionYearList'
    },
}
export default  CONTACT_API

