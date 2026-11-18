# Szkic posta: AI Prototype Arena (Q3.3)

Tekst do wklejenia na Circle (wersja uzgodniona 2026-11-18). Załączniki:
`artifacts/q33-wyroznione-desktop.png`, `artifacts/q33-kontrolny-desktop.png`,
`artifacts/q33-wyroznione-mobile.png` (lokalne, poza Gitem). Procedura testu:
[employer-shortlist-test-protocol.md](employer-shortlist-test-protocol.md).

---

DoRoboty.ai: „Najlepsi na górze, reszta bez zmian”. Krótka lista dla rekrutera

**Problem użytkownika**
Rekruter dostaje coraz więcej zgłoszeń, ale mniej osób, z którymi warto rozmawiać. Potrzeba z
discovery: „Chcę dostać kilka osób, z którymi warto rozmawiać, a nie tylko dużo zgłoszeń.”

**Skąd to wiem**

- Aplikacji na ogłoszenie przybyło o 60% (37,5 → 60), a kandydatów kontynuowanych po rozmowie
  ubyło (2,25 → 1,8). Przychód na ogłoszenie stoi w miejscu.
- 34% zakupów ma 0–1 kontynuacji po rozmowie. Firmy z co najmniej 2 kontynuacjami kupują ponownie
  w 46% przypadków, z 0–1 w 27%. To korelacja, nie dowód przyczyny.
- 4 wywiady z firmami: wraca czas poświęcany na każde zgłoszenie i potrzeba krótkiej listy zamiast
  pełnej kolejki.
- Z Supersprintu wybrałem potrzebę O05 (najwyżej w PRES) i pomysł I1 „najlepsi na górze”. Drugi
  pomysł, przykład własnego wkładu kandydata (I2), zostawiam na później.
- Zastrzeżenie: dane wyglądają na wygenerowane.

**Co powstało**
Ta sama lista zgłoszeń na ofertę „AI Product Manager” (18 osób). Na górze jest sekcja „Warto
porozmawiać” z 4 osobami. Przy każdej jest jedno konkretne zdanie, dlaczego, np. „Sam przeprowadził
14 wywiadów z księgowymi i na ich podstawie zawęził pilota do uzgadniania sald” (Paweł, Match Score
58%). Pozostałe 14 zgłoszeń jest niżej, w niezmienionej kolejności. Nic nie jest ukryte, a
rekruter nie wykonuje żadnej nowej akcji. Do porównania jest wersja kontrolna: ta sama lista bez
wyróżnień.

**Po czym poznam, że działa**
Zadanie dla uczestnika: „Wybierz 3 osoby i zaproś je na pierwszą rozmowę.”
Wynik w aplikacji: wybrane 3 zgłoszenia mają etap „Zaproszenie na rozmowę” i zostają przy nim po
odświeżeniu strony.

- 8 uczestników, każdy widzi oba warianty w zrównoważonej kolejności. Liczę tylko pierwszy kontakt
  z listą.
- Prototyp działa, jeśli co najmniej 3 z 4 osób, które zaczynają od listy z wyróżnieniami,
  zaczynają od wyróżnionych (pierwsze otwarte zgłoszenie to osoba z sekcji „Warto porozmawiać”) i
  przed wyborem otwierają nie więcej zgłoszeń niż grupa z listą kontrolną.
- Kierunek zmienię, jeśli uczestnicy pomijają sekcję i wybierają po Match Score albo mówią, że i tak
  muszą przejrzeć wszystkie zgłoszenia.
- To sygnał o czytelności z małej próby, nie wynik statystyczny.

**Co działa naprawdę, a co jest symulacją**

- Działa: lista, sekcja wyróżnionych, wariant kontrolny, wyszukiwanie, przejście do zgłoszenia i
  zmiana etapu rekrutacji. Dane zapisują się lokalnie w przeglądarce.
- Sprawdziłem dotychczasową ścieżkę: wyszukiwanie, otwarcie zgłoszenia i zmiana etapu działają w
  obu wariantach.
- Symulacja: wszyscy kandydaci, CV, odpowiedzi i Match Score są fikcyjne.
- Wyróżnienia są wybrane ręcznie na podstawie odpowiedzi i CV. Nie ma tu modelu AI ani algorytmu.
  Celowo nie są to osoby z najwyższym Match Score, bo w danych z case'u Match Score słabo
  przewidywał zaproszenia (AUC 0,53, moja analiza CSV). Nie zostało jeszcze sprawdzone, czy takie
  kryterium wskazuje dobrych kandydatów. Prototyp sprawdza tylko czytelność.
- Uczestnicy testu grają rolę rekrutera.

**Jak zobaczyć**

1. Otwórz prototyp i wejdź jako Karolina Wiśniewska (rekruterka):
   https://birkowsk.github.io/doroboty-aiph3/#/auth/sign-in?audience=employer
2. Lista z wyróżnieniami:
   https://birkowsk.github.io/doroboty-aiph3/#/app/kandydaci?wariant=wyroznione
3. Wersja kontrolna: https://birkowsk.github.io/doroboty-aiph3/#/app/kandydaci?wariant=kontrolny

Dane są fikcyjne, a Twoje zmiany zapisują się tylko w Twojej przeglądarce.
Screeny: lista z wyróżnieniami (desktop i mobile) oraz wersja kontrolna.

**Repo**
https://github.com/birkowsk/doroboty-aiph3
