import {Message} from 'element-ui';

let XH = {
    // 数据格式转换属性名称；名称自定义
    // list，转换的数组对象；time：时间属性名称1 MM-DD;2 H:M;；count：数
    toZiDingYiTitle : function (list=[],time,count) {
            var newList = [];

            for (let i = list.length; i-- ; i<=0){
                newList[i] = {}
                for(let item in list[i]){
                    if(item === 'count'){
                        // 计数
                        newList[i][count] = list[i][item]
                    }
                    if (item === 'time'){
                        // 时间相等
                        newList[i][time] = this.toDate(list[i][item],1)
                    }
                }
            }
            console.log(newList)
            return newList.reverse();
        },
    toZiDingYiTitle2:function(list=[],time,count){
        var newList = [];

        for (let i = list.length; i-- ; i<=0){
            newList[i] = {}
            for(let item in list[i]){
                if(item === 'count'){
                    // 计数
                    newList[i][count] = list[i][item]
                }
                if (item === 'time'){
                    // 时间相等
                    newList[i][time] = this.toDate(list[i][item],2)
                }
            }
        }
        console.log(newList)
        return newList.reverse();
    },
    // 日期格式转换
    // type:1 MM-DD;2 H:M;
    toDate:function (date,type) {
        let reg = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/;
        let dateStr = date;
        reg.test(dateStr);  //true
        RegExp.$1;   //YYYY
        RegExp.$2;  //MM
        RegExp.$3;   //DD
        RegExp.$4;   //H
        RegExp.$5;   //M
        RegExp.$6;   //S

        if (type === 1){
            return RegExp.$2+'-'+RegExp.$3
        }
        if (type === 2){
            return RegExp.$2+'-'+RegExp.$3+' '+RegExp.$4+':'+RegExp.$5
        }
    },

    // 获取昨天；格式2020-4-22 23:59:59
    getDay : function () {
        let day1 = new Date();
        day1.setTime(day1.getTime()-24*60*60*1000);
        return day1.getFullYear()+"-" + (day1.getMonth()+1) + "-" + day1.getDate() + ' 23:59:59'
    },
    getToday:function(){
        let day = new Date();
        return day.getFullYear()+"-" + (day.getMonth()+1) + "-" + day.getDate() + ' 23:59:59'
    },
    // 格式化日期时间
    formatDateTime:function (date) {
        let [y,mm,d,h,m,s] = [
            date.getFullYear(),
            date.getMonth() + 1,
            date.getDate(),
            date.getHours(),
            date.getMinutes(),
            date.getSeconds()
        ];
        h += h<9?'0':'';
        m += m<9 ?'0':'';
        s += s<9 ?'0':'';
        return `${y}-${mm}-${d} ${h}:${m}:${s}`
    },

    // 获取短日期
    formatDateTimeDuan:function(date){
        let [mm,d,h,m] = [
            date.getMonth() + 1,
            date.getDate(),
            date.getHours(),
            date.getMinutes()
        ];
        h += h<9?'0':'';
        m += m<9 ?'0':'';

        return `${mm}-${d} ${h}:${m}`
    },
    // 根据粒度验证时间区间是否正确
    // @ lidu: [num] 选择的粒度；1：分钟，2:5分钟：3：小时；4：天；5：周；6：月；7：年；
    // @ time:[array] 传入选择时间的区间值；
    zyDateQuJian:function (time,lidu) {
        // 验证time参数是否正确
        if (time instanceof Array){
            // 参数格式正确
        } else {
            // 参数错误
            Message('请选择要查询的时间段')
            return;
        }
        // 验证lidu参数是否正确
        if (typeof lidu === 'number'){
            // 参数格式正确
        } else {
            // 参数格式错误
            Message('粒度类型错误')
            return;
        }
        switch (lidu) {
            case 1:
                if (time[1].getTime() - time[0].getTime() > 86400000) {
                    Message({
                        message: '1分钟颗粒度时间间隔不能大于1天',
                        type: 'error'
                    })
                    return;
                }
                break;
            case 2:
                if (time[1].getTime() - time[0].getTime() > 259200000) {
                    Message({
                        message: '5分钟颗粒度时间间隔不能大于3天',
                        type: 'error'
                    })
                    return;

                }
                break;
            case 3:
                if (time[1].getTime() - time[0].getTime() > 2592000000) {
                    Message({
                        message: '1小时颗粒度时间间隔不能大于30天',
                        type: 'error'
                    })
                    return;
                }
                break;
            case 4:
                if (time[1].getTime() - time[0].getTime() > 86400000) {
                    Message('1分钟颗粒度时间间隔不能大于1天')
                }
                break;
            case 5:
                if (time[1].getTime() - time[0].getTime() > 86400000) {
                    Message('1分钟颗粒度时间间隔不能大于1天')
                }
                break;
            case 6:
                if (time[1].getTime() - time[0].getTime() > 86400000) {
                    Message('1分钟颗粒度时间间隔不能大于1天')
                }
                break;
            case 7:
                if (time[1].getTime() - time[0].getTime() > 86400000) {
                    Message('1分钟颗粒度时间间隔不能大于1天')
                }
                break;
            default:
                console.log('请选时间区间')
        }
    }
}


export default XH;
