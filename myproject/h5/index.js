var data = {
    "id": 1187,
    "createTime": "2019-08-26 20:13:36",
    "modifyTime": "2019-08-26 20:13:36",
    "createBy": "ssss",
    "lastModifiedBy": "ssss",
    "roomId": 4742,
    "ownerId": 10,
    "ownerNick": "我为口语带盐",
    "owner": null,
    "ownerAvatar": "https://img.xinghestory.com.cn/4BCD553D-D2BC-497C-9FCB-9C6C1F8CB8321563187433613.jpg",
    "ownerCharacter": "https://img.xinghestory.com.cn/1562291318380_E5ZBec04E",
    "participatorId": 14,
    "participator": null,
    "participatorNick": "菜鸡互啄",
    "participatorAvatar": "https://img.xinghestory.com.cn/android_type_head_time_1566439336485.jpg",
    "participatorCharacter": "https://img.xinghestory.com.cn/1562291325448_iN1rbu9-k",
    "topicName": "发福的猫",
    "topicId": 99,
    "previewUrl": null,
    "mediaUrl": null,
    "mediaType": "VIDEO",
    "topicDesc": "【怪物史莱克】史莱克来找菲奥娜，在房间里遇到了发福变肥的猫，史莱克完全不敢相信这是他原来认识的猫。",
    "categoryId": 17,
    "categoryName": "三星",
    "playCount": 0,
    "approveCount": 0,
    "favoriteCount": 0,
    "shareCount": 0,
    "commentCount": 0,
    "orderWeight": 0,
    "reportFlag": 0,
    "isFinished": 0,
    "videoId": null
}
//ajax获取到作品信息 更改页面数据
$('.avatar1').attr('src', data.ownerAvatar);
$('.avatar2').attr('src', data.participatorAvatar);
$('.infotitle').text(data.topicName);
$('.firstp').text(data.topicDesc);
$('.infotitle').text(data.topicName);
$('#usernick1').text(data.ownerNick);
$('#usernick2').text(data.participatorNick);
// $('#playbtn').on('click', function () {
//     $(this).hide();
//     $('video')[0].play()
// })
// $('video').on('pause', function () {
//     $('#playbtn').show();
//     // $('video')[0].play()
// })
$('#downloadbtn').on('click', function () {
    location.href = 'http://appdown.push2talk.cn/appdownload.html'
})