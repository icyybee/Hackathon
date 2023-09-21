export function formDataObject(obj) {
    const formData = new FormData();
  
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            if (value instanceof File) {
                formData.append(key, value); // Append the file to FormData
            } else {
                formData.append(key, value); // Append regular fields to FormData
            }
        }
    }
  
    return formData;
}
  