---
data:
  code: OK
  'no': '780098068058'
  type: ZTO
  list:
  - {content: '【石家庄市】 快件已在 【长安三部】 签收,签收人: 本人, 感谢使用中通快递,期待再次为您服务!', time: '2018-03-09
      11:59:26'}
  - {content: '【石家庄市】 快件已到达 【长安三部】（0311-85344265）,业务员 容晓光（13081105270） 正在第1次派件, 请保持电话畅通,并耐心等待',
    time: '2018-03-09 09:03:10'}
  - {content: 【石家庄市】 快件离开 【石家庄】 发往 【长安三部】, time: '2018-03-08 23:43:44'}
  - {content: 【石家庄市】 快件到达 【石家庄】, time: '2018-03-08 21:00:44'}
  - {content: 【广州市】 快件离开 【广州中心】 发往 【石家庄】, time: '2018-03-07 01:38:45'}
  - {content: 【广州市】 快件到达 【广州中心】, time: '2018-03-07 01:36:53'}
  - {content: 【广州市】 快件离开 【广州花都】 发往 【石家庄中转】, time: '2018-03-07 00:40:57'}
  - {content: 【广州市】 【广州花都】（020-37738523） 的 马溪 （18998345739） 已揽收, time: '2018-03-07
      00:01:55'}
  state: '3'
  msg: 查询成功
  name: 中通快递
  site: www.zto.com
  phone: '95311'
  courier: 容晓光
  courierPhone: '13081105270'
  updateTime: '2019-08-27 13:56:19'
  takeTime: 2天20小时14分
  logo: http://img3.fegine.com/express/zto.jpg

---
# 全球快递查询

## 阿里云地址
> https://market.aliyun.com/products/56928004/cmapi026963.html

## 使用方法

### 数据准备

```js
export default {
    data(){
        return {
            data:{
                "code": "OK",
                "no": "780098068058",
                "type": "ZTO",
                "list": [{
                    "content": "【石家庄市】 快件已在 【长安三部】 签收,签收人: 本人, 感谢使用中通快递,期待再次为您服务!",
                    "time": "2018-03-09 11:59:26"
                }, {
                    "content": "【石家庄市】 快件已到达 【长安三部】（0311-85344265）,业务员 容晓光（13081105270） 正在第1次派件, 请保持电话畅通,并耐心等待",
                    "time": "2018-03-09 09:03:10"
                }, {
                    "content": "【石家庄市】 快件离开 【石家庄】 发往 【长安三部】",
                    "time": "2018-03-08 23:43:44"
                }, {
                    "content": "【石家庄市】 快件到达 【石家庄】",
                    "time": "2018-03-08 21:00:44"
                }, {
                    "content": "【广州市】 快件离开 【广州中心】 发往 【石家庄】",
                    "time": "2018-03-07 01:38:45"
                }, {
                    "content": "【广州市】 快件到达 【广州中心】",
                    "time": "2018-03-07 01:36:53"
                }, {
                    "content": "【广州市】 快件离开 【广州花都】 发往 【石家庄中转】",
                    "time": "2018-03-07 00:40:57"
                }, {
                    "content": "【广州市】 【广州花都】（020-37738523） 的 马溪 （18998345739） 已揽收",
                    "time": "2018-03-07 00:01:55"
                }],
                "state": "3",  /* -1：单号或代码错误；0：暂无轨迹；1:快递收件；2：在途中；3：签收；4：问题件 5.疑难件 6.退件签收 */
                "msg": "查询成功",
                "name": "中通快递",                 /*  快递公司名称                */  
                "site": "www.zto.com",              /*  快递公司官网                */
                "phone": "95311",                   /*  快递公司电话                */
                "courier": "容晓光",                /*  快递员 或 快递站(没有则为空)*/
                    "courierPhone":"13081105270",       /*  快递员电话 (没有则为空)     */
                    "updateTime":"2019-08-27 13:56:19", /*  快递轨迹信息最新时间        */
                    "takeTime":"2天20小时14分",         /*  发货到收货消耗时长 (截止最新轨迹)  */
                "logo": "http://img3.fegine.com/express/zto.jpg"      /*  快递Logo  */
            }
        }
    }
}
```

### html代码

```html
<aps-ali-026963 :data="data" style="width: 400px"/>
```

### 最终呈现

<aps-ali-026963  :data="$frontmatter.data"  class="mt-10" :class="{'arrive':$frontmatter.data.state==3}" style="width: 400px"/>

<style>
.van-steps h3{
    font-size:14px;
    font-weight:normal;
    color:#969799;
}

.van-step--process h3{
    color:#ff7800;
}
.arrive  .van-step--process h3{
    color:#07c160;
}
.ant-card-extra a{
    color:#1890ff;
}
</style>