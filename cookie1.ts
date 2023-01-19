export async function setCookie(name:string ,value:string ,days:number) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    if (typeof window !== "undefined") document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
export async function getCookie(name:string) {
    if (typeof window !== "undefined") {
        let nameEQ = name + "=";
        let ca = document.cookie.split(';');
        for(let i=0;i < ca.length;i++) {
            let c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;

    }
}
export async function deleteCookie(name:string) {   
    if (typeof window !== "undefined") document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}