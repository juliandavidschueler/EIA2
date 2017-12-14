/*
Aufgabe: (7 StudiVZ)
Name: (Julian Schüler)
Matrikel: (256033)
Datum: (02.12.2017)
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (m oder w) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(input) {
        let stringToSplit = input.split(",", 6);
        if (Number.isNaN(parseInt(stringToSplit[0]))) {
            return "'Matrikelnummer' muss eine Zahl sein";
        }
        else if (stringToSplit[1] == "") {
            return "'Name' muss ein Wort sein";
        }
        else if (stringToSplit[2] == "") {
            return "'Vorname' muss ein Wort sein";
        }
        else if (parseInt(stringToSplit[3]) == NaN) {
            return "'Alter' muss eine Zahl sein";
        }
        else if (parseInt(stringToSplit[4]) != 1 && parseInt(stringToSplit[4]) != 0) {
            return "'Geschlecht' bitte mit 0 oder 1 eingeben";
        }
        else if (stringToSplit[5] == "") {
            return "'Kommentar' als Wörter eingeben";
        }
        else {
            let student = {
                matrikelnummer: parseInt(stringToSplit[0]),
                name: stringToSplit[1],
                vorname: stringToSplit[2],
                alter: parseInt(stringToSplit[3]),
                geschlecht: parseInt(stringToSplit[4]) == 1,
                kommentar: stringToSplit[5]
            };
            students.push(student);
            console.log(students);
            return "gespeichert";
        }
    }
    function queryData(_matrikel) {
        for (var i = 0; i < students.length; i++) {
            if (students[i].matrikelnummer == _matrikel) {
                let matrikelAus = " Matrikelnummer:" + students[i].matrikelnummer;
                let vornameAus = " Vorname" + students[i].vorname;
                let nameAus = " Name " + students[i].name;
                let alterAus = " Alter: " + students[i].alter;
                let kommentarAus = " Kommentar: " + students[i].kommentar;
                let geschlechtAus;
                if (students[i].geschlecht)
                    geschlechtAus = " männlich";
                else
                    geschlechtAus = " weiblich";
                return matrikelAus + vornameAus + nameAus + alterAus + geschlechtAus + kommentarAus;
            }
        }
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=Aufgabe-07-StudiVZ.js.map