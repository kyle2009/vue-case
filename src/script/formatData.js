let XH = {
    // 数据格式转换属性名称；名称自定义
    // list，转换的数组对象；time：时间属性名称；count：数
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
            return RegExp.$4+':'+RegExp.$5
        }
    },

    // 获取昨天；格式2020-4-22 23:59:59
    getDay : function () {
        let day1 = new Date();
        day1.setTime(day1.getTime()-24*60*60*1000);
        return day1.getFullYear()+"-" + (day1.getMonth()+1) + "-" + day1.getDate() + ' 23:59:59'
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
    }
}


export default XH;
