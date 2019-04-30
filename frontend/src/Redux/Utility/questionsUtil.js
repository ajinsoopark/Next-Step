import axios from "axios";

export const fetchCategories = (id) => {
  return axios.get(`/api/categories`)
}

export const fetchQuestionsByCategory = (id) => {
  return axios.get(`/api/questions/category/${id}`)
}
