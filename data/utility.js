export function dateStr(date){
    return (
        new Date(date).toLocaleDateString('en-US' , {})
        +' '+
        new Date(date).toLocaleTimeString('en-US' , {})
    );
}