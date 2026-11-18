# Protokół testu: „Najlepsi na górze, reszta bez zmian”

Materiał dla osoby prowadzącej test (Q3.3). Po polsku, bo fragmenty czytasz uczestnikom na głos.
Zasady techniczne i kryteria akceptacji: [employer-shortlist-highlights.md](employer-shortlist-highlights.md).

## Co sprawdzamy

- **Problem (O05):** rekruter dostaje dużo zgłoszeń, a mało osób wartych rozmowy. „Chcę dostać
  kilka osób, z którymi warto rozmawiać, a nie tylko dużo zgłoszeń.”
- **Hipoteza:** jeśli na górze tej samej listy są 3–5 wyróżnionych osób z krótkim, konkretnym
  powodem, rekruter zaczyna od nich i nie potrzebuje więcej kliknięć niż przy zwykłej liście.
- **Próg:** co najmniej **3 z 4** osób, które jako pierwszą widzą listę z wyróżnieniami, zaczyna od
  wyróżnionych i nie klika więcej niż grupa, która zaczyna od listy kontrolnej. Liczymy **tylko
  pierwszy kontakt** z listą.
- **To jest sygnał o czytelności z małej próby, nie wynik statystyczny.** Test nie sprawdza, czy
  wyróżnione osoby są naprawdę lepszymi kandydatami.

## Co jest symulacją (powiedz to przy publikacji wyników)

- Wszyscy kandydaci, CV, odpowiedzi i Match Score są fikcyjne.
- Wyróżnienia i powody wybrałem/wybrałam ręcznie na podstawie odpowiedzi i CV. Nie ma modelu AI
  ani algorytmu. Kryterium wyboru nie zostało sprawdzone (eksperyment E1 nie był wykonany).
- Uczestnicy grają rolę rekrutera; nie są to prawdziwi rekruterzy BrightLabs.

## Przygotowanie (raz)

1. Uruchom aplikację: `npm run dev`, adres http://127.0.0.1:3001.
2. Otwórz **Ustawienia → Resetuj** i potwierdź. Wejdź jako **Karolina Wiśniewska**.
3. Sprawdź oba adresy:
   - wariant z wyróżnieniami: `http://127.0.0.1:3001/#/app/kandydaci?wariant=wyroznione`
   - wariant kontrolny: `http://127.0.0.1:3001/#/app/kandydaci?wariant=kontrolny`
4. Przygotuj arkusz notatek (niżej) i stoper.

## Przed każdym wariantem (ważne)

- **Zresetuj scenariusz** (Ustawienia → Resetuj) i wejdź ponownie jako Karolina. Zmiany etapów
  zapisują się w przeglądarce; bez resetu kolejna osoba zobaczy np. „W przeglądzie” przy kimś.
- **Zawsze otwieraj listę pełnym adresem z `?wariant=`.** Aplikacja pamięta wariant w danej karcie
  przeglądarki i nie pokazuje go na ekranie. Bezpieczniej: nowa karta dla każdego uczestnika.
- Przewiń stronę na samą górę, zanim oddasz ekran uczestnikowi.

## Przydział i kolejność

Zrównoważona kolejność. W = lista z wyróżnieniami, K = lista kontrolna.

| Uczestnik | Pierwszy kontakt (liczy się do progu) | Drugi kontakt (tylko rozmowa) |
| --------- | ------------------------------------- | ----------------------------- |
| P1        | W                                     | K                             |
| P2        | K                                     | W                             |
| P3        | W                                     | K                             |
| P4        | K                                     | W                             |
| P5        | W                                     | K                             |
| P6        | K                                     | W                             |
| P7        | W                                     | K                             |
| P8        | K                                     | W                             |

Jeśli ktoś odpadnie, kolejną osobę przypisz do tej samej kolejności, żeby grupy W i K miały po 4.

## Przebieg (ok. 15 minut)

### 1. Wprowadzenie (czytaj)

> Dziękuję, że pomagasz. Sprawdzamy prototyp ekranu dla rekruterów, a nie Ciebie. Nie ma złych
> odpowiedzi. Wszystkie osoby i dane na ekranie są fikcyjne. Proszę, mów na głos, co myślisz i
> czego szukasz. Nie będę podpowiadać, jak działa ekran. Czy mogę robić notatki? Nie zapisuję
> Twojego imienia, tylko kod uczestnika.

### 2. Zadanie: pierwszy kontakt (czytaj)

> Jesteś rekruterką lub rekruterem w firmie BrightLabs. Na ofertę „AI Product Manager” przyszło 18
> zgłoszeń. Masz mało czasu. Wybierz 3 osoby, z którymi chcesz umówić pierwszą rozmowę, i powiedz
> mi, dlaczego. Daj znać, kiedy skończysz.

