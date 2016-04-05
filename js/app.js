(function () {
    var app = angular.module('coolbeansToy', [ ]);

    app.controller('TextController', function () {
        this.songName = '';
        this.authorName = '';

        drawMyImage('images/faye-live.jpg');

        this.drawImage = function () {
            drawMyText(this.songName, this.authorName);
        };
    });

    var drawMyImage = function(imageURL) {
        $('canvas').drawImage({
            source: imageURL,
            x: 0, y: 0,
            fromCenter: false
        });
    };

    var drawMyText = function(songName, authorName) {
        $('canvas').drawText({
            fillStyle: '#27acea',
            //strokeStyle: '#25a',
            strokeWidth: 2,
            x: 400, y: 220,
            fontSize: 60,
            fontFamily: 'Verdana, sans-serif, Arial',
            text: songName,
            fromCenter: true
        });

        $('canvas').drawText({
            fillStyle: '#f0f0f0',
            //strokeStyle: '#25a',
            strokeWidth: 2,
            x: 400, y: 320,
            fontSize: 50,
            fontFamily: 'Verdana, sans-serif, Arial',
            text: '演唱: 王　菲',
            fromCenter: true
        });

        $('canvas').drawText({
            fillStyle: '#f0f0f0',
            //strokeStyle: '#25a',
            strokeWidth: 2,
            x: 400, y: 400,
            fontSize: 50,
            fontFamily: 'Verdana, sans-serif, Arial',
            text: '作词: ' + authorName,
            fromCenter: true
        });

        $('canvas').drawText({
            fillStyle: '#f0f0f0',
            //strokeStyle: '#25a',
            strokeWidth: 2,
            x: 400, y: 480,
            fontSize: 50,
            fontFamily: 'Verdana, sans-serif, Arial',
            text: '作曲: ' + authorName,
            fromCenter: true
        });
    };

    /*
     $('canvas').drawText({
     fillStyle: '#f0f0f0',
     //strokeStyle: '#25a',
     strokeWidth: 2,
     x: 500, y: 460,
     fontSize: 60,
     fontFamily: 'Verdana, sans-serif, Arial',
     text: '演唱: 王　菲\n作词: 胡海舰\n作曲: 胡海舰',
     fromCenter: true
     });
     */

    /*
     window.onload = function() {
     var ctx = $("#myCanvas").getContext("2d");
     var img = document.getElementById("fayelive");
     ctx.drawImage(img, 10, 10);
     ctx.font = "72px Arial";
     ctx.fillStyle = "#27acea";
     ctx.textAlign = "center";
     ctx.fillText("燃", 500, 280);

     ctx.font = "60px Arial";
     ctx.fillStyle = "#f0f0f0";
     ctx.textAlign = "center";
     ctx.fillText("演唱: 王　菲", 500, 400);
     ctx.fillText("作词: 胡海舰", 500, 500);
     ctx.fillText("作曲: 胡海舰", 500, 600);


     //canvas.setAttribute("width", 320);
     //canvas.setAttribute("height", 216);
     };
     */
})();