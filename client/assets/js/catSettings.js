
var colors = Object.values(allColors())

var defaultDNA = {
    "bodycolor" : 10,
    "tailcolor" : 10,
    "eyescolor" : 96,
    "earscolor" : 10,
    //Cattributes
    "eyeshape" : 1,
    "earposition" : 1,
    "decorationPattern" : 1,
    "decorationMidcolor" : 13,
    "decorationSidescolor" : 13,
    "animation" :  1,
    "lastNum" :  1
    }

// when page load
$( document ).ready(function() {
  $('#dnabody').html(defaultDNA.bodycolor);
  $('#dnatail').html(defaultDNA.tailcolor);
  $('#dnaeyes').html(defaultDNA.eyescolor);
  $('#dnaears').html(defaultDNA.earscolor);
  //Cattributes
  $('#dnashape').html(defaultDNA.eyeshape);
  $('#dnaearposition').html(defaultDNA.earposition);
  $('#dnadecoration').html(defaultDNA.decorationPattern);
  $('#dnadecorationMid').html(defaultDNA.decorationMidcolor);
  $('#dnadecorationSides').html(defaultDNA.decorationSidescolor);
  $('#dnaanimation').html(defaultDNA.animation);
  $('#dnaspecial').html(defaultDNA.lastNum);

  renderCat(defaultDNA)
});

function getDna(){
    var dna = ''
    dna += $('#dnabody').html()
    dna += $('#dnatail').html()
    dna += $('#dnaeyes').html()
    dna += $('#dnaears').html()
    dna += $('#dnashape').html()
    dna += $('#dnaearposition').html()
    dna += $('#dnadecoration').html()
    dna += $('#dnadecorationMid').html()
    dna += $('#dnadecorationSides').html()
    dna += $('#dnaanimation').html()
    dna += $('#dnaspecial').html()

    return parseInt(dna)
}

function renderCat(dna){
    bodyColor(colors[dna.bodycolor],dna.bodycolor)
    $('#bodycolor').val(dna.bodycolor)
    tailColor(colors[dna.tailcolor],dna.tailcolor)
    $('#tailcolor').val(dna.tailcolor)
    eyesColor(colors[dna.eyescolor],dna.eyescolor)
    $('#eyescolor').val(dna.eyescolor)
    earsColor(colors[dna.earscolor],dna.earscolor)
    $('#earscolor').val(dna.earscolor)
    eyeVariation(dna.eyeshape)
    $('eyeshape').val(dna.eyeshape)
    earVariation(dna.earposition)
    $('earposition').val(dna.earposition)
    animationVariation(dna.animation)
    $('animationname').val(dna.animation)
}

// listener functions
$('#bodycolor').change(()=>{
    var colorVal = $('#bodycolor').val()
    bodyColor(colors[colorVal],colorVal)
})
$('#tailcolor').change(()=>{
    var colorVal = $('#tailcolor').val()
    tailColor(colors[colorVal],colorVal)
})
$('#eyescolor').change(()=>{
    var colorVal = $('#eyescolor').val()
    eyesColor(colors[colorVal],colorVal)
})
$('#earscolor').change(()=>{
    var colorVal = $('#earscolor').val()
    earsColor(colors[colorVal],colorVal)
})
$('#eyeshape').change(()=>{
    var shape = parseInt($('#eyeshape').val())
    eyeVariation(shape)
})
$('#earposition').change(()=>{
    var position = parseInt($('#earposition').val())
    earVariation(position)
})
$('#animation').change(()=>{
    var animationVal = parseInt($('#animation').val())
    animationVariation(animationVal)
})