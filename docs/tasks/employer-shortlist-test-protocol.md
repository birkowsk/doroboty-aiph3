# Protokół testu: „Najlepsi na górze, reszta bez zmian”

Materiał dla osoby prowadzącej test (Q3.3). Po polsku, bo fragmenty czytasz uczestnikom na głos.
Zasady techniczne i kryteria akceptacji: [employer-shortlist-highlights.md](employer-shortlist-highlights.md).
Post na Circle: [employer-shortlist-circle-post.md](employer-shortlist-circle-post.md).

## Co sprawdzamy

- **Problem (O05):** rekruter dostaje dużo zgłoszeń, a mało osób wartych rozmowy. „Chcę dostać
  kilka osób, z którymi warto rozmawiać, a nie tylko dużo zgłoszeń.”
- **Hipoteza:** jeśli na górze tej samej listy są 3–5 wyróżnionych osób z krótkim, konkretnym
  powodem, rekruter zaczyna od nich i nie musi otwierać więcej zgłoszeń niż przy zwykłej liście.
- **Zadanie:** „Wybierz 3 osoby i zaproś je na pierwszą rozmowę.”
- **Wynik w aplikacji:** wybrane 3 zgłoszenia mają etap „Zaproszenie na rozmowę” i zostają przy nim
  po odświeżeniu strony.
- **Próg:** co najmniej **3 z 4** osób, które jako pierwszą widzą listę z wyróżnieniami, zaczyna od
  wyróżnionych (**pierwsze otwarte zgłoszenie** to osoba z sekcji „Warto porozmawiać”) i przed
  wyborem **otwiera nie więcej zgłoszeń** niż grupa, która zaczyna od listy kontrolnej. Liczymy
  **tylko pierwszy kontakt** z listą.
- **Kiedy zmieniam kierunek:** uczestnicy pomijają sekcję i wybierają po Match Score albo mówią, że
  i tak muszą przejrzeć wszystkie zgłoszenia.
- **To jest sygnał o czytelności z małej próby, nie wynik statystyczny.** Test nie sprawdza, czy
  wyróżnione osoby są naprawdę lepszymi kandydatami.

## Co jest symulacją (powiedz to przy publikacji wyników)

- Wszyscy kandydaci, CV, odpowiedzi i Match Score są fikcyjne.
- Wyróżnienia i powody są wybrane ręcznie na podstawie odpowiedzi i CV. Nie ma modelu AI ani
  algorytmu. Kryterium wyboru nie zostało sprawdzone (eksperyment E1 nie był wykonany).
- Uczestnicy grają rolę rekrutera; nie są to prawdziwi rekruterzy BrightLabs.

## Gdzie uruchomić

**Opublikowana wersja (zalecana):** https://birkowsk.github.io/doroboty-aiph3/

- Wejście jako rekruterka: https://birkowsk.github.io/doroboty-aiph3/#/auth/sign-in?audience=employer
- Wariant W: https://birkowsk.github.io/doroboty-aiph3/#/app/kandydaci?wariant=wyroznione
- Wariant K: https://birkowsk.github.io/doroboty-aiph3/#/app/kandydaci?wariant=kontrolny

Lokalnie (`npm run dev`) działa to samo pod `http://127.0.0.1:3001/` z tymi samymi ścieżkami.

## Przed każdym wariantem (ważne)

Każdy wariant musi startować z czystymi danymi: zmiany etapów zapisują się w przeglądarce, a
aplikacja pamięta wariant w danej karcie i nie pokazuje go na ekranie.

**Najprościej: nowe okno prywatne (incognito) dla każdego wariantu.** Ma puste dane, więc nie
trzeba nic resetować.

1. Otwórz nowe okno prywatne.
2. Wejdź linkiem „Wejście jako rekruterka” i wybierz **Karolina Wiśniewska** (aplikacja przejdzie
   do „Moje oferty”).
3. Otwórz link wariantu (W albo K) z listy wyżej. Przewiń na samą górę i oddaj ekran.
4. Po zakończeniu wariantu zamknij okno prywatne.

