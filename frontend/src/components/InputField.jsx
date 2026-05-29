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
    <div className="mb-4">
      <label 
        htmlFor={name}
        className0="block mb-2 font-medium text-gray-700"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        required={placeholder}
        onChange={onChange}
        className={`
          w-full
          border
          rounded
          px-3
          py-2
          outline-none
          focus:ring-2
          ${
            error
            ?"border-red-500 focus:ring-red-300"
            :"border-gray-300 focus:ring-blue-300"
          }
        `}
      />

      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  )
}