
$('#toggle-password').click(function(){
    var passwordField = $('#password-field');
    var passwordFieldType = passwordField.attr('type');
    if(passwordFieldType == 'password') {
        passwordField.attr('type', 'text');
        $(this).removeClass('fa-eye').addClass('fa-eye-slash');
    } else {
        passwordField.attr('type', 'password');
        $(this).removeClass('fa-eye-slash').addClass('fa-eye');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Xử lý sự kiện khi nhấn vào nút "Đăng ký"
    document.getElementById('signup-link').addEventListener('click', function(event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ a

        // Ẩn form đăng nhập và hiển thị form đăng ký
        document.getElementById('form-login').style.display = 'none';
        document.getElementById('form-signup').style.display = 'block';
    });

    // Xử lý sự kiện khi nhấn vào nút "Đăng nhập"
    document.getElementById('login-link').addEventListener('click', function(event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ a

        // Ẩn form đăng ký và hiển thị form đăng nhập
        document.getElementById('form-signup').style.display = 'none';
        document.getElementById('form-login').style.display = 'block';
    });
});

