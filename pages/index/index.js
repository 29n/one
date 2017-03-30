//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindViewOne: function() {
    wx.navigateTo({
      url: '../one/one',
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
  onLoad: function () {
    console.log('onLoad')

    wx.setNavigationBarTitle({
        title: '最重要的一件事'
    })

    var tmp = wx.getStorageSync('step_7');
    if(tmp.length > 0) {
        wx.redirectTo({
        url: '../home/home',
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
        return;
    } else {
      wx.redirectTo({
        url: '../one/one',
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
        return;
    }

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
