/*
Aufgabe: (11 Konfigurator)
Name: (Julian Schüler)
Matrikel: (256033)
Datum: (05.01.2017)
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe11;
(function (Aufgabe11) {
    window.addEventListener("load", Konfigurator); //Ruft Konfigurator Funktion auf, wenn Seite geladen ist
    let baumarten = document.createElement("select"); //Erstellt Variable Baumarten als HTMLSelectElement
    let halterung = document.createElement("select"); //Erstellt Variable Halterung als HTMLSelectElement
    let lieferung = document.createElement("select"); //Erstellt Variable Lieferung als HTMLSelectElement
    let Name = document.createElement("input"); //Erstellt Variable Name als HTMLInputElement
    let Vorname = document.createElement("input"); //Erstellt Variable Vorname als HTMLInputElement
    let Mail = document.createElement("input"); //Erstellt Variable Mail als HTMLInputElement
    let Adresse = document.createElement("input"); //Erstellt Variable Adresse als HTMLInputElement
    let Plz = document.createElement("input"); //Erstellt Variable Plz als HTMLInputElement
    let prufen = document.createElement("div"); //Erstellt Variable prufen als HTMLInputElement
    let korb = document.createElement("div"); //Erstellt Variable korb als HTMLInputElement
    function Konfigurator() {
        let h2 = document.createElement("h2"); //Variable h2 als HTMLHeadingElement
        h2.innerText = "Warenkorb"; //In h2 soll Warenkorb stehen
        h2.style.position = "absolute"; //CSS Anweisung
        h2.style.right = "390px"; //CSS Anweisung
        h2.style.top = "0px"; //CSS Anweisung
        h2.style.zIndex = "99"; //CSS Anweisung
        document.getElementById("korbbild").appendChild(h2); //Beziehe Daten von ID korbbild und hänge h2 daran
        korb.style.display = "inline-block"; //CSS Anweisung
        korb.style.position = "absolute"; //CSS Anweisung
        korb.style.right = "10px"; //CSS Anweisung
        korb.style.top = "10px"; //CSS Anweisung
        korb.style.width = "500px"; //CSS Anweisung
        korb.style.height = "500px"; //CSS Anweisung
        korb.style.paddingTop = "40px"; //CSS Anweisung
        korb.style.paddingLeft = "10px"; //CSS Anweisung
        korb.style.backgroundColor = "red"; //CSS Anweisung
        document.getElementById("korbbild").appendChild(korb); //Beziehe Daten von ID korbbild und hänge korb daran
        baumarten.addEventListener("change", AuswahlAuslesen); //Erstelle EventListener für Variable Baumarten, reagier bei Veränderung und gib Funktion AuswahlAuslesen aus
        document.getElementById("baumtyp").appendChild(baumarten); //Beziehe Daten von ID baumtyp und hänge baumarten daran
        baumarten.name = "Baumarten"; //Information name die vom Server verwendet wird
        for (let i = 0; i < Aufgabe11.baumdaten.length; i++) {
            let option = document.createElement("option"); //Variable option vom typ HTMLOptionElement soll ein element namens Option erstellen
            option.innerText = Aufgabe11.baumdaten[i].name; //In dieser variable soll der Inhalt von baumdaten[i].name ausgegeben werden
            baumarten.id = Aufgabe11.baumdaten[i].element; //ID für späteren Nutzen im Warenkorb (Brauch man das)
            baumarten.appendChild(option); //variable option wird an baumarten angehängt
        }
        halterung.addEventListener("change", AuswahlAuslesen); //Erstelle EventListener für Variable Halterung, reagier bei Veränderung und gib Funktion AuswahlAuslesen aus
        document.getElementById("halterung").appendChild(halterung); //Beziehe Daten von ID halterung und hänge halterung daran
        halterung.name = "Halterungstyp"; //Information name die vom Server verwendet wird
        for (let i = 0; i < Aufgabe11.halterungdaten.length; i++) {
            let option = document.createElement("option"); //Variable option vom typ HTMLOptionElement soll ein element namens Option erstellen
            option.innerText = Aufgabe11.halterungdaten[i].name; //In dieser variable soll der Inhalt von halterungsdaten[i].name ausgegeben werden
            halterung.id = Aufgabe11.halterungdaten[i].element; //ID für späteren Nutzen im Warenkorb
            halterung.appendChild(option); //variable option wird an halterung angehängt
        }
        for (let i = 0; i < Aufgabe11.kugeldaten.length; i++) {
            let kugeltyp = document.createElement("input"); //Variable namens kugeltyp soll ein HTMLInputElement werden
            kugeltyp.type = "checkbox"; //Erstelle Checkbox 
            kugeltyp.name = "Kugeltyp"; //Wird vom Server verwendet
            kugeltyp.id = Aufgabe11.kugeldaten[i].element; //ID für späteren Nutzen im Warenkorb
            kugeltyp.addEventListener("change", function () {
                CheckBoxKugelnAuslesen(kugeltyp, "1"); //gib Funktion CheckBoxKugelnAuslesen aus und übergib genannte Parameter
            });
            document.getElementById("kugeln").appendChild(kugeltyp); //Beziehe Daten von ID kugeln und hänge kugeltyp daran
            let kugellabel = document.createElement("label"); //Variable namens kugellabel soll ein HTMLLabelelement erstellen
            kugellabel.innerText = Aufgabe11.kugeldaten[i].name; //In kugellabel sollen Daten kugeldaten[i].name stehen
            document.getElementById("kugeln").appendChild(kugellabel); //Beziehe Daten von ID kugeln und hänge kugellabel daran
            let kugelanz = document.createElement("input"); //Variable namens kugellabel soll ein HTMLLabelelement erstellen
            kugelanz.type = "number"; //kugelanzahl soll vom datentyp number sein
            kugelanz.step = "1"; //kugelanzahl soll immer in einer schritten hochzählen
            kugelanz.min = "0"; //Mindestwert ist 0 
            kugelanz.value = "1"; //In meiner Value steht standartisiert immer 1
            kugelanz.style.marginRight = "1.5em"; //CSS Anweisung für einen Außenabstand von 1.5em
            kugelanz.addEventListener("change", function () {
                kugeltyp.checked = true; //Wenn di Checkbox gecklickt ist, soll der Wer ausgegeben werden   
                CheckBoxKugelnAuslesen(kugeltyp, kugelanz.value); //gib Funktion CheckBoxKugelnAuslesen aus und übergib genannte Parameter
            });
            document.getElementById("kugeln").appendChild(kugelanz); //Beziehe Daten von ID kugeln und hänge kugelanz daran
        }
        for (let i = 0; i < Aufgabe11.kerzendaten.length; i++) {
            let kerzetyp = document.createElement("input"); //Variable namens kerzetyp soll ein HTMLInputElement werden
            kerzetyp.type = "checkbox"; //Erstelle Checkbox
            kerzetyp.id = Aufgabe11.kerzendaten[i].element; //ID für späteren Nutzen im Warenkorb
            kerzetyp.name = "Kerzentyp"; //sorgt dafür, dass der kerzentyp an den server weitergegeben wird
            kerzetyp.addEventListener("change", function () {
                CheckBoxKerzenAuslesen(kerzetyp, "1"); //gib Funktion CheckBoxKerzenAuslesen aus und übergib genannte Parameter
            });
            document.getElementById("kerzen").appendChild(kerzetyp); //Beziehe Daten von ID kerzen und hänge kerzetyp daran
            let kerzelabel = document.createElement("label"); //Variable namens kerzelabel soll ein HTMLlabelElement werden
            kerzelabel.innerText = Aufgabe11.kerzendaten[i].name; //In kugellabel sollen Daten kugeldaten[i].name stehen
            document.getElementById("kerzen").appendChild(kerzelabel); //Beziehe Daten von ID kerzen und hänge kerzelabel daran
            let kerzenanz = document.createElement("input"); //Variable namens kerzeanz soll ein HTMLinputElement werden
            kerzenanz.type = "number"; //kugelanzahl soll vom datentyp number sein
            kerzenanz.step = "1"; //kugelanzahl soll immer in einer schritten hochzählen
            kerzenanz.min = "0"; //Mindestwert ist 0 
            kerzenanz.value = "1"; //In meiner Value steht standartisiert immer 1
            kerzenanz.style.marginRight = "1.5em"; //CSS Anweisung für einen Außenabstand von 1.5em
            kerzenanz.addEventListener("change", function () {
                kerzetyp.checked = true; //Wenn die Checkbox gecklickt ist, soll der Wert ausgegeben werden   
                CheckBoxKerzenAuslesen(kerzetyp, kerzenanz.value); //gib Funktion CheckBoxKerzennAuslesen aus und übergib genannte Parameter
            });
            document.getElementById("kerzen").appendChild(kerzenanz); //Beziehe Daten von ID kerzen und hänge kerzenanz daran
        }
        lieferung.addEventListener("change", AuswahlAuslesen); //Erstelle Eventlistener für variable Lieferung und gib bei Veränderung die Funktion AuswahlAuslesen aus
        document.getElementById("lieferoption").appendChild(lieferung); //Beziehe Daten von ID lieferoption und hänge lieferung daran
        lieferung.name = "Lieferoption"; //sorgt dafür, dass der kerzentyp an den server weitergegeben wird
        for (let i = 0; i < Aufgabe11.lieferoptionen.length; i++) {
            let option = document.createElement("option"); //Erstelle Variable namens option als HTMLOptionElement
            option.innerText = Aufgabe11.lieferoptionen[i].name; //In option sollen Daten lieferoptionen[i].name stehen
            lieferung.id = Aufgabe11.lieferoptionen[i].element; //ID für späteren Nutzen im Warenkorb
            lieferung.appendChild(option); //Hänge option an lieferung
        }
        //Lieferadresse
        Name.type = "text"; //Name ist Textform
        Name.placeholder = "Name"; //Platzhalter für value ist Name
        Name.required = true; //wahre Wiedergabe???
        Name.style.marginRight = "1em"; //CSS Anweisung
        Name.name = "Name"; //Name der vom Server ausgegeben wird
        document.getElementById("persdaten").appendChild(Name); //Beziehe Daten von ID persdaten und hänge Name daran
        Vorname.type = "text";
        Vorname.placeholder = "Vorname";
        Vorname.required = true;
        Vorname.style.marginRight = "1em";
        Vorname.name = "Vorname";
        document.getElementById("persdaten").appendChild(Vorname);
        Mail.type = "email";
        Mail.placeholder = "Email, bitte @ nicht vergessen";
        Mail.required = true;
        Mail.style.marginRight = "1em";
        Mail.name = "Mail";
        document.getElementById("persdaten").appendChild(Mail);
        Adresse.type = "text";
        Adresse.placeholder = "Adresse";
        Adresse.required = true;
        Adresse.style.marginRight = "1em";
        Adresse.name = "Adresse";
        document.getElementById("persdaten").appendChild(Adresse);
        Plz.type = "text";
        Plz.placeholder = "PLZ";
        Plz.required = true;
        Plz.name = "PLZ";
        document.getElementById("persdaten").appendChild(Plz); //Bis hier hin bei allem das gleiche Prinzip
        let button = document.createElement("button"); //variable button als HTMLButtonElement
        button.innerText = "Bestellung Überprüfen"; //Im Button soll der gegebene text stehen
        button.type = "submit"; //Der Button Typ ist ein Submit Button
        button.addEventListener("click", PrufeDaten); //Erstellt EventListener, der auf click reagiert und dann prüfe Daten ausgibt
        button.style.marginTop = "10px"; //CSS Anweisung
        document.getElementById("button").appendChild(button); //Beziehe Daten aus ID button und hänge button daran
    } //ENDE DER KONFIGURATOR FUNKTION
    function CheckBoxKugelnAuslesen(CheckElement, anzahl) {
        for (let i = 0; i < Aufgabe11.kugeldaten.length; i++) {
            if (Aufgabe11.kugeldaten[i].element == CheckElement.id) {
                Warenkorb(CheckElement.id, Aufgabe11.kugeldaten[i].name, Aufgabe11.kugeldaten[i].preis, parseInt(anzahl), CheckElement.checked); //Wenn die Daten übereinstimmen werden Parameter im Warenkorb ausgegeben
            }
        }
    }
    function CheckBoxKerzenAuslesen(CheckElement, anzahl) {
        for (let i = 0; i < Aufgabe11.kerzendaten.length; i++) {
            if (Aufgabe11.kerzendaten[i].element == CheckElement.id) {
                Warenkorb(CheckElement.id, Aufgabe11.kerzendaten[i].name, Aufgabe11.kerzendaten[i].preis, parseInt(anzahl), CheckElement.checked); //Gleiches Prinzip wie oben
            }
        }
    }
    function AuswahlAuslesen() {
        var baumname = baumarten.value; //variable vom typ string ist gleich baumarten.value
        if (baumname != "") {
            ZuWarenkorb(Aufgabe11.baumdaten, true, baumname); //wenn baumname nicht leer ist soll baumname und baumdaten an warenkorb ausgegeben werden
        }
        else {
            ZuWarenkorb(Aufgabe11.baumdaten, false, baumname);
        }
        var halterungname = halterung.value; //variable vom typ string ist gleich halterung.value
        if (halterungname != "") {
            ZuWarenkorb(Aufgabe11.halterungdaten, true, halterungname);
        }
        else {
            ZuWarenkorb(Aufgabe11.halterungdaten, false, halterungname);
        }
        var lieferant = lieferung.value; //variable lieferant ist gleich lieferung.value
        if (lieferant != "") {
            ZuWarenkorb(Aufgabe11.lieferoptionen, true, lieferant); //warum gibt es kein else???
        }
    }
    function ZuWarenkorb(daten, gecheckt, elementname) {
        for (let i = 0; i < daten.length; i++) {
            if (daten[i].name == elementname) {
                Warenkorb(daten[i].element, elementname, daten[i].preis, 1, gecheckt);
            }
        }
    }
    function Warenkorb(elementId, value, preis, anzahl, selected) {
        var gesamtpreis = 0; //variable gesamtpreis ist nullgesetzt
        var preisElement; //variable preiselement ist eine nummer
        preisElement = anzahl * preis; //berechnet sich aus der anzahl und dem preis
        gesamtpreis = gesamtpreis + preisElement; //gesamtpreis berechnet sich aus den genannten variablen
        var pGesamt = document.createElement("p"); //variable pgesamt ist ein html paragraph 
        pGesamt.id = "gesamtpreisid"; //erstelle id für pgesamt namens gesamtpreisid 
        pGesamt.innerText = "Gesamtpreis = " + gesamtpreis + "€"; //in pgesamt soll der text plus die summe gesamtpreis stehen
        pGesamt.style.position = "absolute"; //CSS Anweisung
        pGesamt.style.bottom = "0"; //CSS
        pGesamt.style.paddingTop = "10px"; //CSS
        pGesamt.style.borderTop = "2px solid grey"; //CSS
        korb.appendChild(pGesamt); //pgesamt an korb anhängen
        if (selected) {
            var p = document.createElement("p"); //variabel p ist ein html paragraph
            p.id = elementId; //erstelle für p eine elementid
            p.innerText = value + "  = " + preisElement + "€"; //in p soll auswahl + preis stehen
            korb.appendChild(p); //hänge p an korb an
        }
        //Wird erst beim zweiten Vorgang angewendet
        for (let i = 0; i < korb.getElementsByTagName("p").length; i++) {
            if (korb.getElementsByTagName("p")[i].id == elementId) {
                var innerPreis = korb.getElementsByTagName("p")[i].innerText.split("=")[1]; //variable innerpreis zieht von p den text an stelle 1
                korb.getElementsByTagName("p")[i].remove(); //entferne korb element p
                gesamtpreis = gesamtpreis - parseInt(innerPreis); //gesamtpreis wird neu berechnet
            }
            if (korb.getElementsByTagName("p")[i].id == "gesamtpreisid") {
                korb.getElementsByTagName("p")[i].remove(); //p element wird von korb entfernt
            }
        }
    }
    function PrufeDaten() {
        prufen.innerText = ""; //prufen ist erstmal leer
        if (Name.checkValidity() == false || Vorname.checkValidity() == false || Mail.checkValidity() == false || Plz.checkValidity() == false || Adresse.checkValidity() == false) {
            prufen.innerText = "Deine Eingabe war leider fehlerhaft! Überprüfe sie noch einmal."; //wenn sie nicht gefüllt sind gib diesen text aus
            prufen.style.color = "red"; //CSS Anweisung Schriftfarbe rot
            document.body.appendChild(prufen); //hänge prufen an body an
        }
        else {
            prufen.innerText = "Deine Bestellung wurde erfolgreich verifiziert!"; //gib diesen text aus
            prufen.style.color = "green"; //CSS Anweisung schriftfarbe grün
            document.body.appendChild(prufen); //hänge prufen an body an
        }
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Aufgabe-11-Konfigurator-Remote.js.map