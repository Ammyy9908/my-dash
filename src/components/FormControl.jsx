import React from "react";
import styles from "./FormControl.module.scss";
function FormControl({
  type,
  label,
  value,
  setValue,
  id,
  name,
  error,
  errorText,
}) {
  return (
    <div className={styles.form__control}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        autoComplete="off"
        onChange={(e) => setValue(e.target.value)}
      />
      {error && <p className={styles.form__control__error}>{errorText}</p>}
    </div>
  );
}

export default FormControl;
