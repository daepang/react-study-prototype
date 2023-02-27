// Image URL을 Base64 데이터로 변환
export const imageUrlToBase64 = (url: string, afterAction: Function) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
      const reader = new FileReader();
      reader.onloadend = function () {
        resolve(reader.result);
        // Base64 데이터
        const base64 = reader.result;
        // Function으로 Base64 전달
        afterAction(base64 as string);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  });
};

// 파일을 Base64 데이터로 변환
export const fileToBase64 = (file: Blob) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = error => {
      reject(error);
    };
  });
};
