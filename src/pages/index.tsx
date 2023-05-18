import { HomeStyles as styles } from "./styles";

export default function Home() {
  return (
    <main style={styles.mainRoot}>
      <div style={styles.detailsBoxRoot}>
        <h1 style={styles.detailsBoxTitle}>Corectarea errorilor in texte</h1>
        <p style={styles.textIndent}>
          Acest proiect a fost elaborata de{" "}
          <span style={styles.textSpecial}>Gheorghita Valentin</span> si{" "}
          <span style={styles.textSpecial}>Dubciuc Damian</span> ca si proiect
          de an pentru disciplina{" "}
          <span style={styles.textSpecial}>Invatarea Automata</span>
        </p>
        <p style={styles.textIndent}>
          Tehnologiile de corectare a erorilor din texte recunoscute din
          documente vechi românești din secolele XVII și XVIII au fost
          dezvoltate pentru a remedia greșelile din aceste texte istorice.
          Aceste tehnologii utilizează algoritmi avansați de recunoaștere optică
          a caracterelor (OCR) și prelucrare a limbajului natural (NLP) pentru a
          identifica și corecta erorile de ortografie, gramatică și formatare.
          Ele analizează și compară textele originale cu variante corecte și le
          corectează automat, utilizând baze de date și modele de învățare
          automată antrenate pe texte autentice. Astfel, aceste tehnologii
          contribuie la conservarea și restaurarea corectă a documentelor
          istorice românești, facilitând înțelegerea și studiul lor.
        </p>
      </div>
    </main>
  );
}
