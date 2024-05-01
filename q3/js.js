async function createUser(username, carNum, carType, password) {
    try {
      const response = await makeFetchRequest(
        "http://127.0.0.1:5000/api/register",
        "POST",
        {
          username,
          carNum,
          carType,
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