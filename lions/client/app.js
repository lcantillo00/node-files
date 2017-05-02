// $('#submit').click(function() {
//             $.ajax({
//                 url: "http://localhost:7070/lions",
//                 method: 'POST',
//                 success: function() {
//                     console.log("yous data is been post")
//                 },
//                 data: {
//                     lionName:$('#lionName').val(),
//                     lionPride: $('#lionPride').val(),
//                     lionAge: $('#lionAge').val(),
//                     select: $('#select').val()
//                 }
//
//             });
//         });
// $('show').click(function(){
//     e.preventDefault();
//     $.ajax({
//         url:"http://localhost:7070/lions",
//         method:'GET',
//         success:function(res){
//             $('#tables1').html("");
//                                 res.forEach(function(todo){
//
//
//                                     $('#tables1').append(`<tr class="lo"><td class="tdname">${todo.lionName}</td>+<td class="tdT">${todo.lionPride}</td>+<td class="tdT">${todo.lionAge}</td>+<td class="tdT">${todo.select}</td></tr>`);
//
//                                 })
//         }
//     })
// })
var lionTemplate = '<h3><%=name%></h3>'+
'<h3><%=pride%></h3>'+
'<small>age:<%=age%></small>';
'<small><%=gender%></small>';


var lions=[];
var makeTemplate=function(data){
    var li=document.createElement('li');
    var lionList=document.querySelector('.lion-list');
    var compiled=_.templa(lionTemplate);
    var lionHtml=compiled(data);
    li.innerHTML=lionHtml;
    lionList.insertBefore(li,lionList.firstChild);
}
var updateLionList=function(){
    var lionData=lions[lions.length-1];
    makeTemplate(lionData);

}
    var getValues= function(){
    var name=document.querySelector('input[name=lion-name]').value;
    var pride=document.querySelector('input[name=lion-pride]').value;
    var age=document.querySelector('input[type=number]').value;
    var gender=document.querySelector('select');
    gender=gender.options[gender.selectedIndex].value;
    document.querySelector('input[name=lion-name]').value="";
    document.querySelector('input[name=lion-pride]').value="";
    document.querySelector('input[type=number]').value="";
    return {
        name:name,
        pride:pride,
        age:age,
        gender:gender
    };

};


(function(){
    var form= document.querySelector('form');
    form.addEventListener('submit',function(e){
        e.preventDefault();
        var values=getValues();
        // console.log(values);
        fech('/lions',{
            method:'post',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(values);

        })
        .then(function(resp){
            return resp.json();
        })
        .then(function(createdLion){
            lions.push(createdLion);
            console.log(lions);
            updateLionList();
        })

        return false;
    })

})();
