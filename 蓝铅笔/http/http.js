// url：请求地址
// data：请求数据
// config：
module.exports = function(url,data){
    return new Promise((resolve,reject)=>{
      // 显示 loading 提示框
      wx.showLoading({
        title: '正在加载中'
      })
      // 发送网络请求
      wx.request({
        url,
        data:{
          ...data
				},
        success: res=>{
          resolve(res)
        },
        fail: err=>{
          reject(err)
        },
        complete: res=>{
          // 隐藏 loading 提示框
          wx.hideLoading();
          // 根据返回的状态码判断请求成功还是失败
          if (res.statusCode === 200) {
            wx.showToast({
              title: '请求成功',
            })
          } else {
            wx.showToast({
              title: '请求失败',
              icon: 'error'
            })
          }
        }
      })
    })
}