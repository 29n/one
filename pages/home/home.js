//home.js
//获取应用实例
var one = require('../../utils/one.js')

var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    textValues: {},
    step_1:"",
    step_2:"",
    step_3:"",
    step_4:"",
    step_5:"",
    step_6:"",
    step_7:"",
    
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindToWrite: function() {
    wx.redirectTo({
      url: '../write/write',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  onShareAppMessage: function () {
    return {
      title: '自定义分享标题',
      path: '/pages/home/home'
    }
  },
  bindToWrite: function() {
    wx.navigateTo({
      url: '../write/write?step=1'
    })
  },

  onLoad: function () {
    console.log('onLoad')

    wx.setNavigationBarTitle({
        title: '最重要的一件事'
    })

    var tmpData = one.getOneData();
        console.log(tmpData);
        this.setData({
          step_1: tmpData.step_1,
          step_2: tmpData.step_2,
          step_3: tmpData.step_3,
          step_4: tmpData.step_4,
          step_5: tmpData.step_5,
          step_6: tmpData.step_6,
          step_7: tmpData.step_7,
          
          textValues: tmpData
        });


    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
