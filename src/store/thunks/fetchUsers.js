import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//base type is a random string
//when async dispatches automatic actions like pending,fullfilled, error
//So it adds /action_type to base string ex: "/users/fetch/pending"

const fetchUsers = createAsyncThunk("/users/fetch", async () => {
    const response = await axios.get("http://localhost:3005/users");
    await pause(1000);
    return response.data;
});

//to delay loading
function pause(time) {
    return new Promise((resolve) => {
        setTimeout(resolve,time);
    });
}

export { fetchUsers };
