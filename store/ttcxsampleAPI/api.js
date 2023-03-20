import axios from "axios"
const ttcxsampleAPI = axios.create({
  baseURL: "https://ttcx-sample-39456-prod.herokuapp.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_login_create(payload) {
  return ttcxsampleAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_signup_create(payload) {
  return ttcxsampleAPI.post(`/api/v1/signup/`, payload.data)
}
function api_v1_creator_list(payload) {
  return ttcxsampleAPI.get(`/api/v1/creator/`)
}
function api_v1_creator_create(payload) {
  return ttcxsampleAPI.post(`/api/v1/creator/`, payload.data)
}
function rest_auth_user_retrieve(payload) {
  return ttcxsampleAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return ttcxsampleAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return ttcxsampleAPI.patch(`/rest-auth/user/`, payload.data)
}
function api_docs_schema_retrieve(payload) {
  return ttcxsampleAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function rest_auth_login_create(payload) {
  return ttcxsampleAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return ttcxsampleAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return ttcxsampleAPI.post(`/rest-auth/logout/`)
}
function api_v1_creator_retrieve(payload) {
  return ttcxsampleAPI.get(`/api/v1/creator/${payload.id}/`)
}
function api_v1_creator_update(payload) {
  return ttcxsampleAPI.put(`/api/v1/creator/${payload.id}/`, payload.data)
}
function api_v1_creator_partial_update(payload) {
  return ttcxsampleAPI.patch(`/api/v1/creator/${payload.id}/`, payload.data)
}
function api_v1_creator_destroy(payload) {
  return ttcxsampleAPI.delete(`/api/v1/creator/${payload.id}/`)
}
function rest_auth_registration_create(payload) {
  return ttcxsampleAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return ttcxsampleAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_change_create(payload) {
  return ttcxsampleAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return ttcxsampleAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return ttcxsampleAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
export const apiService = {
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_creator_list,
  api_v1_creator_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  api_docs_schema_retrieve,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  api_v1_creator_retrieve,
  api_v1_creator_update,
  api_v1_creator_partial_update,
  api_v1_creator_destroy,
  rest_auth_registration_create,
  rest_auth_password_reset_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_verify_email_create
}
