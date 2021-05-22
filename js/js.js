// شهر، يوم، ساعة، دقيقة، ثانية odHMS بصيغة countdown إضافة عداد زمني 
$(document).ready(function() {
    // Count-Down
    $(function () {
        var austDay = new Date();
        austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
        $('#defaultcountdown').countdown({until: austDay, format: 'odHMS'});
    });
});
// إظهار رسالة النجاح عند إدخال بريد إلكتروني صحيح والفشل عند إدخال بريد إلكتروني خاطئ 
 //Form Validation
 $('.form-control').blur(function(){
    var x = document.forms["myForm"]["email"].value;
    var atpos = x.indexOf('@');
    var dotpos = x.lastIndexOf('.');
    if(atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
    {
        $(this).parent().find(".alert-danger").fadeIn(300);

    }
    else {
        $(this).parent().find(".alert-success").fadeIn(300);

    }
});

//Form Validation for footer
$('.form-control').blur(function(){
    var x = document.forms["myForm2"]["email2"].value;
    var atpos = x.indexOf('@');
    var dotpos = x.lastIndexOf('.');
    if(atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
    {
        $(this).parent().find(".alert-danger").fadeIn(300);

    }
    else{
        $(this).parent().find(".alert-success").fadeIn(300);
    }
});
var wow =new WoW({
    mobile:false
});
wow.init();