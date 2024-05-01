import { storageService } from "./storageService";

async function createUser(email, username, password) {
  try {
    const response = await makeFetchRequest(
      "http://127.0.0.1:5000/api/register",
      "POST",
      {
        email,
        username,
        password,
      }
    );
    if (!response.success) {
      alert(response.message);
      return;
    }
    if (response.success) {
      return true;
    }
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
}

async function login(username, password) {
  try {
    const response = await makeFetchRequest(
      "http://127.0.0.1:5000/api/login",
      "POST",
      {
        username,
        password,
      }
    );
    if (!response.success) {
      alert(response.message);
      return;
    }
    if (response.success) {
      storageService.saveLoggedInUser(response.user);
      return true;
    }
  } catch (error) {
    console.log(error);
  }
}

function logout() {
  storageService.clearAll();
}

async function makeFetchRequest(url, method = "GET", body = null) {
  const response = await fetch(url, {
    method,
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : null,
  });
  return response.json();
}

async function createParking(carType, carNum, cityChoice, cost) {
  try {
    const response = await makeFetchRequest(
      "http://127.0.0.1:5000/api/insertParking",
      "POST",
      {
        carType,
        carNum,
        cityChoice,
        cost,
      }
    );

    if (!response.success) {
      alert(response.message);
      return;
    }

    alert("parking have been added successfully");
    return response.success;
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
}

async function loadParkings() {
  try {
    const response = await makeFetchRequest(
      "http://127.0.0.1:5000/api/parkings"
    );
    const parkings = response.parkings;
    return parkings;
  } catch (error) {
    console.log(error);
  }
}

export const userService = {
  createUser,
  login,
  logout,
  makeFetchRequest,
  createParking,
  loadParkings,
};
