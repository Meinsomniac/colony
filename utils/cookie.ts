// Function to set a cookie
export function setCookie(name: string, value: string, time: number = 1): void {
  const d = new Date();
  d.setTime(d.getTime() + time * 60 * 60 * 1000); // expiration time in ms
  const expires = "expires=" + d.toUTCString();
  document.cookie = `${name}=${value};${expires};path=/`; // path=/ ensures cookie is available across the whole site
}

// Function to get a cookie by name
export function getCookie(name: string): string {
  const nameEq = name + "=";
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let c = cookies[i].trim();
    if (c.indexOf(nameEq) === 0) {
      return c.substring(nameEq.length, c.length); // Return the value of the cookie
    }
  }
  return ""; // Return empty string if cookie is not found
}

// Function to delete a cookie
export function deleteCookie(name: string): void {
  setCookie(name, "", -1); // Setting a past expiration date effectively deletes the cookie
}
