/*
Aufgabe: (7 StudiVZ)
Name: (Julian Schüler)
Matrikel: (256033)
Datum: (02.12.2017)
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace StudiVZ {

    interface StudentData {
        matrikelnummer: number;
        name: string;
        vorname: string;
        alter: number;
        kommentar: string;
        geschlecht: boolean;
    }

    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (m oder w) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(input: string): string {

        let stringToSplit: string[] = input.split(",", 6);

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
            let student: StudentData = {
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

    function queryData(_matrikel: number): string {

        for (var i: number = 0; i < students.length; i++) {

            if (students[i].matrikelnummer == _matrikel) {
                let matrikelAus: string = " Matrikelnummer:" + students[i].matrikelnummer;
                let vornameAus: string = " Vorname" + students[i].vorname;
                let nameAus: string = " Name " + students[i].name;
                let alterAus: string = " Alter: " + students[i].alter;
                let kommentarAus: string = " Kommentar: " + students[i].kommentar;
                let geschlechtAus: string;

                if (students[i].geschlecht)
                    geschlechtAus = " männlich";
                else
                    geschlechtAus = " weiblich";

                return matrikelAus + vornameAus + nameAus + alterAus + geschlechtAus + kommentarAus;
            }

        }
    }
}