Bez okna prywatnego: Ustawienia → Resetuj → potwierdź, wejdź ponownie jako Karolina i otwórz pełny
link wariantu.

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

## Przebieg (ok. 15–20 minut)

### 1. Wprowadzenie (czytaj)

> Dziękuję, że pomagasz. Sprawdzamy prototyp ekranu dla rekruterów, a nie Ciebie. Nie ma złych
> odpowiedzi. Wszystkie osoby i dane na ekranie są fikcyjne. Proszę, mów na głos, co myślisz i
> czego szukasz. Nie będę podpowiadać, jak działa ekran. Czy mogę robić notatki? Nie zapisuję
> Twojego imienia, tylko kod uczestnika.

### 2. Zadanie: pierwszy kontakt (czytaj)

> Jesteś rekruterką lub rekruterem w firmie BrightLabs. Na ofertę „AI Product Manager” przyszło 18
> zgłoszeń. Masz mało czasu. Wybierz 3 osoby i zaproś je na pierwszą rozmowę. Powiedz mi, dlaczego
> wybierasz te osoby. Daj znać, kiedy skończysz.

- Włącz stoper, gdy uczestnik zobaczy listę. Limit: 7 minut (po czasie poproś o decyzję).
- Nie odpowiadaj na pytania o ekran; odpowiedz „Jak myślisz?” albo „Zrób tak, jak zrobiłbyś
  normalnie”.
- **Zaproszenie wymaga dwóch kroków na osobę.** Z etapu „Aplikacja wysłana” można przejść tylko do
  „W przeglądzie” (albo „Proces zakończony”); przycisk „Zaproszenie na rozmowę” pojawia się dopiero
  potem. **Nie podpowiadaj tego.** Jeśli uczestnik utknie na dłużej niż ok. 30 sekund, zanotuj to
  jako problem ścieżki i dopiero wtedy powiedz: „Spróbuj przejść dalej w procesie”.
- Po zakończeniu **odśwież stronę** (F5 / Cmd+R) i sprawdź, czy 3 wybrane osoby mają etap
  „Zaproszenie na rozmowę”.

### 3. Co notujesz przy pierwszym kontakcie

- **Pierwsze otwarte zgłoszenie:** kto to jest. W wariancie W: czy jest w sekcji „Warto
  porozmawiać”? W wariancie K: która to pozycja na liście?
- **Liczba otwartych zgłoszeń przed wyborem:** każde wejście w szczegóły zgłoszenia (kliknięcie
  imienia i nazwiska) do momentu zaproszenia trzeciej osoby. Ponowne otwarcie tej samej osoby też
  liczysz; osobno zapisz, ile różnych osób otworzył/a.
- **Czas** do zaproszenia trzeciej osoby.
- **Zaproszone 3 osoby** i podane powody; czy etap został po odświeżeniu.
- **Czy utknął/utknęła** na dwustopniowym zaproszeniu (tak/nie, ile czasu).
- Czy wybierał/a po Match Score (mówi o wyniku, sortuje wzrokiem po kolorach) i czy przeczytał/a
  informację, że wyróżnienia są przygotowane ręcznie.

### 4. Pytania po pierwszym kontakcie

1. Od czego zacząłeś/zaczęłaś i dlaczego?
2. (Tylko W) Co oznaczało pole „Dlaczego warto porozmawiać”? Kto lub co, Twoim zdaniem, wybrało te
   osoby? _Sprawdzasz, czy ktoś myśli, że to AI lub ocena Match Score._
3. (Tylko W) Czy powód był wystarczający, żeby zaprosić na rozmowę, czy coś sprawdzał(a)byś jeszcze?
4. Czy masz poczucie, że i tak trzeba przejrzeć wszystkie zgłoszenia? Dlaczego?
5. Co było najtrudniejsze w wybieraniu i zapraszaniu?

### 5. Drugi kontakt (tylko rozmowa)

