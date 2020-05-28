var database=['bike','butterfly','cap','car','cartoon','cat','crow','fox','lion','mouse','panda','peacock','pig','racoon','rose','teddy','tiger'];
function fill_image(){
    var size=database.length;
    var arr=[];
    while(arr.length!=4){
        var random_number=Math.floor(Math.random() * size);
        if(arr.includes(random_number)){
            var i;
        }
        else{
            arr.push(random_number);
        }
    }
    
    var answer_number=Math.floor(Math.random() * 4);
    var answer_name=database[arr[answer_number]];
    
    document.getElementsByClassName('answer_number')[0].innerHTML=answer_number;
    document.getElementsByClassName('answer_name')[0].innerHTML=answer_name;
    console.log(document.getElementById('a').src);
    console.log('answer is '+answer_number)
    console.log('div number'+  document.getElementsByClassName('answer_number')[0].innerHTML);

    document.getElementById('a').src=`./images/object/${database[arr[0]]}.png`;
    document.getElementById('b').src=`./images/object/${database[arr[1]]}.png`;
    document.getElementById('c').src=`./images/object/${database[arr[2]]}.png`;
    document.getElementById('d').src=`./images/object/${database[arr[3]]}.png`;
    speak_name();
}