- Włącz stoper, gdy uczestnik zobaczy listę. Limit: 5 minut (po czasie poproś o decyzję).
- Nie odpowiadaj na pytania o ekran; odpowiedz „Jak myślisz?” albo „Zrób tak, jak zrobiłbyś
  normalnie”.

### 3. Co notujesz przy pierwszym kontakcie

- **Gdzie zaczyna:** pierwsza karta, którą otwiera albo czyta na głos. W wariancie W: czy jest w
  sekcji „Warto porozmawiać”? W wariancie K: która to pozycja na liście?
- **Kliknięcia do decyzji:** każde kliknięcie w kartę, „Kandydaci” (powrót), menu, wyszukiwarkę lub
  zmianę etapu. Przewijanie nie liczy się jako kliknięcie.
- **Czas** do podania trzech osób.
- **Wybrane 3 osoby** i podane powody.
- Czy przeczytał/a informację, że wyróżnienia są przygotowane ręcznie.

### 4. Pytania po pierwszym kontakcie

1. Od czego zacząłeś/zaczęłaś i dlaczego?
2. (Tylko W) Co oznaczało pole „Dlaczego warto porozmawiać”? Kto lub co, Twoim zdaniem, wybrało te
   osoby? _Sprawdzasz, czy ktoś myśli, że to AI lub ocena Match Score._
3. (Tylko W) Czy powód był wystarczający, żeby zaprosić na rozmowę, czy coś sprawdzał(a)byś jeszcze?
4. Co było najtrudniejsze w wybieraniu?

### 5. Drugi kontakt (tylko rozmowa)

Zresetuj scenariusz, otwórz drugi wariant i poproś: „Spójrz na tę wersję listy. Czym się różni i
która lepiej pomaga Ci wybrać osoby do rozmowy?” Tych obserwacji **nie liczysz do progu**: uczestnik
zna już kandydatów.

## Arkusz notatek

| Kod | Pierwszy wariant | Pierwsza karta (sekcja / pozycja) | Zaczął od wyróżnionych? | Kliknięcia | Czas | Wybrane 3 osoby | Rozumie, że wyróżnienia są ręczne? | Cytat / uwaga |
| --- | ---------------- | --------------------------------- | ----------------------- | ---------- | ---- | --------------- | ---------------------------------- | ------------- |
| P1  | W                |                                   |                         |            |      |                 |                                    |               |
| P2  | K                |                                   | —                       |            |      |                 | —                                  |               |
| P3  | W                |                                   |                         |            |      |                 |                                    |               |
| P4  | K                |                                   | —                       |            |      |                 | —                                  |               |
| P5  | W                |                                   |                         |            |      |                 |                                    |               |
| P6  | K                |                                   | —                       |            |      |                 | —                                  |               |
| P7  | W                |                                   |                         |            |      |                 |                                    |               |
| P8  | K                |                                   | —                       |            |      |                 | —                                  |               |

## Jak odczytać wynik

1. Policz w grupie W, ile osób zaczęło od wyróżnionych (próg: co najmniej 3 z 4).
2. Porównaj kliknięcia: mediana grupy W ma być **nie większa** niż mediana grupy K.
3. Oba warunki spełnione → sygnał, że wyróżnienia są czytelne i nie dokładają pracy.
4. Dodatkowo sprawdź (nie jest to próg, ale ważna obserwacja):
   - Czy osoby z grupy K, które zaczęły od góry listy, i tak trafiły na kogoś z wyróżnionych?
     Jeśli nie, wyróżnienie zmienia, od kogo rekruter zaczyna.
   - Czy w grupie W ktoś zaczął od wyróżnionych tylko dlatego, że były pierwsze? Słuchaj
     odpowiedzi na pytanie 1.
   - Czy ktoś uznał wyróżnienia za ocenę AI albo Match Score mimo informacji na ekranie?
   - Czy ktoś zauważył, że wyróżnione osoby mają niższy Match Score niż część pozostałych, i co
     z tym zrobił?

## Ograniczenia, które musisz podać przy wynikach

- 4 + 4 osoby to mała próba; wynik to sygnał, nie dowód.
- Uczestnicy grają rekruterów, a dane są fikcyjne.
- Wyróżnienia są ręczne; test nie mówi, czy takie kryterium wskazuje dobrych kandydatów.
- W grupie W wyróżnione karty są pierwsze na ekranie; część efektu może wynikać z samej pozycji.

## Po teście

Zapisz obserwacje w `docs/learnings/` (szablon: `docs/templates/LEARNING.md`), tylko z kodami
uczestników, bez imion i danych osobowych.
