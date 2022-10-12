

document.addEventListener('DOMContentLoaded', () => {
    // SignUp button
    document.getElementById('regisztracio')!.addEventListener('click', () => {
        let user  = (document.getElementById('felhasznalo') as HTMLInputElement).value;
        let email = (document.getElementById('bemail') as HTMLInputElement).value;
        let pass = (document.getElementById('jelszo') as HTMLInputElement).value;
        // Username
        if (user.length <= 30 && user.length >= 6) {
            if (user.includes('..') || user.includes(',') || user.includes('+') || 
            user.includes('-') || user.includes('_') || user.includes('<') || user.includes('>') || 
            user.includes('&') || user.startsWith('.') || user.endsWith('.')) {
                console.log('A felhasználónév nem tartalmazhat speciális karaktert!');
            }
        }else if ( user.length > 30 || user.length < 6){
            console.log('Rossz a felhazsnálónév hosszúság')
        }
        // Password
        
    })

})