import React from 'react';
import { GET_PRODUCT } from './api.js';

export async function fetchGet(){

  const { url, options } = GET_PRODUCT();
  const response = await fetch(url, options)
  const json = await response.json();
  // if (json.error) {
  //   alert(json)
  //   return
  // }
  return json;
}