export default function Button({
    children, 
    disabled = false,
    type = "Butoon"
}) {
    return (
        <Button
            type={type}
            disabled={disabled}
            className="
                bg-blue-600
                hover:gb-blue-700
                text-white
                font-semibold
                px-4
                py-2
                reunded
                transition
                duration-200
                disable:bg-gray-400
           "
        >
            {children}
        </Button>
    );
}