/*
Aufgabe: (10 Konfigurator)
Name: (Julian Schüler)
Matrikel: (256033)
Datum: (05.01.2017)
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe10;
(function (Aufgabe10) {
    window.addEventListener("load", Konfigurator);
    let baumarten = document.createElement("select");
    let halterung = document.createElement("select");
    //Kerzentypen weiter unten
    //Schmuckartikel weiter unten
    let lieferung = document.createElement("select");
    //Lieferadresse
    let Name = document.createElement("input");
    let Vorname = document.createElement("input");
    let Mail = document.createElement("input");
    let Adresse = document.createElement("input");
    let Plz = document.createElement("input");
    //button
    let prufen = document.createElement("div");
    //warenkorb
    let korb = document.createElement("div");
    function Konfigurator() {
        let h2 = document.createElement("h2");
        h2.innerText = "Warenkorb";
        h2.style.position = "absolute";
        h2.style.right = "390px";
        h2.style.top = "0px";
        h2.style.zIndex = "99";
        document.getElementById("korbbild").appendChild(h2);
        korb.style.display = "inline-block";
        korb.style.position = "absolute";
        korb.style.right = "10px";
        korb.style.top = "10px";
        korb.style.width = "500px";
        korb.style.height = "500px";
        korb.style.paddingTop = "40px";
        korb.style.paddingLeft = "10px";
        korb.style.backgroundColor = "red";
        document.getElementById("korbbild").appendChild(korb);
        baumarten.addEventListener("change", AuswahlAuslesen);
        document.getElementById("baumtyp").appendChild(baumarten);
        for (let i = 0; i < Aufgabe10.baumdaten.length; i++) {
            let option = document.createElement("option");
            option.innerText = Aufgabe10.baumdaten[i].name;
            baumarten.id = Aufgabe10.baumdaten[i].element; //ID für späteren Nutzen im Warenkorb
            baumarten.appendChild(option);
        }
        halterung.addEventListener("change", AuswahlAuslesen);
        document.getElementById("halterung").appendChild(halterung);
        for (let i = 0; i < Aufgabe10.halterungdaten.length; i++) {
            let option = document.createElement("option");
            option.innerText = Aufgabe10.halterungdaten[i].name;
            halterung.id = Aufgabe10.halterungdaten[i].element; //ID für späteren Nutzen im Warenkorb
            halterung.appendChild(option);
        }
        //Schmuckartikel werden anders aufgebaut
        for (let i = 0; i < Aufgabe10.kugeldaten.length; i++) {
            let kugeltyp = document.createElement("input");
            kugeltyp.type = "checkbox";
            kugeltyp.id = Aufgabe10.kugeldaten[i].element; //ID für späteren Nutzen im Warenkorb
            kugeltyp.addEventListener("change", function () {
                CheckBoxKugelnAuslesen(kugeltyp, "1");
            });
            document.getElementById("kugeln").appendChild(kugeltyp);
            let kugellabel = document.createElement("label");
            kugellabel.innerText = Aufgabe10.kugeldaten[i].name;
            document.getElementById("kugeln").appendChild(kugellabel);
            let kugelanz = document.createElement("input");
            kugelanz.type = "number";
            kugelanz.step = "1";
            kugelanz.min = "0";
            kugelanz.value = "1";
            kugelanz.style.marginRight = "1.5em";
            kugelanz.addEventListener("change", function () {
                kugeltyp.checked = true;
                CheckBoxKugelnAuslesen(kugeltyp, kugelanz.value);
            });
            document.getElementById("kugeln").appendChild(kugelanz);
        }
        //Kerzentypen werden auch anders aufgebaut
        for (let i = 0; i < Aufgabe10.kerzendaten.length; i++) {
            let kerzetyp = document.createElement("input");
            kerzetyp.type = "checkbox";
            kerzetyp.id = Aufgabe10.kerzendaten[i].element;
            kerzetyp.addEventListener("change", function () {
                CheckBoxKerzenAuslesen(kerzetyp, "1");
            });
            document.getElementById("kerzen").appendChild(kerzetyp);
            let kerzelabel = document.createElement("label");
            kerzelabel.innerText = Aufgabe10.kerzendaten[i].name;
            document.getElementById("kerzen").appendChild(kerzelabel);
            let kerzenanz = document.createElement("input");
            kerzenanz.type = "number";
            kerzenanz.step = "1";
            kerzenanz.min = "0";
            kerzenanz.value = "1";
            kerzenanz.style.marginRight = "1.5em";
            kerzenanz.addEventListener("change", function () {
                kerzetyp.checked = true;
                CheckBoxKerzenAuslesen(kerzetyp, kerzenanz.value);
            });
            document.getElementById("kerzen").appendChild(kerzenanz);
        }
        lieferung.addEventListener("change", AuswahlAuslesen);
        document.getElementById("lieferoption").appendChild(lieferung);
        for (let i = 0; i < Aufgabe10.lieferoptionen.length; i++) {
            let option = document.createElement("option");
            option.innerText = Aufgabe10.lieferoptionen[i].name;
            lieferung.id = Aufgabe10.lieferoptionen[i].element;
            lieferung.appendChild(option);
        }
        //Lieferadresse
        Name.type = "text";
        Name.placeholder = "Name";
        Name.required = true;
        Name.style.marginRight = "1em";
        document.getElementById("persdaten").appendChild(Name);
        Vorname.type = "text";
        Vorname.placeholder = "Vorname";
        Vorname.required = true;
        Vorname.style.marginRight = "1em";
        document.getElementById("persdaten").appendChild(Vorname);
        Mail.type = "email";
        Mail.placeholder = "Email, bitte @ nicht vergessen";
        Mail.required = true;
        Mail.style.marginRight = "1em";
        document.getElementById("persdaten").appendChild(Mail);
        Adresse.type = "text";
        Adresse.placeholder = "Adresse";
        Adresse.required = true;
        Adresse.style.marginRight = "1em";
        document.getElementById("persdaten").appendChild(Adresse);
        Plz.type = "text";
        Plz.placeholder = "PLZ";
        Plz.required = true;
        document.getElementById("persdaten").appendChild(Plz);
        let button = document.createElement("button");
        button.innerText = "Bestellung Überprüfen";
        button.addEventListener("click", PrufeDaten);
        button.style.marginTop = "10px";
        document.getElementById("button").appendChild(button);
    } //ENDE DER KONFIGURATOR FUNKTION
    function CheckBoxKugelnAuslesen(CheckElement, anzahl) {
        for (let i = 0; i < Aufgabe10.kugeldaten.length; i++) {
            if (Aufgabe10.kugeldaten[i].element == CheckElement.id) {
                Warenkorb(CheckElement.id, Aufgabe10.kugeldaten[i].name, Aufgabe10.kugeldaten[i].preis, parseInt(anzahl), CheckElement.checked);
            }
        }
    }
    function CheckBoxKerzenAuslesen(CheckElement, anzahl) {
        for (let i = 0; i < Aufgabe10.kerzendaten.length; i++) {
            if (Aufgabe10.kerzendaten[i].element == CheckElement.id) {
                Warenkorb(CheckElement.id, Aufgabe10.kerzendaten[i].name, Aufgabe10.kerzendaten[i].preis, parseInt(anzahl), CheckElement.checked);
            }
        }
    }
    function AuswahlAuslesen() {
        var baumname = baumarten.value;
        if (baumname != "") {
            ZuWarenkorb(Aufgabe10.baumdaten, true, baumname);
        }
        else {
            ZuWarenkorb(Aufgabe10.baumdaten, false, baumname);
        }
        var halterungname = halterung.value;
        if (halterungname != "") {
            ZuWarenkorb(Aufgabe10.halterungdaten, true, halterungname);
        }
        else {
            ZuWarenkorb(Aufgabe10.halterungdaten, false, halterungname);
        }
        var lieferant = lieferung.value;
        if (lieferant != "") {
            ZuWarenkorb(Aufgabe10.lieferoptionen, true, lieferant);
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
        var gesamtpreis = 0;
        var preisElement;
        preisElement = anzahl * preis;
        gesamtpreis = gesamtpreis + preisElement;
        var pGesamt = document.createElement("p");
        pGesamt.id = "gesamtpreisid";
        pGesamt.innerText = "Gesamtpreis =  " + gesamtpreis + "€";
        pGesamt.style.position = "absolute";
        pGesamt.style.bottom = "0";
        pGesamt.style.paddingTop = "10px";
        pGesamt.style.borderTop = "2px solid grey";
        korb.appendChild(pGesamt);
        if (selected) {
            var p = document.createElement("p");
            p.id = elementId;
            p.innerText = value + "  = " + preisElement + "€";
            korb.appendChild(p);
        }
        //Wird erst beim zweiten Vorgang angewendet
        for (let i = 0; i < korb.getElementsByTagName("p").length; i++) {
            if (korb.getElementsByTagName("p")[i].id == elementId) {
                var innerPreis = korb.getElementsByTagName("p")[i].innerText.split("=")[1];
                korb.getElementsByTagName("p")[i].remove();
                gesamtpreis = gesamtpreis - parseInt(innerPreis);
            }
            if (korb.getElementsByTagName("p")[i].id == "gesamtpreisid") {
                korb.getElementsByTagName("p")[i].remove();
            }
        }
    }
    function PrufeDaten() {
        prufen.innerText = "";
        if (Name.checkValidity() == false || Vorname.checkValidity() == false || Mail.checkValidity() == false || Plz.checkValidity() == false || Adresse.checkValidity() == false) {
            prufen.innerText = "Deine Eingabe war leider fehlerhaft! Überprüfe sie noch einmal.";
            prufen.style.color = "red";
            document.body.appendChild(prufen);
        }
        else {
            prufen.innerText = "Deine Bestellung wurde erfolgreich verifiziert!";
            prufen.style.color = "green";
            document.body.appendChild(prufen);
        }
    }
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=Aufgabe-10-Konfigurator.js.map