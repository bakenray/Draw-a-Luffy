!function(){
var duration = 20
$('.speed-box').on('click','button',function(e){
    let $button = $(e.currentTarget)
    let speed = $button.attr('date-speed')
    $button.addClass('active').siblings('.active').removeClass('active')
    switch(speed){
        case 'slow':
           duration = 100
           break
        case 'normal':
           duration = 50
           break
        case 'fast':
           duration = 0
           break
    }
})

function writeCode(code,fn){
    let preTag = document.querySelector('#preId')
    let styleTag = document.querySelector('#styleId')
    let n =0
    let id
    id = setTimeout(function run(){
        n+=1
        preTag.innerHTML = Prism.highlight(code.substring(0,n), Prism.languages.css, 'css')
        styleTag.innerHTML = code.substring(0,n)
        preTag.scrollTop = preTag.scrollHeight
        if(n<code.length){
           id = setTimeout(run,duration)
        }
        else{
            fn && fn.call()
        }
    },duration)
}

var cssCode = 
`
/*下面开始画一个琦玉老师版的路飞...*/
/*首先设置下代码框的样式*/
.pre-box{
    background:rgba(255,255,255,.3);
    border-radius: 4px;
    padding:14px;  
}

/*再添加一个动画效果*/
.pre-box{
    -webkit-animation:breath 1s infinite;
    animation:breath 1s infinite;
}
@keyframes breath{
    0%{ box-shadow: 0 0 0 1px rgba(222, 170, 168,.1); }
    50%{ box-shadow: 0 0 0 4px rgba(222, 170, 168,.4); } 
    100%{ box-shadow: 0 0 15px 4px rgba(222, 170, 168,.01); }  
}

/*
*下面开始画路飞了...
*首先，先画一个圆框
*/
.circle{
    width:50vmin;
    height:50vmin;
    border:.6vw solid #9c063a;
    border-radius:50%;
    position:relative;
    top:0;
    left:0;
    right:0;
    bottom:0;
    margin:auto;
    box-shadow: 
      0 8px 20px rgba(165, 18, 68, 0.3), 
      0 2px 5px rgba(80, 0, 27, 0.2);
    overflow:hidden;
    }

/*添加一个背景色*/
.circle-bg{
    position:absolute;
    top:0;
    right:0%;
    width:100%;
    height:100%;
    background:#e89191;
    z-index:-4;
    }

/*开始画头部*/
.head{
    position:absolute;
    top:0;
    right:50%;
    width:60%;
    height:74%;
    background:#daae8c;
    border:1px solid #000;
    border-radius:50%;
    border-top-left-radius:150% 150%;
    border-top-right-radius:150% 150%;
    border-bottom-left-radius:190% 210%;
    border-bottom-right-radius:190% 210%;
    transform:translateX(50%);
    z-index:-2;
    box-shadow: 
      inset -5px 5px #a6735c, 
      inset 5px 5px #a6735c, 
      inset -7px 0px #a6735c, 
      inset 0px -2px #a6735c;
    }

/*画眼睛轮廓*/
.eyes{
      width: 16%;
      height: 14%;
      background: #fff;
      position: absolute;
      border-radius: 48% 52%;
      top: 27%;
      border-top: 1px solid #000;
      border-bottom: 1px solid #000;
      transform: rotate(-5deg);
    }

/*画眼珠子*/
.eyes::after{
    content:'';
    display:block;
    width:1.7vmin;
    height: 1.7vmin;
    border-radius:50%;
    background:#000;
    position:absolute;
    left:0;
    top:0; 
    right:0;
    bottom:0;
    margin:auto;
    }

/*调整眼睛间距*/ 
.eyes.left{
    left:50%;
    margin-left:5%;
    }
.eyes.right{
    right:50%;
    margin-right:5%;
    }

/*画眉毛*/
.eyebrow{ 
    border:1px solid transparent;
    border-top:1px solid #000;
    width:18%;
    height:18%;
    border-radius:50%/35%;
    position:absolute;
    top:24%;
    }
/*调整眉毛位置*/
.eyebrow.left{
    left:50%;
    margin-left:-23%;
    transform:rotate(20deg)
    }
.eyebrow.right{
    right:50%;
    margin-right:-23%;
    transform:rotate(-20deg) 
    }

/*画鼻子*/ 
.nose{
    position:absolute;
    left:50%;
    top:43%;
    width:15%;
    height:5%;
    margin-left:-15%;
    border-right:1px solid #000;
    }
.nose::after{
     content: '';
     display: block;
     width: 40%;
     height: 90%;
     border-radius: 60%;
     border:1px solid transparent;
     border-left: 2px solid #000;
     position: absolute;
     top: 90%;
     left: 84%;
     transform: rotate(-20deg);
     box-shadow: -2px 0 1px #c39674;
    }

/*画路飞脸上伤疤*/ 
.scar{
    width:15%;
    height:10%;
    border-radius:50%;
    border:1px solid transparent; 
    border-bottom-color:#000;
    position:absolute;
    top:36%;
    left:55%;
    transform:rotate(-8deg); 
    }
.scar::before{
    content:'';
    display:block;
    width:50%;
    height:35%;
    border-radius:10%;
    border:1px solid transparent; 
    border-left-color:#000;
    position:absolute;
    top:80%;
    left:65%;
    transform:rotate(5deg); 
    }
.scar::after{
    content:'';
    display:block;
    width:50%;
    height:35%;
    border-radius:10%;
    border:1px solid transparent; 
    border-left-color:#000;
    position:absolute;
    top:80%;
    left:28%;
    transform:rotate(5deg); 
    }

/*画嘴巴*/ 
.mouth{
      width:40%;
      height:14%;
      border-top-left-radius: 5% 20%;
      border-top-right-radius: 5% 20%;
      border-bottom-left-radius: 45% 80%;
      border-bottom-right-radius: 45% 80%; 
      border:1px solid #000; 
      position:absolute;
      top:54%;
      left:30%;
      background:#fff;
    } 
.mouth::before{
      content:'';
      display:block;
      width:95%;
      height:60%;
      border-radius:100%;
      border:1px solid transparent;
      border-bottom:1px solid #000;
      position:absolute;
      top:0;
      left:2%;
    } 

/*画牙齿*/ 
.mouth>.teethn1{
      content:'';
      display:block;
      width:5%;
      height:15%;
      border-left:1px solid #000;
      position:absolute;
      border-radius:30%;
      top:45%;
      left:32%;
    }
.mouth>.teethn2{
      content:'';
      display:block;
      width:5%;
      height:35%;
      border-left:1px solid #000;
      position:absolute;
      border-radius:30%;
      top:27%;
      left:49%;
    }
.mouth>.teethn3{
      content:'';
      display:block;
      width:5%;
      height:22%;
      border-left:1px solid #000;
      position:absolute;
      border-radius:30%;
      top:38%;
      left:65%;
    }
.mouth>.teethn4{
      content:'';
      display:block;
      width:5%;
      height:16%;
      border-left:1px solid #000;
      position:absolute;
      border-radius:30%;
      top:55%;
      left:20%;
    }
.mouth>.teethn5{
      content:'';
      display:block;
      width:5%;
      height:10%;
      border-left:1px solid #000;
      position:absolute;
      border-radius:30%;
      top:55%;
      left:80%;
    } 
    
/*画脖子*/ 
.neck{
    width:18%;
    height:25%;
    background: #dcae8b;
    position:absolute;
    top:60%;
    left:48%;
    margin-left:-6.5%;
    z-index:-3;
    border:1px solid #000;
    border-bottom-color:transparent;
    }
.neck::after{
    content:'';
    display:block;
    width:100%;
    height:130%;
    background:#a6735c;
    border-radius:70%;
    position:absolute;
    top:-35%;
    left:0%;
}

/*画耳朵*/ 
.ear{
    width:20%;
    height:22%;
    border:1px solid red;
    position:absolute;
    top:25%;
    background:#daae8c;
    border:1px solid #000; 
    z-index:-3;
    }
    .ear.left{
    left:12%;
    border-top-left-radius:100% 100%;
    border-top-right-radius:0 0; 
    border-bottom-left-radius:185% 150%;
    border-bottom-right-radius:0% 0%;
    }
.ear.right{
    right:12%;
    border-top-left-radius:0 0;
    border-top-right-radius:100% 100%; 
    border-bottom-left-radius:0 0;
    border-bottom-right-radius:185% 150%;
    }

/*画内耳*/
.ear.left::after{
    content:'';
    display:block;
    width:90%;
    height:90%;
    background:#a6735c;
    border-top-left-radius:100% 100%;
    border-top-right-radius:0 0; 
    border-bottom-left-radius:185% 150%;
    border-bottom-right-radius:0% 0%;
    position:absolute;
    top:9%;
    left:15%;
    border:1px solid #000;
    }
.ear.right::after{
    content:'';
    display:block;
    width:90%;
    height:90%;
    background:#a6735c;
    border-top-left-radius:0 0;
    border-top-right-radius:100% 100%; 
    border-bottom-left-radius:0 0;
    border-bottom-right-radius:185% 150%;
    position:absolute;
    top:9%;
    right:15%;
    border:1px solid #000;
    }

    /*画帽子*/
.hat{
    width:110%;
    height:65%;
    position: absolute;
    top:2%;
    left:-7%;
    background-color: #c69c64;
    border: 1px solid black;
    box-shadow: 
      inset 30px 0 0 #daad73, 
      inset -30px 0 0 #daad73, 
      inset 0 5px 0 #ddac70, 
      inset 0 -20px 0 #d4a56b, 
      inset 70px 0 0 #d8a76c;
    z-index:-4;
    border-radius:50%;
    }
    
/*画帽子前沿*/  
.hat-front{
    width:94%;
    height:70%;
    position: absolute;
    top:-1%;
    left:5%;
    background:transparent;
    border-top:20px solid #c69c64;
    border-radius:180%;
    box-shadow: inset 0 10px #d8a76c;
    }

/*画头发*/
.hair{
    width:100%;
    height:48%;
    position:relative;
    top:0;
    left:0;  
    }
.hair-part{
    width:0;
    height:0;
    border:2vmin solid transparent;
    border-top:16vmin solid #000;
    position:absolute;
 }
.hair-part:nth-child(1){
    top:-6%;
    left:50%;
    transform:rotate(-20deg);
    }
.hair-part:nth-child(2){
    top:-9%;
    left:30%;
    transform:rotate(35deg);
    }
.hair-part:nth-child(3){
    top:10%;
    left:22%;
    transform:rotate(0deg);
    }
.hair-part:nth-child(4){
    top:0%;
    left:22%;
    transform:rotate(20deg);
    }
.hair-part:nth-child(5){
    top:16%;
    left:15%;
    transform:rotate(0deg);
    }
.hair-part:nth-child(6){
    border:2.5vmin solid transparent;
    border-top:12vmin solid #000;
    top:-10%;
    left:55%;
    transform:rotate(-20deg);
    }
.hair-part:nth-child(7){
    top:-5%;
    left:65%;
    transform:rotate(-20deg);
    }
.hair-part:nth-child(8){
    border:2vmin solid transparent;
    border-top:19vmin solid #000;
    top:0%;
    left:70%;
    transform:rotate(-15deg);
    }
.hair-part:nth-child(9){
    border:2vmin solid transparent;
    border-top:17vmin solid #000;
    top:11%;
    left:73%;
    transform:rotate(-15deg);
    }
.hair-part:nth-child(10){
    border:2vmin solid transparent;
    border-top:19vmin solid #000;
    top:15%;
    left:75%;
    transform:rotate(0deg);
    }
.hair-part:nth-child(11){
    border:1.5vmin solid transparent;
    border-top:16vmin solid #000;
    top:18.5%;
    left:13%;
    transform:rotate(25deg);
    }
.hair-part:nth-child(12){
    border:2vmin solid transparent;
    border-top:13vmin solid #000;
    top:0%;
    left:30%;
    transform:rotate(15deg);
    }
.hair-part:nth-child(13){
    border:2vmin solid transparent;
    border-top:14vmin solid #a6735c;
    top:0%;
    left:50%;
    transform:rotate(-15deg);
    z-index:-1;
    }
.hair-part:nth-child(14){
    border:2.5vmin solid transparent;
    border-top:12vmin solid #a6735c;
    top:0%;
    left:60%;
    transform:rotate(-15deg);
    z-index:-1;
    }
.hair-part:nth-child(15){
    border:2vmin solid transparent;
    border-top:13vmin solid #a6735c;
    top:0%;
    left:35%;
    transform:rotate(15deg);
    z-index:-1;
    }
.hair-part:nth-child(16){
    border:2vmin solid transparent;
    border-top:14vmin solid #000;
    top:30%;
    left:78%;
    transform:rotate(-15deg);
    z-index:-1;
    }
.hair-part:nth-child(17){
    border:1vmin solid transparent;
    border-top:5vmin solid #000;
    top:135%;
    left:60%;
    transform:rotate(-15deg);
    z-index:-3;
    }
.hair-part:nth-child(18){
    border:1.3vmin solid transparent;
    border-top:6vmin solid #000;
    top:130%;
    left:64%;
    transform:rotate(-15deg);
    z-index:-3;
    }
.hair-part:nth-child(19){
    border:1vmin solid transparent;
    border-top:5vmin solid #000;
    top:135%;
    left:34%;
    transform:rotate(15deg);
    z-index:-3;
    }
.hair-part:nth-child(20){
    border:1.3vmin solid transparent;
    border-top:6vmin solid #000;
    top:130%;
    left:30%;
    transform:rotate(15deg);
    z-index:-3;
    }

/*画衣服*/    
.clothes{
    width:120%;
    height:60%;
    position: absolute;
    top:76%;
    left:-8%;
    border-radius:40%;
    background:#bc2440;
    border-top: 1px solid #000;
    box-shadow:inset 0 1vmin #ab1640;
    z-index:-4;
    }

/*画胸肌*/  
.chest{
    width:30%;
    height:60%;
    position: absolute;
    top:75%;
    left:35.5%;
    border-radius:40%;
    background:#daae8c;
    z-index:-4;
    }

/*画锁骨*/
.chest::after{
    content:'';
    display:block;
    width:25%;
    height:7%;
    position: absolute;
    top:22%;
    left:15%;
    border-top:1px solid #000;
    border-top-right-radius:50%;
    }
.chest::before{
    content:'';
    display:block;
    width:25%;
    height:7%;
    position: absolute;
    top:22%;
    right:15%;
    border-top:1px solid #000;
    border-top-left-radius:50%;
    }

/*画胸口伤疤*/
.mark{
    width:5%;
    height:25%;
    position: absolute;
    top:90%;
    left:54%;
    border:1px solid #000;
    border-radius:50%;
    background:#d09a98;
    transform:rotate(30deg)
    }
.mark::after{
    content:'';
    display:block;
    width:100%;
    height:100%;
    position: absolute;
    top:22%;
    left:-200%;
    border:1px solid #000;
    border-radius:50%;
    background:#d09a98;
    transform:rotate(-60deg)
    }
/*
*到此，大功告成~ 
*丑是丑了点~但是重要的写代码的过程啦.....
*/
`
writeCode.call(undefined,cssCode) 

}.call()

