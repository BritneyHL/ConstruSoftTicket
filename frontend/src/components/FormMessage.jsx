export default function FormMessage({ type, message }){
    if (!message){
        return null;
    }
    return(
        <div
            className={`
                mt-4
                p-3
                rounded
                font-medium
                ${
                    type ==="succes"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }    
            `}
        >
            {message}
        </div>
    );
}