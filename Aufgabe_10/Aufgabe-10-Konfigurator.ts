 /*
Aufgabe: (10 Konfigurator)
Name: (Julian Schüler)
Matrikel: (256033)
Datum: (05.01.2017)
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe10 {
    window.addEventListener("load", Konfigurator);
    
    let baumarten: HTMLSelectElement = document.createElement("select");
    let halterung: HTMLSelectElement = document.createElement("select");
    //Kerzentypen weiter unten
    //Schmuckartikel weiter unten
    let lieferung: HTMLSelectElement = document.createElement("select");
    //Lieferadresse
    let Name: HTMLInputElement = document.createElement("input");
    let Vorname: HTMLInputElement = document.createElement("input");
    let Mail: HTMLInputElement = document.createElement("input");
    let Adresse: HTMLInputElement = document.createElement("input");
    let Plz: HTMLInputElement = document.createElement("input");
    //button
    let prufen: HTMLDivElement = document.createElement("div");
    //warenkorb
    let korb: HTMLDivElement = document.createElement("div");

    
    function Konfigurator(): void {
        
        let h2: HTMLHeadingElement = document.createElement("h2");
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
        
        for (let i: number = 0; i < baumdaten.length; i++) {
            let option: HTMLOptionElement = document.createElement("option");
            option.innerText = baumdaten[i].name;
            baumarten.id = baumdaten[i].element; //ID für späteren Nutzen im Warenkorb
            baumarten.appendChild(option);
        }
         
        halterung.addEventListener("change", AuswahlAuslesen);
        document.getElementById("halterung").appendChild(halterung);

        for (let i: number = 0; i < halterungdaten.length; i++) {
            let option: HTMLOptionElement = document.createElement("option");
            option.innerText = halterungdaten[i].name;
            halterung.id = halterungdaten[i].element; //ID für späteren Nutzen im Warenkorb
            halterung.appendChild(option);
        }
       
        //Schmuckartikel werden anders aufgebaut
        for (let i: number = 0; i < kugeldaten.length; i++) {
            let kugeltyp: HTMLInputElement = document.createElement("input");
            kugeltyp.type = "checkbox";
            kugeltyp.id = kugeldaten[i].element; //ID für späteren Nutzen im Warenkorb
            kugeltyp.addEventListener("change", function(): void {
                 CheckBoxKugelnAuslesen(kugeltyp, "1");
            });
            document.getElementById("kugeln").appendChild(kugeltyp);   
            
            let kugellabel: HTMLLabelElement = document.createElement("label"); 
            kugellabel.innerText = kugeldaten[i].name;
            document.getElementById("kugeln").appendChild(kugellabel);
            
            let kugelanz: HTMLInputElement = document.createElement("input");
            kugelanz.type = "number";
            kugelanz.step = "1";
            kugelanz.min = "0";
            kugelanz.value = "1";
            kugelanz.style.marginRight = "1.5em";
            kugelanz.addEventListener("change", function(): void { 
                kugeltyp.checked = true; 
                CheckBoxKugelnAuslesen(kugeltyp, kugelanz.value);
            });
            document.getElementById("kugeln").appendChild(kugelanz);
        }

        //Kerzentypen werden auch anders aufgebaut
        for (let i: number = 0; i < kerzendaten.length; i++) {
            let kerzetyp: HTMLInputElement = document.createElement("input");
            kerzetyp.type = "checkbox";
            kerzetyp.id = kerzendaten[i].element;
            kerzetyp.addEventListener("change", function(): void { 
                CheckBoxKerzenAuslesen(kerzetyp, "1");
            });
            document.getElementById("kerzen").appendChild(kerzetyp);
            
            let kerzelabel: HTMLLabelElement = document.createElement("label");
            kerzelabel.innerText = kerzendaten[i].name;
            document.getElementById("kerzen").appendChild(kerzelabel);
            
            let kerzenanz: HTMLInputElement = document.createElement("input");
            kerzenanz.type = "number";
            kerzenanz.step = "1";
            kerzenanz.min = "0";
            kerzenanz.value = "1";
            kerzenanz.style.marginRight = "1.5em";
            kerzenanz.addEventListener("change", function(): void { 
                kerzetyp.checked = true; 
                CheckBoxKerzenAuslesen(kerzetyp, kerzenanz.value);
            });
            document.getElementById("kerzen").appendChild(kerzenanz);
        }
    
        
        lieferung.addEventListener("change", AuswahlAuslesen);
        document.getElementById("lieferoption").appendChild(lieferung);

        for (let i: number = 0; i < lieferoptionen.length; i++) {
            let option: HTMLOptionElement = document.createElement("option");
            option.innerText = lieferoptionen[i].name;
            lieferung.id = lieferoptionen[i].element;
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

        
        let button: HTMLButtonElement = document.createElement("button");
        button.innerText = "Bestellung Überprüfen";
        button.addEventListener("click", PrufeDaten);
        button.style.marginTop = "10px";
        document.getElementById("button").appendChild(button);
   
    
    
    } //ENDE DER KONFIGURATOR FUNKTION
    

    function CheckBoxKugelnAuslesen(CheckElement: HTMLInputElement, anzahl: string): void {
        for (let i: number = 0; i < kugeldaten.length; i++) {
            if (kugeldaten[i].element == CheckElement.id) {
                Warenkorb(CheckElement.id, kugeldaten[i].name, kugeldaten[i].preis, parseInt(anzahl), CheckElement.checked);
            }
        }
    }

    function CheckBoxKerzenAuslesen(CheckElement: HTMLInputElement, anzahl: string): void {
        for (let i: number = 0; i < kerzendaten.length; i++) {
            if (kerzendaten[i].element == CheckElement.id) {
                Warenkorb(CheckElement.id, kerzendaten[i].name, kerzendaten[i].preis, parseInt(anzahl), CheckElement.checked);
            }
        }
    }


    function AuswahlAuslesen(): void {
        var baumname: string = baumarten.value; 
        if (baumname != "") {
            ZuWarenkorb(baumdaten, true, baumname); 
        }
        else {
            ZuWarenkorb(baumdaten, false, baumname); 
        }


        var halterungname: string = halterung.value;
        if (halterungname != "") {
            ZuWarenkorb(halterungdaten, true, halterungname);
        } 
        else {
            ZuWarenkorb(halterungdaten, false, halterungname);
        }

        
        var lieferant: string = lieferung.value;
        if (lieferant != "") {
            ZuWarenkorb(lieferoptionen, true, lieferant);
        }
    }

    
    function ZuWarenkorb(daten: Daten[], gecheckt: boolean, elementname: string): void { 

        for (let i: number = 0; i < daten.length; i++) {
            if (daten[i].name == elementname) {
                Warenkorb(daten[i].element, elementname, daten[i].preis, 1, gecheckt); 
            }
        }
    }


    function Warenkorb(elementId: string, value: string, preis: number, anzahl: number, selected: boolean): void {

        var gesamtpreis: number = 0;
        var preisElement: number;
        preisElement = anzahl * preis;

        gesamtpreis = gesamtpreis + preisElement;
        var pGesamt: HTMLParagraphElement = document.createElement("p");
        pGesamt.id = "gesamtpreisid";
        pGesamt.innerText = "Gesamtpreis =  " + gesamtpreis + "€";
        pGesamt.style.position = "absolute";
        pGesamt.style.bottom = "0";
        pGesamt.style.paddingTop = "10px";
        pGesamt.style.borderTop = "2px solid grey";
        korb.appendChild(pGesamt);
        
        if (selected) {
            var p: HTMLParagraphElement = document.createElement("p");
            p.id = elementId;
            p.innerText = value + "  = " + preisElement + "€";
            korb.appendChild(p);
        }
        
        //Wird erst beim zweiten Vorgang angewendet
        for (let i: number = 0; i < korb.getElementsByTagName("p").length; i++) { 
           
            if (korb.getElementsByTagName("p")[i].id == elementId) { 
                var innerPreis: string = korb.getElementsByTagName("p")[i].innerText.split("=")[1]; 
                korb.getElementsByTagName("p")[i].remove(); 

                gesamtpreis = gesamtpreis - parseInt(innerPreis);
            }
            
            if (korb.getElementsByTagName("p")[i].id == "gesamtpreisid") {
                korb.getElementsByTagName("p")[i].remove();
            }
        }

        
    }


    function PrufeDaten(): void {

        prufen.innerText = "";
        if (Name.checkValidity() == false || Vorname.checkValidity() == false || Mail.checkValidity() == false || Plz.checkValidity() == false || Adresse.checkValidity() == false) {
            prufen.innerText = "Fehler! Bitte gib eine Adresse ein";
            prufen.style.color = "red";
            document.body.appendChild(prufen);
        }
        else {
            prufen.innerText = "Deine Bestellung wurde erfolgreich verifiziert!";
            prufen.style.color = "green";
            document.body.appendChild(prufen);
        }
    }


}