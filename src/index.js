"use strict";
document.addEventListener('DOMContentLoaded', () => {
    // SignUp button
    document.getElementById('regisztracio').addEventListener('click', () => {
        let user = document.getElementById('felhasznalo').value;
        let email1 = document.getElementById('bemail1').value;
        let email2 = document.getElementById('bemail2').value;
        let pass1 = document.getElementById('jelszo1').value;
        let pass2 = document.getElementById('jelszo2').value;
        let joFelhasz = false;
        let joEmail = false;
        let joJelszo = false;
        // Username
        if (user.length <= 30 && user.length >= 6) {
            if (user.includes('..') || user.includes(',') || user.includes('+') ||
                user.includes('-') || user.includes('_') || user.includes('<') || user.includes('>') ||
                user.includes('&') || user.includes("'") || user.startsWith('.') || user.endsWith('.')) {
                console.log('A felhasználónév nem tartalmazhat speciális karaktert!');
                document.getElementById('felhaszRossz').textContent = 'A felhasználónév nem tartalmazhat speciális karaktert!';
            }
            else {
                joFelhasz = true;
                console.log('Jó felhasználónév.');
                document.getElementById('felhaszRossz').textContent = '';
            }
        }
        else {
            document.getElementById('felhaszRossz').textContent = 'Rossz a felhazsnálónév hosszúság';
        }
        // Email
        if (email1 == email2) {
            if (email1.endsWith('.hu') || email1.endsWith('.com') && email1.includes('@')) {
                console.log('Jó email.');
                joEmail = true;
                document.getElementById('email1Rossz').textContent = '';
            }
            else {
                console.log('Rossz az email cím.');
                document.getElementById('email1Rossz').textContent = 'Rossz az email cím.';
            }
        }
        else {
            console.log('A két email nem egyezik meg.');
            document.getElementById('email1Rossz').textContent = 'A két email nem egyezik meg.';
        }
        // Password
        if (pass1.length < 5 || pass1.length > 10) {
            console.log('Az 1. jelszó nem megfelelő hosszúságú');
            document.getElementById('pass1Rossz').textContent = 'Az 1. jelszó nem megfelelő hosszúságú';
        }
        else if (pass2.length < 5 || pass2.length > 10) {
            console.log('A 2. jelszó nem megfelelő hosszúságú');
            document.getElementById('pass1Rossz').textContent = 'A 2. jelszó nem megfelelő hosszúságú';
        }
        else if (pass1 == pass2) {
            if (!pass1.includes('+') || !pass1.includes("'") || !pass1.includes('"')) {
                console.log('Jó a jelszó');
                joJelszo = true;
                document.getElementById('pass1Rossz').textContent = '';
            }
        }
        else if (pass1 != pass2) {
            console.log('A két jelszó nem egyezik!');
            document.getElementById('pass1Rossz').textContent = 'A két jelszó nem egyezik!';
        }
        //alert
        if (joFelhasz && joEmail && joJelszo) {
            window.alert('Minden Rendben van');
        }
    });
});
