
let windowWidth;
let windowHeight;

let scrollY = 0;
let relativeScrollY = 0;
let totalScrollHeight = 0;
let currenScene = 0;
let calAnimationVal;

let prevDurations = 0;
let pixelDuration = 0;


let animationKeyframes = [

    //메인 및 트위치 화질
        { // contentsA video (case 0)
            animationVal:{
                time:[0, 25]
            }
        },
    
    
    //망 사용료
        { // contentsB in (case 1)
            animationVal:{
                opacity:[0, 1],
                textMove:[100, 0]
            }
        },
        { // contentsB out (case 2)
            animationVal:{
                opacity:[1, 0],
                textMove:[0, -100]
            }
        },


    //망 사용료2
        { // contentsC in (case 3)
        animationVal:{
            opacity:[0, 1],
            textMove:[100, 0]
        }
    },
    { // contentsC out (case 4)
        animationVal:{
            opacity:[1, 0],
            textMove:[0, -100]
        }
    },

    //ISP & CP
    { // contentsD in (case 5)
        animationVal:{
            opacity:[0, 1],
            miniTextBox1:[60, 0],
            miniTextBox2:[60, 0]
        }
    },
    { // contentsD out (case 6)
        animationVal:{
            opacity:[1, 0],
            miniTextBox1:[0, -60],
            miniTextBox2:[0, -60]
        }
    },


//단대단 원칙
    { // contentsE in (case 7)
        animationVal:{
            opacity:[0, 1],
            imgBox:[-60, 0],
            textBox:[60, 0]
        }
    },


//피어링 & 트랜짓
    { // contentsF in (case 8)
        animationVal:{
            opacity:[0, 1],
            imgBox2:[-600, 0],
            imgBox3:[600, 0],
            imgBox4:[0, 0]
        }
    },



    {
        animationVal:{
            
        }
    },

    {
        animationVal:{

        }
    },
    {
        animationVal:{

        }
    },

    {
        animationVal:{
            
        }
    },
    {
        animationVal:{
            
        }
    },
    {
        animationVal:{
            opacity: [0, 1],
            time: [25, 10]

        }
    },
    {
        animationVal:{


        }
    }
]





let transparentObj = document.querySelectorAll(".opa");


let elemBody = document.body;

function init()
{
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    render();
    resizeHandler();
    window.addEventListener('scroll', scrollHandler);
    window.addEventListener('resize', resizeHandler);
    
    for(let i = 0; i < transparentObj.length; i++)
    {
        transparentObj[i].style.opacity = 0;
    }
}

function scrollHandler()
{
    scrollY = window.pageYOffset;

    if(scrollY < 0 || scrollY > (totalScrollHeight - windowHeight))
    {
        return;
    }

    if(scrollY > pixelDuration+prevDurations)
    {
        prevDurations += pixelDuration;
        currenScene++;
    }
    else if(scrollY < prevDurations)
    {
        currenScene--;
        prevDurations -= pixelDuration;
    }

    relativeScrollY = scrollY - prevDurations;

    render(currenScene);
}

function resizeHandler() //애니메이션 프래임 수를 조정한다.
{
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;

    totalScrollHeight = 0;
    pixelDuration = windowHeight * 0.5;

    for( let i = 0; i < animationKeyframes.length; i++)
    {
        totalScrollHeight += pixelDuration;
    }
    totalScrollHeight += windowHeight;

    elemBody.style.height = totalScrollHeight + 'px';
}





function render(nowState)
{
    let targetElem = document.querySelectorAll('.container');

    switch(nowState)
    {
//(0)메인
        case 0:{
            let timeVal;
            let scrollAniElem = targetElem[0].querySelectorAll('.sa');
            timeVal = calcAni(animationKeyframes[0].animationVal.time);
            
            let myVideo = document.querySelector('#myVideo');
            myVideo.currentTime = timeVal;
            console.log(timeVal);
        }break;



//(1)망사용료1
        case 1:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[1].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[1].animationVal.opacity);
            moveVal= calcAni(animationKeyframes[1].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
        }break;

        case 2:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[1].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[2].animationVal.opacity);
            moveVal= calcAni(animationKeyframes[2].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
        }break;



//(2)밍시용료2
        case 3:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[2].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[3].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[3].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
        }break;

case 4:{
        let opacityVal, moveVal;
            let scrollAniElem = targetElem[2].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[4].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[4].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            targetElem[3].querySelector('.miniTextBox1').style.opacity = 0;
            targetElem[3].querySelector('.miniTextBox2').style.opacity = 0;
        }break;



//(3)ISP & CP
        case 5:{
            let opacityVal, moveValA, moveValB;
            let scrollAniElem = targetElem[3].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[5].animationVal.opacity);
            moveValA = calcAni(animationKeyframes[5].animationVal.miniTextBox1);
            moveValB = calcAni(animationKeyframes[5].animationVal.miniTextBox2);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveValA + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveValB + 'px)';
        }break;

        case 6:{
            let opacityVal, moveValA, moveValB;
            let scrollAniElem = targetElem[3].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[6].animationVal.opacity);
            moveValA = calcAni(animationKeyframes[6].animationVal.miniTextBox1);
            moveValB = calcAni(animationKeyframes[6].animationVal.miniTextBox2);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveValA + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveValB + 'px)';
            targetElem[4].querySelector('.imgBox').style.opacity = 0;
            targetElem[4].querySelector('.textBox').style.opacity = 0;
        }break;



//(4)단대단 원칙
        case 7:{
            let opacityVal, moveValA, moveValB;
            let scrollAniElem = targetElem[4].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[7].animationVal.opacity);
            moveValA = calcAni(animationKeyframes[7].animationVal.imgBox);
            moveValB = calcAni(animationKeyframes[7].animationVal.textBox);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateX(' + moveValA + 'px)';
            scrollAniElem[1].style.transform = 'translateX(' + moveValB + 'px)';
            targetElem[5].querySelector('.imgBox2').style.opacity = 0;
            targetElem[5].querySelector('.imgBox3').style.opacity = 0;
            targetElem[5].querySelector('.imgBox4').style.opacity = 0;
        }break;



//(5)피어링 & 트랜짓
        case 8:{
            let opacityVal, moveValA, moveValB;
            let scrollAniElem = targetElem[5].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[8].animationVal.opacity);
            moveValA = calcAni(animationKeyframes[8].animationVal.imgBox2);
            moveValB = calcAni(animationKeyframes[8].animationVal.imgBox3);
            moveValC = calcAni(animationKeyframes[8].animationVal.imgBox4);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[2].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateX(' + moveValA + 'px)';
            scrollAniElem[1].style.transform = 'translateX(' + moveValB + 'px)';
        }break;

        case 9:
        case 10:
        case 11:
        case 12:
        case 13:{
        }break;

        case 14:{
            let opacityVal
            let timeVal = calcAni(animationKeyframes[14].animationVal.time);
            let scrollAniElem = targetElem[8].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[8].animationVal.opacity);
            
            scrollAniElem[0].style.opacity = opacityVal;
            let myVideo2 = document.querySelector('#myVideo2');
            myVideo2.currentTime = timeVal;
        }break;



    }
}



function calcAni(value)
{
    return( relativeScrollY / pixelDuration) * (value[1] - value[0]) + value[0];
}





init();