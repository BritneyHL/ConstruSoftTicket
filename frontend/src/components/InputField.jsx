export default function InputField({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
  error = ""
}) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        required={placeholder}
        onChange={onChange}
      />
      {error && (
        <p>
          {error}
        </p>
      )

      }
    </div>
  )
}