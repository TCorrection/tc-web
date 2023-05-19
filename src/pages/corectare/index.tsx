import { Button } from "@/components/Button";
import { Dropdown } from "@/components/Dropdown";
import { TextField } from "@/components/TextField";
import { Checkbox, FormControlLabel } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { SECOLE, UPLOAD_DATA_TYPES } from "./data";
import { CorrectionPageStyles as styles } from "./styles";
import { API } from "@/config/api";
import { useRouter } from "next/router";

export default function Corectare() {
  const [century, setCentury] = useState(SECOLE[0].value);
  const [uploadDataType, setUploadDataType] = useState(
    UPLOAD_DATA_TYPES[0].value
  );
  const [isCorrectCheckboxChecked, setIsCorrectCheckboxChecked] =
    useState(false);

  const [wrongTextValue, setWrongTextValue] = useState("");
  const [correctTextValue, setCorrectTextValue] = useState(undefined);

  const router = useRouter();

  const handleFileUpload = useCallback((e: any) => {
    const file = e.target.files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
      const file = e.target.result;
      setWrongTextValue(file);
    };
    reader.onerror = (e) => alert(e.target.error.name);
    reader.readAsText(file);
  }, []);

  const handleSubmit = useCallback(async () => {
    if (!wrongTextValue) {
      alert("Introducerea textului este obligatorie!");
      return;
    }

    const result = await API.correctText(
      wrongTextValue,
      century,
      correctTextValue
    );
    router.replace(`/rezultate/${result.id}`);
  }, [century, router, wrongTextValue, correctTextValue]);

  return (
    <main style={styles.root}>
      <div>
        <Dropdown
          value={uploadDataType}
          setValue={setUploadDataType}
          title="Tip"
          optionList={UPLOAD_DATA_TYPES}
          width={100}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: 32,
        }}
      >
        {uploadDataType === "text" && (
          <div>
            <p>Text gresit</p>
            <TextField
              multiline
              value={wrongTextValue}
              setValue={setWrongTextValue}
            />
          </div>
        )}
        {uploadDataType === "file" && (
          <div>
            <p>Text gresit</p>
            <input
              type="file"
              accept=".txt"
              onChange={handleFileUpload}
            />
          </div>
        )}
      </div>

      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked
                checked={isCorrectCheckboxChecked}
                onChange={(e) => setIsCorrectCheckboxChecked(e.target.checked)}
              />
            }
            label="Include text corect? (necesar pentru precision/recall)"
          />
        </div>
        {isCorrectCheckboxChecked && (
          <div>
            <p>Text corect</p>
            <TextField
              multiline
              value={correctTextValue || ""}
              setValue={setCorrectTextValue}
            />
          </div>
        )}
      </div>
      <div>
        <Dropdown
          value={century}
          setValue={setCentury}
          title="Secol"
          optionList={SECOLE}
          width={100}
        />
      </div>

      <Button onClick={handleSubmit} title="Corecteaza" />
    </main>
  );
}
