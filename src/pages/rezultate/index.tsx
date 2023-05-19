import { API, API_TYPES } from "@/config/api";
import { trimText } from "@/utils/trimText";
import { useCallback, useEffect, useState } from "react";
import { ResultPageStyles as styles } from "./styles";
import Link from "next/link";

export default function Rezultate() {
  const [results, setResults] = useState<API_TYPES.AllResults>();

  const getAllResults = useCallback(async () => {
    const data = await API.getAllResults();
    setResults(data);
  }, []);

  useEffect(() => {
    getAllResults();
  }, []);

  useEffect(() => {
    console.log(results);
  }, [results]);

  return (
    <>
      <main>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: 32,
          }}
        >
          {results && (
            <table style={styles.tableRoot}>
              <tr style={styles.tableHeader}>
                <th style={styles.tableBorder}>ID</th>
                <th style={styles.tableBorder}>Secol</th>
                <th style={styles.tableBorder}>Text original</th>
                <th style={styles.tableBorder}>Text corectat</th>
                <th style={styles.tableBorder}>Precision</th>
                <th style={styles.tableBorder}>Recall</th>
                <th style={styles.tableBorder}>Creat la</th>
                <th style={styles.tableBorder}></th>
              </tr>

              {results.map((result, index) => (
                <tr key={index}>
                  <td style={styles.tableBorder}>{result.id}</td>
                  <td style={styles.tableBorder}>{result.century}</td>
                  <td style={styles.tableBorder}>
                    {trimText(result.originalText, 16)}
                  </td>
                  <td style={styles.tableBorder}>
                    {trimText(result.correctedText, 16)}
                  </td>
                  <td style={styles.tableBorder}>
                    {result.precision.toFixed(2)}
                  </td>
                  <td style={styles.tableBorder}>{result.recall.toFixed(2)}</td>
                  <td style={styles.tableBorder}>{result.createdAt as any}</td>
                  <td style={styles.tableBorder}>
                    <Link
                      style={styles.tableLink}
                      href={`rezultate/${result.id}`}
                    >
                      Vizualizeaza
                    </Link>
                  </td>
                </tr>
              ))}
            </table>
          )}
        </div>
      </main>
    </>
  );
}
