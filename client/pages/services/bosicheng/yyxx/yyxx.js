const date = new Date()
const years = []
const months = []
const days = []
const hours = []
const minutes = []
var thisMon = date.getMonth();
var thisDay = date.getDate();

for (let i = 2017; i <= date.getFullYear() + 1; i++) {
  years.push(i)
}

for (let i = date.getMonth(); i <= 11; i++) {
  var k = i;
  if (0 <= i && i < 9) {
    k = "0" + (i + 1);
  } else {
    k = (i + 1);
  }
  months.push(k)
}
if (0 <= thisMon && thisMon < 9) {
  thisMon = "0" + (thisMon + 1);
} else {
  thisMon = (thisMon + 1);
}
if (0 <= thisDay && thisDay < 10) {
  thisDay = "0" + thisDay;
}

var totalDay = mGetDate(date.getFullYear(), thisMon);
for (let i = 1; i <= 31; i++) {
  var k = i;
  if (0 <= i && i < 10) {
    k = "0" + i
  }
  days.push(k)
}

for (let i = 0; i <= 23; i++) {
  var k = i;
  if (0 <= i && i < 10) {
    k = "0" + i
  }
  hours.push(k)
}
for (let i = 0; i <= 59; i++) {
  var k = i;
  if (0 <= i && i < 10) {
    k = "0" + i
  }
  minutes.push(k)
}
function mGetDate(year, month) {
  var d = new Date(year, month, 0);
  return d.getDate();
}
Page({
  data: {
    years: years,
    year: date.getFullYear(),
    months: months,
    month: thisMon,
    days: days,
    day: thisDay,
    value: [1, thisMon - 1, thisDay - 1, 0, 0],
    hours: hours,
    hour: "00",
    minutes: minutes,
    minute: "00",
    screen:false,
    animationData: {},
    showMask:false,
  },
  bindChange: function (e) {
    const val = e.detail.value
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]],
      hour: this.data.hours[val[3]],
      minute: this.data.minutes[val[4]],
    })
    var totalDay = mGetDate(this.data.year, this.data.month);
    var changeDate = [];
    for (let i = 1; i <= totalDay; i++) {
      var k = i;
      if (0 <= i && i < 10) {
        k = "0" + i
      }
      changeDate.push(k)
    }
    this.setData({
      days: changeDate
    })
  },
  // showScreen:function(){
  //  this.setData({
  //    screen:true,
  //  })
  // },
  // closeScreen: function () {
  //   this.setData({
  //     screen: false,
  //   })
  // },


  showScreen: function (e) {
    // 用that取代this，防止不必要的情况发生
    var that = this;
    // 创建一个动画实例
    var animation = wx.createAnimation({
      // 动画持续时间
      duration: 500,
      // 定义动画效果，当前是匀速
      timingFunction: 'linear'
    })
    // 将该变量赋值给当前动画
    that.animation = animation
    // 先在y轴偏移，然后用step()完成一个动画
    animation.translateY(351).step()
    // 用setData改变当前动画
    that.setData({
      showMask: true,
      // 通过export()方法导出数据
      animationData: animation.export(),
      // 改变view里面的Wx：if
      screen: true,
      
    })
    // 设置setTimeout来改变y轴偏移量，实现有感觉的滑动
    setTimeout(function () {
      animation.translateY(0).step()
      that.setData({
        animationData: animation.export()
      })
    }, 0)
    // console.log("end")
    
  },


  closeScreen: function (e) {
    // 用that取代this，防止不必要的情况发生
    var that = this;
    // 创建一个动画实例
    var animation = wx.createAnimation({
      // 动画持续时间
      duration: 500,
      // 定义动画效果，当前是匀速
      timingFunction: 'linear'
    })
    // 将该变量赋值给当前动画
    that.animation = animation
    // 先在y轴偏移，然后用step()完成一个动画
    animation.translateY(351).step()
    // 用setData改变当前动画
    that.setData({
      // 通过export()方法导出数据
      animationData: animation.export(),
      // 改变view里面的Wx：if
      
    }),
    // 设置setTimeout来改变y轴偏移量，实现有感觉的滑动
    setTimeout(function () {
      animation.translateY(0).step()
      that.setData({
        animationData: animation.export(),
        screen: false,
      })
    }, 351)
  },
  success(){
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
    // console.log("aa")
    setTimeout(function(){
      wx.navigateTo({
        url: '../dflsh/dflsh',
      })
    },2001)
  }


})