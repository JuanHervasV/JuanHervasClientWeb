import { basePath, apiVersion } from "./config";

export function getCoursesApi() {
  const url = `${basePath}/${apiVersion}/get-courses`;

  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function getCourseDataUdemyApi(id) {
  const baseUrl = `https://www.udemy.com/api-2.0/courses/${id}`;
  const coursesParams = `?fields[course]=title,headline,url,price,image_480x270`;
  const url = baseUrl + coursesParams;
  const token= "Basic SWl4MUU3TXFPOENoenM1U3Zlc0hkSTVYWlBONEQ5Q0xkZElhVnRsRTpqMnk0eWhQZHNoU3hlZ2J4aFRydk9pbXB4RTRJdTVoSnBrY1dLRGJwcmlCbkhvT1lkVDlJMk9YVlpac21rWFdJQjFYU05IcDBlbWtLem1MUmNuTGh3ZVE5N2xjV2RaRnQzTms4b2FRZWdqZTQ3VDBidE14ektBSENhMHRXbzcwNg==""

  const params = {
    method: "GET",
    headers: {
      "Accept": "application/json, text/plain, */*",
      Authorization: token,
      "Content-Type": "application/json;charset=utf-8"
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);

      return result;
    })
    .catch((err) => {
      return err.message;
    });
}

export function deleteCourseApi(token, id) {
  const url = `${basePath}/${apiVersion}/delete-course/${id}`;

  const params = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function addCourseApi(token, course) {
  const url = `${basePath}/${apiVersion}/add-course`;

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(course),
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function updateCourseApi(token, id, data) {
  const url = `${basePath}/${apiVersion}/update-course/${id}`;

  const params = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(data),
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}
