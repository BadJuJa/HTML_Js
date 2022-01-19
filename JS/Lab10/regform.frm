<form id="register_form" name="register_form" method="post" action="register.php">
    <table>
        <tr>
            <td>ФИО:</td>
            <td><input type="text" name="rname" id="rname" required/></td>
        </tr>
        <tr>
            <td>E-Mail:</td>
            <td><input type="email" name="email" id="email" required/></td>
        </tr>
        <tr>
            <td>Пароль:</td>
            <td><input type="password" name="rpass" id="rpass" 
                oninput="validateComments(document.getElementById('rpass'),document.getElementById('rpass_r'))"
            required/></td>
        </tr>
        <tr>
            <td>Повторите пароль:</td>
            <td><input type="password" name="rpass_r" id="rpass_r"
                oninput="validateComments(document.getElementById('rpass'),document.getElementById('rpass_r'))"
            required/></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <input type="submit" name="reg_button" id="reg_button" value="Зарегистрироваться" onclick="validate(this.form)"/>
            </td>
        </tr>
    </table>
</form>