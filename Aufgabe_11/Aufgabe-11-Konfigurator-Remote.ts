/*
Aufgabe: (11 Konfigurator)
Name: (Julian Schüler)
Matrikel: (256033)
Datum: (05.01.2017)
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe11 {
    window.addEventListener("load", Konfigurator);                         //Ruft Konfigurator Funktion auf, wenn Seite geladen ist
    
    let baumarten: HTMLSelectElement = document.createElement("select");   //Erstellt Variable Baumarten als HTMLSelectElement
    let halterung: HTMLSelectElement = document.createElement("select");   //Erstellt Variable Halterung als HTMLSelectElement
    let lieferung: HTMLSelectElement = document.createElement("select");   //Erstellt Variable Lieferung als HTMLSelectElement
    let Name: HTMLInputElement = document.createElement("input");          //Erstellt Variable Name als HTMLInputElement
    let Vorname: HTMLInputElement = document.createElement("input");       //Erstellt Variable Vorname als HTMLInputElement
    let Mail: HTMLInputElement = document.createElement("input");          //Erstellt Variable Mail als HTMLInputElement
    let Adresse: HTMLInputElement = document.createElement("input");       //Erstellt Variable Adresse als HTMLInputElement
    let Plz: HTMLInputElement = document.createElement("input");           //Erstellt Variable Plz als HTMLInputElement
    let prufen: HTMLDivElement = document.createElement("div");            //Erstellt Variable prufen als HTMLInputElement
    let korb: HTMLDivElement = document.createElement("div");              //Erstellt Variable korb als HTMLInputElement
    var gesamtpreisvar: HTMLInputElement = document.createElement("input");
    
    gesamtpreisvar.style.display = "none";
    
     var gesamtpreis: number = 0;                                                    //variable gesamtpreis ist nullgesetzt
    
    function Konfigurator(): void {                                        //Erstellt Funktion Konfigurator ohne Rückgabewert
        
        let h2: HTMLHeadingElement = document.createElement("h2");         //Variable h2 als HTMLHeadingElement
        h2.innerText = "Warenkorb";                                        //In h2 soll Warenkorb stehen
        h2.style.position = "absolute";                                    //CSS Anweisung
        h2.style.right = "390px";                                          //CSS Anweisung
        h2.style.top = "0px";                                              //CSS Anweisung
        h2.style.zIndex = "99";                                            //CSS Anweisung
        document.getElementById("korbbild").appendChild(h2);               //Nimm ID korbbild aus html dokument und hänge h2 daran
        
        korb.style.display = "inline-block";                               //CSS Anweisung
        korb.style.position = "absolute";                                  //CSS Anweisung
        korb.style.right = "10px";                                         //CSS Anweisung
        korb.style.top = "10px";                                           //CSS Anweisung
        korb.style.width = "500px";                                        //CSS Anweisung
        korb.style.height = "500px";                                       //CSS Anweisung
        korb.style.paddingTop = "40px";                                    //CSS Anweisung
        korb.style.paddingLeft = "10px";                                   //CSS Anweisung
        korb.style.backgroundColor = "red";                                //CSS Anweisung
        document.getElementById("korbbild").appendChild(korb);             //Nimm ID korbbild aus html und hänge korb daran

        baumarten.addEventListener("change", AuswahlAuslesen);             //Erstelle EventListener für Variable Baumarten, reagier bei Veränderung und gib Funktion AuswahlAuslesen aus
        document.getElementById("baumtyp").appendChild(baumarten);         //Nimm ID baumtyp und hänge baumarten daran
        baumarten.name = "Baumarten";                                      //Information name die beim click des submit an url gehängt wird
        for (let i: number = 0; i < baumdaten.length; i++) {               //for schleife mit deklaration
            let option: HTMLOptionElement = document.createElement("option"); //Variable option vom typ HTMLOptionElement soll ein element namens Option erstellen
            option.innerText = baumdaten[i].name;                             //In dieser variable soll der Inhalt von baumdaten[i].name ausgegeben werden
           // baumarten.id = baumdaten[i].element;                           
            baumarten.appendChild(option);                                    //variable option wird an baumarten angehängt
        }

        halterung.addEventListener("change", AuswahlAuslesen);                //Erstelle EventListener für Variable Halterung, reagier bei Veränderung und gib Funktion AuswahlAuslesen aus
        document.getElementById("halterung").appendChild(halterung);          //Nimm ID halterung und hänge halterung daran
        halterung.name = "Halterungstyp";                                     //Information name die beim click des submit an url gehängt wird
        for (let i: number = 0; i < halterungdaten.length; i++) {             //for schleife mit deklaration
            let option: HTMLOptionElement = document.createElement("option"); //Variable option vom typ HTMLOptionElement soll ein element namens Option erstellen
            option.innerText = halterungdaten[i].name;                        //In dieser variable soll der Inhalt von halterungsdaten[i].name ausgegeben werden
            //halterung.id = halterungdaten[i].element;                         
            halterung.appendChild(option);                                    //variable option wird an halterung angehängt
        }
       
        for (let i: number = 0; i < kugeldaten.length; i++) {                 //for schleife mit deklaration
            let kugeltyp: HTMLInputElement = document.createElement("input"); //Variable namens kugeltyp soll ein HTMLInputElement werden
            kugeltyp.type = "checkbox";                                       //Definiere Typ Checkbox 
            kugeltyp.id = kugeldaten[i].element;                              //ID für späteren Nutzen im Warenkorb
            kugeltyp.addEventListener("change", function(): void {            //Erstelle EventListener für Variable kugeltyp, reagier bei Veränderung und 
                 CheckBoxKugelnAuslesen(kugeltyp, "1");                       //ruf Funktion CheckBoxKugelnAuslesen auf und übergib genannte Parameter
            });
            document.getElementById("kugeln").appendChild(kugeltyp);          //Nimm ID kugeln und hänge kugeltyp daran
            
            let kugellabel: HTMLLabelElement = document.createElement("label"); //Variable namens kugellabel soll ein HTMLLabelelement erstellen
            kugellabel.innerText = kugeldaten[i].name;                          //In kugellabel sollen Daten kugeldaten[i].name stehen
            document.getElementById("kugeln").appendChild(kugellabel);          //Nimm ID kugeln und hänge kugellabel daran
            
            let kugelanz: HTMLInputElement = document.createElement("input");   //Variable namens kugelanz soll ein HTMLInputelement erstellen
            kugelanz.type = "number";                                           //kugelanzahl soll typ number sein
            kugelanz.step = "1";                                                //kugelanzahl soll immer in einer schritten hochzählen
            kugelanz.min = "0";                                                 //Mindestwert ist 0 
            kugelanz.value = "1";                                               //In meiner Value steht standartisiert immer 1
            kugelanz.style.marginRight = "1.5em";                               //CSS Anweisung für einen Außenabstand von 1.5em
            kugelanz.addEventListener("change", function(): void {              //Erstelle EventListener für Variable kugelanz
                kugeltyp.checked = true;                                        //Checkbox wird automatisch angehakt   
                CheckBoxKugelnAuslesen(kugeltyp, kugelanz.value);               //ruf Funktion CheckBoxKugelnAuslesen auf und übergib genannte Parameter
            });
            document.getElementById("kugeln").appendChild(kugelanz);            //Nimm ID kugeln und hänge kugelanz daran
        }

        for (let i: number = 0; i < kerzendaten.length; i++) {                  //for schleife mit deklaration
            let kerzetyp: HTMLInputElement = document.createElement("input");   //Variable namens kerzetyp soll ein HTMLInputElement werden
            kerzetyp.type = "checkbox";                                         //Typ Checkbox
            kerzetyp.id = kerzendaten[i].element;                               //ID für späteren Nutzen im Warenkorb
            kerzetyp.addEventListener("change", function(): void {              //Erstelle EventListener für Variable kerzetyp, reagier bei Veränderung und 
                CheckBoxKerzenAuslesen(kerzetyp, "1");                          //gib Funktion CheckBoxKerzenAuslesen aus und übergib genannte Parameter
            });
            document.getElementById("kerzen").appendChild(kerzetyp);            //Beziehe Daten von ID kerzen und hänge kerzetyp daran
            
            let kerzelabel: HTMLLabelElement = document.createElement("label"); //Variable namens kerzelabel soll ein HTMLlabelElement werden
            kerzelabel.innerText = kerzendaten[i].name;                         //In kugellabel sollen Daten kugeldaten[i].name stehen
            document.getElementById("kerzen").appendChild(kerzelabel);          //Beziehe Daten von ID kerzen und hänge kerzelabel daran
            
            let kerzenanz: HTMLInputElement = document.createElement("input");  //Variable namens kerzeanz soll ein HTMLinputElement werden
            kerzenanz.type = "number";                                          //kugelanzahl soll vom datentyp number sein
            kerzenanz.step = "1";                                               //kugelanzahl soll immer in einer schritten hochzählen
            kerzenanz.min = "0";                                                //Mindestwert ist 0 
            kerzenanz.value = "1";                                              //In meiner Value steht standartisiert immer 1
            kerzenanz.style.marginRight = "1.5em";                              //CSS Anweisung für einen Außenabstand von 1.5em
            kerzenanz.addEventListener("change", function(): void {             //Erstelle EventListener für Variable kerzeanz, reagier bei Veränderung und 
                kerzetyp.checked = true;                                        //Wenn die Checkbox gecklickt ist, soll der Wert ausgegeben werden   
                CheckBoxKerzenAuslesen(kerzetyp, kerzenanz.value);              //gib Funktion CheckBoxKerzennAuslesen aus und übergib genannte Parameter
            });
            document.getElementById("kerzen").appendChild(kerzenanz);           //Beziehe Daten von ID kerzen und hänge kerzenanz daran
        }
    
        
        lieferung.addEventListener("change", AuswahlAuslesen);                  //Erstelle Eventlistener für variable Lieferung und ruf bei Veränderung die Funktion AuswahlAuslesen auf
        document.getElementById("lieferoption").appendChild(lieferung);         //Nimm ID lieferoption und hänge lieferung daran
        lieferung.name = "Lieferoption";                                        //sorgt dafür, dass der liefertyp an den server weitergegeben wird
        for (let i: number = 0; i < lieferoptionen.length; i++) {               //for schleife mit deklaration
            let option: HTMLOptionElement = document.createElement("option");   //Erstelle Variable namens option als HTMLOptionElement
            option.innerText = lieferoptionen[i].name;                          //In option sollen Daten lieferoptionen[i].name stehen
            lieferung.id = lieferoptionen[i].element;                           //ID für späteren Nutzen im Warenkorb
            lieferung.appendChild(option);                                      //Hänge option an lieferung
        }

        //Lieferadresse
        Name.type = "text";                                                     //typ ist Textform
        Name.placeholder = "Name";                                              //Platzhalter ist Name
        Name.required = true;                                                   //Pflichteingabe
        Name.style.marginRight = "1em";                                         //CSS Anweisung
        Name.name = "Name";                                                     //Name der vom Server ausgegeben wird
        document.getElementById("persdaten").appendChild(Name);                 //Nimm ID persdaten und hänge Name daran

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
        document.getElementById("persdaten").appendChild(Plz);              //Bis hier hin bei allem das gleiche Prinzip

        
        let button: HTMLButtonElement = document.createElement("button");   //variable button als HTMLButtonElement
        button.innerText = "Bestellung Überprüfen";                         //Im Button soll der gegebene text stehen
        button.type = "submit";                                             //Der Button Typ ist ein Submit Button //Löst Aktion aus
        button.addEventListener("click", PrufeDaten);                       //Erstellt EventListener, der auf click reagiert und dann prüfe Daten aufruft
        button.style.marginTop = "10px";                                    //CSS Anweisung
        document.getElementById("button").appendChild(button);              //Nimm ID button und hänge button daran
   
    
    
    } //ENDE DER KONFIGURATOR FUNKTION
    

    function CheckBoxKugelnAuslesen(CheckElement: HTMLInputElement, anzahl: string): void { //Funktion mit Parametern
        for (let i: number = 0; i < kugeldaten.length; i++) {                               //For schleife mit Deklaration
            if (kugeldaten[i].element == CheckElement.id) {                                 //sucht nach übergebenen Element in Kugeldaten 
                CheckElement.name = "Kugeltyp " + kugeldaten[i].name + " anzahl" + anzahl;  //wird vom server ausgegeben   
                Warenkorb(CheckElement.id, kugeldaten[i].name, kugeldaten[i].preis, parseInt(anzahl), CheckElement.checked); //Wenn die Daten übereinstimmen werden Parameter im Warenkorb ausgegeben
            }
        }
    }

    function CheckBoxKerzenAuslesen(CheckElement: HTMLInputElement, anzahl: string): void { //Funktion mit Parametern
        for (let i: number = 0; i < kerzendaten.length; i++) {                              //For schleife mit Deklaration
            if (kerzendaten[i].element == CheckElement.id) {                                //sucht nach übergebenen Element in kerzendaten 
                CheckElement.name = "Kerzentyp " + kerzendaten[i].element + " anzahl" + anzahl  ;                                
                Warenkorb(CheckElement.id, kerzendaten[i].name, kerzendaten[i].preis, parseInt(anzahl), CheckElement.checked); //Gleiches Prinzip wie oben
            }
        }
    }


    function AuswahlAuslesen(): void {                      //erstellt funktion
        //var baumname: string = baumarten.value;            
        if (baumarten.value != "") {                               //if abfrage 
            ZuWarenkorb(baumdaten, true, baumarten.value);         //wenn baumname nicht leer ist soll baumname und baumdaten an warenkorb ausgegeben werden
        }
        else {                                              //information werden im warenkorb nach vorhanden sein geprüft und durch false entfernt
            ZuWarenkorb(baumdaten, false, baumarten.value); 
        }


        //var halterungname: string = halterung.value;                //variable vom typ string ist gleich halterung.value
        if (halterung.value != "") {                                  //gleiche abfrage wie beim baumname
            ZuWarenkorb(halterungdaten, true, halterung.value);
        } 
        else {
            ZuWarenkorb(halterungdaten, false, halterung.value);
        }

        
        //var lieferant: string = lieferung.value;                    //variable lieferant ist gleich lieferung.value
        if (lieferung.value != "") {                                      //gleiche abfrage wie bei halterung
            ZuWarenkorb(lieferoptionen, true, lieferung.value);           
        }
    }

    
    function ZuWarenkorb(daten: Daten[], gecheckt: boolean, elementname: string): void {        //funktion zu warenkorb mit parametern
                    
        for (let i: number = 0; i < daten.length; i++) {                                        //for schleife mit deklaration
            if (daten[i].name == elementname) {                                                 // wenn die daten übereinstimmen werden daten im warenkorb ausgegeben
                Warenkorb(daten[i].element, elementname, daten[i].preis, 1, gecheckt); 
            }
        }
    }


    function Warenkorb(elementId: string, value: string, preis: number, anzahl: number, selected: boolean): void { //funktion warenkorb mit parametern von drüber

       
        var preisElement: number;                                                       //variable preiselement ist von typ nummer
        preisElement = anzahl * preis;                                                  //berechnet sich aus der anzahl und dem preis
        
        //Wird erst beim zweiten Vorgang angewendet
        for (let i: number = 0; i < korb.getElementsByTagName("p").length; i++) {       //überprüfen wie viele p elemente im warenkorb vorhanden sind
           
            if (korb.getElementsByTagName("p")[i].id == elementId) {                                //if abfrage stimmen daten überein
                var innerPreis: string = korb.getElementsByTagName("p")[i].innerText.split("=")[1]; //variable innerpreis zieht von p den text an stelle 1 //Extrahiere Preis
                korb.getElementsByTagName("p")[i].remove();                                         //entferne korb element p

                gesamtpreis = gesamtpreis - parseInt(innerPreis);                                   //gesamtpreis wird neu berechnet
            }
            
            if (korb.getElementsByTagName("p")[i].id == "gesamtpreisid") {                          //if abfrage ob element p mit pgesamt übereinstimmt
                korb.getElementsByTagName("p")[i].remove();                                         //p element wird von korb entfernt
            }
        }
        
        if (selected) {                                                                 //if abfrage für checkbox
            var p: HTMLParagraphElement = document.createElement("p");                  //variable p erstellt ein html paragraph element
            p.id = elementId;                                                           //weise p die elementid zu
            p.innerText = value + "  = " + preisElement + "€";                          //in p soll auswahl + preis stehen
            korb.appendChild(p);                                                        //hänge p an korb an
        }   
        
        gesamtpreis = gesamtpreis + preisElement;                                       //gesamtpreis berechnet sich aus den genannten variablen
        var pGesamt: HTMLParagraphElement = document.createElement("p");                //variable pgesamt ist ein html paragraph 
        pGesamt.id = "gesamtpreisid";                                                   //erstelle id für pgesamt namens gesamtpreisid 
        pGesamt.innerText = "Gesamtpreis = " + gesamtpreis + "€";                       //in pgesamt soll der text plus die summe gesamtpreis stehen
        pGesamt.style.position = "absolute";                                            //CSS Anweisung
        pGesamt.style.bottom = "0";                                                     //CSS
        pGesamt.style.paddingTop = "10px";                                              //CSS
        pGesamt.style.borderTop = "2px solid grey";                                     //CSS
        korb.appendChild(pGesamt);                                                      //pgesamt an korb anhängen

        gesamtpreisvar.name = "Gesamtpreis" + gesamtpreis;                              //Server soll gesamtpreis auch angeben
        korb.appendChild(pGesamt);                                                      //pgesamt an korb hängen
        
    }


    function PrufeDaten(): void {                   //funktion prüfe daten

        prufen.innerText = "";                      //prufen ist erstmal leer
        if (Name.checkValidity() == false || Vorname.checkValidity() == false || Mail.checkValidity() == false || Plz.checkValidity() == false || Adresse.checkValidity() == false) { //if abfrage für eingabefelder ob diese gefüllt sind 
            prufen.innerText = "Deine Eingabe war leider fehlerhaft! Überprüfe sie noch einmal."; //wenn sie nicht gefüllt sind gib diesen text aus
            prufen.style.color = "red";                 //CSS Anweisung Schriftfarbe rot
            document.body.appendChild(prufen);          //hänge prufen an body an
        }
        else {                                          //wenn die felder gefüllt sind bzw valide sind
            prufen.innerText = "Deine Bestellung wurde erfolgreich verifiziert!"; //gib diesen text aus
            prufen.style.color = "green";       //CSS Anweisung schriftfarbe grün
            document.body.appendChild(prufen);  //hänge prufen an body an
        }
    }


    
    
}