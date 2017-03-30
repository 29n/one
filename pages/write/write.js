//index.js
//获取应用实例
var one = require('../../utils/one.js')

var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    vstep: 1,
    stepOk: 0,
    curText: "",
    step_1:"",
    step_2:"",
    step_3:"",
    step_4:"",
    step_5:"",
    step_6:"",
    step_7:"",
    textValues:{},
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindTextareaInput: function(e) {
    console.log(e.detail.value)
    if(e.detail.value.length == 0) {
        this.data.stepOk = 0;
    } else {
        this.data.stepOk = 1;
        this.data.curText = e.detail.value;
    }
  },
  bindToStep: function() {
      if(this.data.stepOk == 0){
        wx.showToast({
            title: '文字必填',
            icon: 'error',
            duration: 1000
            });
        return;
      }


      wx.setStorage({
          key: 'step_' + this.data.vstep,
          data: this.data.curText,
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

      var newStep = this.data.vstep + 1;
      if(newStep == 8) {

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
      }

        this.setData({
            vstep: newStep,
            stepOk: 0
        });
  },
  onLoad: function (option) {
    console.log('onLoad')

    console.log(option.query)

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
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    // })
  }
})
