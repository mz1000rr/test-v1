window.onload = function (e) {

    liff.init(function (data) {

        initializeApp(data);

    });

};



function initializeApp(data) {

    document.getElementById('languagefield').textContent = data.language;

    document.getElementById('viewtypefield').textContent = data.context.viewType;

    document.getElementById('useridfield').textContent = data.context.userId;

    document.getElementById('utouidfield').textContent = data.context.utouId;

    document.getElementById('roomidfield').textContent = data.context.roomId;

    document.getElementById('groupidfield').textContent = data.context.groupId;



    // openWindow call

    document.getElementById('openwindowbutton').addEventListener('click', function () {

        liff.openWindow({

            url: 'https://line.me'

        });

    });



    // closeWindow call

    document.getElementById('closewindowbutton').addEventListener('click', function () {

        liff.closeWindow();

    });



    // sendMessages call

    document.getElementById('sendmessagebutton').addEventListener('click', function () {

        liff.sendMessages([

       {
  "type": "flex",
  "altText": "Flex Message",
  "contents": {
    "type": "bubble",
    "direction": "ltr",
    "body": {
      "type": "box",
      "layout": "vertical",
      "spacing": "md",
      "contents": [
        {
          "type": "box",
          "layout": "horizontal",
          "margin": "xs",
          "contents": [
            {
              "type": "image",
              "url": "https://www.printcafe.asia/wp-content/uploads/2018/06/kbank-icon.png",
              "size": "full",
              "aspectRatio": "1:1",
              "aspectMode": "fit",
              "backgroundColor": "#FFFFFF",
              "action": {
                "type": "message",
                "text": "กสิกร  7482733810"
              }
            },
            {
              "type": "separator",
              "margin": "md"
            },
            {
              "type": "image",
              "url": "https://f.ptcdn.info/801/022/000/1409170288-b60f8c1e0e-o.png",
              "action": {
                "type": "message",
                "text": "กรุงเทพ  1185039490"
              }
            },
            {
              "type": "separator",
              "margin": "md"
            },
            {
              "type": "image",
              "url": "https://www.isranews.org/images/thumbnails/images/2018/thaireform/08/scb2408-fill-500x500.jpg",
              "action": {
                "type": "message",
                "text": "ไทยพาณิชย์  1702519204"
              }
            }
          ]
        },
        {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "image",
              "url": "https://i0.wp.com/www.proppular.com/wp-content/uploads/2015/11/ktb-logo-1024x1024.jpg?resize=300,300&ssl=1",
              "action": {
                "type": "message",
                "text": "กรุงไทย  7680144273"
              }
            },
            {
              "type": "separator",
              "margin": "md"
            },
            {
              "type": "image",
              "url": "https://pbs.twimg.com/profile_images/936198120873930753/iyEeh0ga_400x400.jpg",
              "action": {
                "type": "message",
                "text": "ธหารไทย  2122187384"
              }
            },
            {
              "type": "separator",
              "margin": "md"
            },
            {
              "type": "image",
              "url": "https://lh3.googleusercontent.com/ovSLL4E--Mo_nJg4XHE8k_9KYCpAbn6FB0FLMgzl6lyNubIJoJxdvWyEnM7sN02DD5I=s180-rw",
              "action": {
                "type": "message",
                "text": "กรุงศรีฯ  5221059314"
              }
            }
          ]
        },
        {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "image",
              "url": "https://www.mymobygsb.com/images/logo.png",
              "aspectMode": "cover",
              "action": {
                "type": "message",
                "text": "ออมสิน  020041983808"
              }
            },
            {
              "type": "separator",
              "margin": "md"
            },
            {
              "type": "image",
              "url": "https://www.it24hrs.com/wp-content/uploads/2018/03/promptpay-update-stats-2018-p01.jpg",
              "aspectMode": "cover",
              "action": {
                "type": "message",
                "text": "พร้อมเปย์  0948296328"
              }
            },
            {
              "type": "separator",
              "margin": "md"
            },
            {
              "type": "image",
              "url": "https://www.gmkfreelogos.com/logos/T/img/Thank_You.gif",
              "size": "3xl",
              "aspectRatio": "1:1",
              "aspectMode": "fit",
              "action": {
                "type": "message",
                "text": "ขอบคุณที่ใช้บริการครับ"
              }
            }
          ]
        }
      ]
    },
    "footer": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": "กรุณาเลือกธนาคารที่จะชำระเงิน",
          "align": "center",
          "weight": "bold",
          "color": "#9900FF",
          "wrap": true
        },
        {
          "type": "separator",
          "margin": "md"
        },
        {
          "type": "button",
          "action": {
            "type": "uri",
            "label": "ติตามข่าวสาร",
            "uri": "https://line.me/R/ti/p/@xod8246n"
          },
          "color": "#0C0C0C",
          "style": "primary"
        }
      ]
    }
  }
}

    ]).then(function () {

            // window.alert("Message sent");

            liff.closeWindow();

        }).catch(function (error) {

            window.alert("Error sending message: " + error);

        });

    });



    // get access token

    document.getElementById('getaccesstoken').addEventListener('click', function () {

        const accessToken = liff.getAccessToken();

        document.getElementById('accesstokenfield').textContent = accessToken;

        toggleAccessToken();

    });



    // get profile call

    document.getElementById('getprofilebutton').addEventListener('click', function () {

        liff.getProfile().then(function (profile) {

            document.getElementById('useridprofilefield').textContent = profile.userId;

            document.getElementById('displaynamefield').textContent = profile.displayName;



            const profilePictureDiv = document.getElementById('profilepicturediv');

            if (profilePictureDiv.firstElementChild) {

                profilePictureDiv.removeChild(profilePictureDiv.firstElementChild);

            }

            const img = document.createElement('img');

            img.src = profile.pictureUrl;

            img.alt = "Profile Picture";

            profilePictureDiv.appendChild(img);



            document.getElementById('statusmessagefield').textContent = profile.statusMessage;

            toggleProfileData();

        }).catch(function (error) {

            window.alert("Error getting profile: " + error);

        });

    });

}



function toggleAccessToken() {

    toggleElement('accesstokendata');

}



function toggleProfileData() {

    toggleElement('profileinfo');

}



function toggleElement(elementId) {

    const elem = document.getElementById(elementId);

    if (elem.offsetWidth > 0 && elem.offsetHeight > 0) {

        elem.style.display = "none";

    } else {

        elem.style.display = "block";

    }

}
