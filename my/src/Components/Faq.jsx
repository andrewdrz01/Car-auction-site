import React from "react";
import FooterPage from "./Footer";

import "../Css/Faq.css"

export default function FaqPage() {
    return (
        <div className="main-container-faq">
            <div className="main-faq">
                <p className="item-faq-txt-first">FAQ - tu znajdziesz odpowiedzi na najczesciej zadawane pytania !</p>
            </div>
            <div className="main-faq-container">
                <h2 className="item-tittle-faq">FAQ - pytania od was do nas !</h2>

                <p className="item-faq-question">Czy sprowadzacie samochody zpoza Unii Europejskiej ?</p>
                <br />
                <p className="item-faq-answer">Tak, sprowadzamy samochody zpoza Unii, miedzy innymi z Ameryki czy Japonii. Sprowadzimy dla ciebie samochód z kazdego kraju na swiecie !</p>

                <br />
                <p className="item-faq-question">Czy zajmujecie sie kompleksowo sprowadzaniem samochodu pod dom z oplatami, clem, podatkami etc. ?</p>
                <br />
                <p className="item-faq-answer">W naszej firmie zajmujemy sie sprowadzeniem samochodu od A do Z. Dostarczamy samochody pod dom, a klient nie musi sie martwic zadnymi papierami w urzedach. Jestesmy w stanie takze na prosbe klienta zarejestrowac auto i je ubezpieczyc.</p>

                <br />
                <p className="item-faq-question">Jaki jest czas oczekiwania na samochod sprowadzany ?</p>
                <br />
                <p className="item-faq-answer">W przypadku Europy jest to czas od 3 do 6 dni

                    W przypadku USA/Japonii oraz emiratów arabskich sprawa jest nieco bardziej złożona, ponieważ jest to zależne od połączeń transportowych nie tylko przy wykorzystaniu tradycyjnych dróg ale tez transportu kontenerowego, zarówno kolejowego jak i morskiego. Dzięki wspolpracy z firma na terenie USA, proces ten został przez nas maksymalnie skrócony, dzięki czemu możemy pochwalić się transportem do portu nawet w 3 tygodnie, z najbliższych portów, oraz do 6 tygodni z porów bardziej odległych, takich jak Los Angeles
                    W przypadku ZEA i Japonii: 2-3 miesiące</p>

                <br />
                <p className="item-faq-question">Czy mogę zakupić przy państwa pomocy samochód na fakturę vat?
                </p>
                <br />
                <p className="item-faq-answer">
                    Oczywiście, w przypadku zakupu samochodu na terenie Państw członkowskich w Uni Europejskiej sprawa wygląda stosunkowo prosto, samochód musi być sprzedawany na podstawie faktury vat, na której vat jest określany jako 0%, następnie uiszczamy podatek w naszym Państwie.

                    W przypadku zakupu samochodu z Państw nie będących w uni europejskiej, podatek trzeba będzie odprowadzić w Polsce, co w przypadku importu z USA może generować dodatkowe koszty, ponieważ podstawowe oferty są przygotowywane dla pełnych odpraw w Niemczech lub Holandii, a co za tym idzie vat w takiej ofercie to 19% lub 21% wartości samochodu.</p>

                <br />
                <p className="item-faq-question">Czy samochód z USA można leasingować?
                </p>
                <br />
                <p className="item-faq-answer">
                    Pojazdy z USA mogą być leasingowane, jednakże jest to obarczone dodatkowymi trudnościami, po pierwsze nie każda firma leasingowa chce udzielać finansowania na takie samochody, a po drugie co bardziej istotne naprawa takiego samochodu musi zostać całkowicie udokumentowana, oraz samochód musi przejść inspekcję firmy finansującej. Interesuje cię leasing samochodu z USA, dla nas to nie problem, skontaktuj się z jednym z naszych oddziałów i porozmawiaj o szczegółach.
                </p>

                <br />
                <p className="item-faq-question">Jaka jest Państwa kaucja oraz prowizja?
                </p>
                <br />
                <p className="item-faq-answer">
                    Kaucja za standardowe samochody jest to 2500zł, w przypadku samochodów powyżej 200 tyś. złotych kaucja jest ustalana indywidualnie. Kaucja jest oczywiście zwrotna, stanowi ona tylko zabezpieczenie do momentu zapłaty za samochód przez klienta, kaucje możemy zwracać po każdej nie udanej próbie licytacji , licytacji, oraz po zapłacenie za samochód.

                    Nasza prowizja za import to niezmienne 2500zł brutto, jest to kwota w ramach której klient otrzymuje od nas pełne wsparcie na etapie poszukiwania samochodu, następnie zajmujemy się organizacją wszystkich procesów, takich jak: Licytacji samochodu, organizacja transportu, przygotowanie opłat celnych.
                </p>
            </div>
            <FooterPage />
        </div>
    )
}