W nowym oknie prywatnym otwórz drugi wariant i poproś: „Spójrz na tę wersję listy. Czym się różni i
która lepiej pomaga Ci wybrać osoby do rozmowy?” Tych obserwacji **nie liczysz do progu**: uczestnik
zna już kandydatów.

## Arkusz notatek

| Kod | Pierwszy wariant | Pierwsze otwarte zgłoszenie (osoba, sekcja / pozycja) | Zaczął od wyróżnionych? | Otwarte zgłoszenia (wszystkie / różne) | Czas | Zaproszone 3 osoby | Etap po odświeżeniu OK? | Utknął na zaproszeniu? | Wybierał po Match Score? | Rozumie, że wyróżnienia są ręczne? | Cytat / uwaga |
| --- | ---------------- | ----------------------------------------------------- | ----------------------- | -------------------------------------- | ---- | ------------------ | ----------------------- | ---------------------- | ------------------------ | ---------------------------------- | ------------- |
| P1  | W                |                                                       |                         |                                        |      |                    |                         |                        |                          |                                    |               |
| P2  | K                |                                                       | —                       |                                        |      |                    |                         |                        |                          | —                                  |               |
| P3  | W                |                                                       |                         |                                        |      |                    |                         |                        |                          |                                    |               |
| P4  | K                |                                                       | —                       |                                        |      |                    |                         |                        |                          | —                                  |               |
| P5  | W                |                                                       |                         |                                        |      |                    |                         |                        |                          |                                    |               |
| P6  | K                |                                                       | —                       |                                        |      |                    |                         |                        |                          | —                                  |               |
| P7  | W                |                                                       |                         |                                        |      |                    |                         |                        |                          |                                    |               |
| P8  | K                |                                                       | —                       |                                        |      |                    |                         |                        |                          | —                                  |               |

## Jak odczytać wynik

1. Policz w grupie W, ile osób zaczęło od wyróżnionych, czyli pierwsze otwarte zgłoszenie było z
   sekcji „Warto porozmawiać” (próg: co najmniej 3 z 4).
2. Porównaj liczbę otwartych zgłoszeń przed wyborem: mediana grupy W ma być **nie większa** niż
   mediana grupy K.
3. Oba warunki spełnione → sygnał, że wyróżnienia są czytelne i nie dokładają pracy.
4. **Zmień kierunek**, jeśli uczestnicy pomijają sekcję i wybierają po Match Score albo mówią, że i
   tak muszą przejrzeć wszystkie zgłoszenia (pytanie 4).
5. Dodatkowo sprawdź (nie jest to próg, ale ważna obserwacja):
   - Czy osoby z grupy K i tak trafiły na kogoś z wyróżnionych? Jeśli nie, wyróżnienie zmienia,
     od kogo rekruter zaczyna.
   - Czy w grupie W ktoś zaczął od wyróżnionych tylko dlatego, że były pierwsze? Słuchaj
     odpowiedzi na pytanie 1.
   - Czy ktoś uznał wyróżnienia za ocenę AI albo Match Score mimo informacji na ekranie?
   - Czy ktoś zauważył, że wyróżnione osoby mają niższy Match Score niż część pozostałych, i co z
     tym zrobił?
   - Ile osób utknęło na dwustopniowym zaproszeniu. To problem obecnej ścieżki, niezależny od
     wyróżnień, ale wpływa na czas.

## Ograniczenia, które musisz podać przy wynikach

- 4 + 4 osoby to mała próba; wynik to sygnał, nie dowód.
- Uczestnicy grają rekruterów, a dane są fikcyjne.
- Wyróżnienia są ręczne; test nie mówi, czy takie kryterium wskazuje dobrych kandydatów.
- W grupie W wyróżnione karty są pierwsze na ekranie; część efektu może wynikać z samej pozycji.

## Po teście

Zapisz obserwacje w `docs/learnings/` (szablon: `docs/templates/LEARNING.md`), tylko z kodami
uczestników, bez imion i danych osobowych.
