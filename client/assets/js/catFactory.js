
//Random color
function getColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
}

function genColors(){
    var colors = []
    for(var i = 10; i < 99; i ++){
      var color = getColor()
      colors[i] = color
    }
    return colors
}

//This function code needs to modified so that it works with Your cat code.
function bodyColor(color,code) {
    $('#head, .body').css('background', '#' + color)  //This changes the color of the cat
    $('#bodycode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnabody').html(code) //This updates the body color part of the DNA that is displayed below the cat
}
function tailColor(color,code) {
    $('#tail').css('background', '#' + color)  //This changes the color of the cat
    $('#tailcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnatail').html(code) //This updates the body color part of the DNA that is displayed below the cat
}
function eyesColor(color,code) {
    $('.eye_left, .eye_right').css('background', '#' + color)  //This changes the color of the cat
    $('#eyescode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnaeyes').html(code) //This updates the body color part of the DNA that is displayed below the cat
}
function earsColor(color,code) {
    $('.ear, .paw_back, .paw_front').css('background', '#' + color)  //This changes the color of the cat
    $('#earscode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnaears').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

//###################################################
//Functions below will be used later on in the project
//###################################################
function eyeVariation(num) {

    $('#dnashape').html(num)
    switch (num) {
        case 1:
            normalEyes()
            $('#eyename').html('Basic')
            break
        case 2:
            normalEyes()
            $('#eyename').html('Surprised')
            eyesType1()
            break
        case 3:
            normalEyes()
            $('#eyename').html('Crazy')
            eyesType2()
            break
        case 4:
            normalEyes()
            $('#eyename').html('Laser')
            eyesType3()
            break
        case 5:
            normalEyes()
            $('#eyename').html('Big')
            eyesType4()
            break
        case 6:
            normalEyes()
            $('#eyename').html('$$$')
            eyesType5()
            break
    }
}

function earVariation(num) {

    $('#dnaearposition').html(num)
    switch (num) {
        case 1:
            normalEars()
            $('#earname').html('Basic')
            break
        case 2:
            normalEars()
            $('#earname').html('Wide')
            earsType1()
            break
    }
}

function decorationVariation(num) {
    $('#dnadecoration').html(num)
    switch (num) {
        case 1:
            $('#decorationName').html('Basic')
            normaldecoration()
            break
    }
}

function animationVariation(num) {
    $('#dnaanimation').html(num)
    switch (num) {
        case 1:
            normalAnimation()
            $('#animationname').html('None')
            break
        case 2:
            normalAnimation()
            $('#animationname').html('Tail')
            animationType1()
            break
        case 3:
            normalAnimation()
            $('#animationname').html('Head')
            animationType2()
            break
        case 4:
            normalAnimation()
            $('#animationname').html('Ears')
            animationType3()
    }
}

//Eye Variation functions
async function normalEyes() {
    $('.eye_right, .eye_left').css('outline', 'solid 0px')
    $('.eyes').css('transform', 'rotate(0deg)')
    $('.eyes').css('display', 'flex')
    $('.laser_eye_right, .laser_eye_left').css('display', 'none')
    $('.eyes_emoji').css('display', 'none')
    $('.money_eyes_right, .money_eyes_left').css('display', 'none')
}
async function eyesType1() {
    await $('.eye_right, .eye_left').css('outline', '8px solid white')
}
async function eyesType2() {
    await $('.eye_left').css('outline', '6px solid white')
    await $('.eye_right').css('outline', '10px solid white')
    await $('.eyes').css('transform', 'rotate(-5deg) translate(0px,-5px)')
}
async function eyesType3() {
    await $('.laser_eye_right, .laser_eye_left').css('display', 'flex')
    await $('.laser_eye_right, .laser_eye_left').css('visibility', 'visible')
}
async function eyesType4() {
    await $('.eyes').css('display','none')
    await $('.eyes_emoji').css('display', 'flex')
    await $('.eyes_emoji').css('visibility', 'visible')
}
async function eyesType5() {
    await $('.eyes').css('display','none')
    await $('.money_eyes_right, .money_eyes_left').css('display', 'flex')
    await $('.money_eyes_right, .money_eyes_left').css('visibility', 'visible')
}
//Ear Variation functions
async function normalEars() {
    $('.left_ear').css('left', '20px')
    $('.right_ear').css('left', '70px')
}
async function earsType1() {
    await $('.left_ear').css('left', '0px')
    await $('.right_ear').css('left', '90px')
}


async function normaldecoration() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "48px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}

async function normalAnimation() {
    $("#tail").removeClass("movingTail");
    $("#head").removeClass("movingHead");
    $(".ears").removeClass("movingEars");
}

async function animationType1() {
    await $("#tail").addClass("movingTail");
}

async function animationType2() {
    await $("#head").addClass("movingHead");
}

async function animationType3() {
    await $(".ears").addClass("movingEars");
}