export default function FormMessage({ type, message }){
    if (!message){
        return null;
    }
    return(
        <p>
            {type == "success" ? "👍" :"☠️"}
            {message}
        </p>
    );
}