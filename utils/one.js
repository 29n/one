
function getOneData() {
    var d1 = wx.getStorageSync('step_1') || "";
    var d2 = wx.getStorageSync('step_2') || "";
    var d3 = wx.getStorageSync('step_3') || "";
    var d4 = wx.getStorageSync('step_4') || "";
    var d5 = wx.getStorageSync('step_5') || "";
    var d6 = wx.getStorageSync('step_6') || "";
    var d7 = wx.getStorageSync('step_7') || "";
    return {
        step_1:d1, 
        step_2:d2,
        step_3:d3,
        step_4:d4,
        step_5:d5,
        step_6:d6,
        step_7:d7
    };
}

module.exports = {
  getOneData: getOneData
}


