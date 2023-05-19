import { API, API_TYPES } from "@/config/api";
import { trimText } from "@/utils/trimText";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Rezultat() {
  const [result, setResult] = useState<API_TYPES.Result>();
  const [ID, setID] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (!router.query.ID) return;
    setID(router.query.ID);
  }, [router.query]);

  const fetchData = useCallback(async () => {
    const data = await API.getById(ID);
    setResult(data);
    console.log(result);
  }, [ID]);

  useEffect(() => {
    if (!ID) return;
    fetchData();
  }, [ID]);

  return (
    <main>
      <h3>ID:</h3>
      <p>{result?.id}</p>
      <h3>Secol:</h3>
      <p>{result?.century}</p>
      <h3>Precision:</h3>
      <p>{result?.precision}</p>
      <h3>Recall:</h3>
      <p>{result?.recall}</p>
      <h3>Text original:</h3>
      <p>{result?.originalText}</p>
      <h3>Text corectat:</h3>
      <p>{result?.correctedText}</p>
      <h3>Creeat la:</h3>
      <p>{result?.createdAt.toLocaleString()}</p>
    </main>
  );
}
