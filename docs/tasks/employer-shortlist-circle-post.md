# Szkic posta: AI Prototype Arena (Q3.3)

Tekst do wklejenia na Circle. Załączniki: `artifacts/q33-wyroznione-desktop.png`,
`artifacts/q33-kontrolny-desktop.png`, `artifacts/q33-wyroznione-mobile.png` (lokalne, poza Gitem).

---

**DoRoboty.ai: „Najlepsi na górze, reszta bez zmian” (widok rekrutera)**

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
- Zastrzeżenie: dane wyglądają na wygenerowane.

**Co zbudowałem**
Ta sama lista zgłoszeń na ofertę „AI Product Manager” (18 osób). Na górze sekcja „Warto
porozmawiać” z 4 osobami i jednym konkretnym zdaniem, dlaczego, np. „Sama poprowadziła pilotaż
obiegu faktur u dwóch klientów i zmierzyła skrócenie obsługi z 6 do 4 dni”. Pozostałe 14 zgłoszeń
jest niżej, w niezmienionej kolejności. Nic nie jest ukryte, rekruter nie wykonuje żadnej nowej
akcji. Do porównania jest wersja kontrolna: ta sama lista bez wyróżnień.

**Po czym poznam, że działa**
Zadanie: „Wybierz 3 osoby, z którymi chcesz umówić pierwszą rozmowę.” 8 uczestników, każdy widzi
oba warianty w zrównoważonej kolejności; liczę tylko pierwszy kontakt. Działa, jeśli co najmniej 3
z 4 osób, które zaczynają od listy z wyróżnieniami, zaczyna od wyróżnionych i nie klika więcej niż
grupa z listą kontrolną. To sygnał o czytelności z małej próby, nie wynik statystyczny.

**Co działa naprawdę, a co jest symulacją**

- Działa: lista, sekcja wyróżnionych, wariant kontrolny, wyszukiwanie, przejście do zgłoszenia i
  zmiana etapu rekrutacji. Dane zapisują się lokalnie w przeglądarce.
- Symulacja: wszyscy kandydaci, CV, odpowiedzi i Match Score są fikcyjne.
- **Wyróżnienia wybrałem ręcznie** na podstawie odpowiedzi i CV. Nie ma tu modelu AI ani
  algorytmu. Celowo nie są to osoby z najwyższym Match Score, bo w danych Match Score słabo
  przewidywał zaproszenia (AUC 0,53). Nie sprawdziłem jeszcze, czy takie kryterium wskazuje
  dobrych kandydatów; prototyp sprawdza tylko czytelność.
- Uczestnicy testu grają rolę rekrutera.
