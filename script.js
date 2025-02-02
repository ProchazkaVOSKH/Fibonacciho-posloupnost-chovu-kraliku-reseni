
function generateFibonacci(n) {
    let a = 1, b = 1, temp;
    let i = 0;
    const container = document.getElementById('fibonacci');

    // Hlavní cyklus pro generování Fibonacciho posloupnosti (každý krok je jeden měsíc)
    while (i <= n) {

        // Vytvoření a přidání textu pro aktuální měsíc (používáme kontrukci ${} pro vložení proměnných do řetězce)
        const mesicText = document.createElement('div'); // Vytvoření elementu pro text
        if (i > 0) mesicText.innerText = `Na konci ${i}. měsíce bude ${a} párů.`;
        else mesicText.innerText = 'Zakoupeno: ';
        container.appendChild(mesicText); // Přidání textu do dokumentu

        // Vytvoření a přidání ikon králíků (ikona králíka je Unicode znak 🐇)
        const rabbitIcon = document.createElement('div'); // Vytvoření elementu pro ikony králíků
        rabbitIcon.classList.add('rabbit'); // Přidání třídy pro CSS styly (viz style.css)
        let j = 0;
        while (j < a) {
            rabbitIcon.innerText += '🐇🐇';
            j++;
        }
        container.appendChild(rabbitIcon); // Přidání ikon králíků do dokumentu

        // Aktualizace hodnot pro další iteraci Fibonacciho posloupnosti (pro další měsíc)
        temp = a + b;
        a = b;
        b = temp;
        i++;

    }


    // Výpočet plochy pro život králíků v posledním měsíci
    const plocha = 0.72; // Plocha pro chov jednoho králíka v m čtverečních
    const posledniMesicPocetKraliku = a;
    const celkovaPlocha = posledniMesicPocetKraliku * plocha;


    // Zaokrouhlení na jedno desetinné místo pomocí Math.round
    const zaokrouhlenaPlocha = Math.round(celkovaPlocha * 10) / 10;


    // Vytvoření a přidání elementu s informací o ploše
    const plochaText = document.createElement('div');
    plochaText.innerText = `Celková plocha pro život králíků v posledním měsíci: ${zaokrouhlenaPlocha} m².`;
    container.appendChild(plochaText);
}


// Spuštění generování Fibonacciho posloupnosti s 12 prvky
const n = 12;
generateFibonacci(n);