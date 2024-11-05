import { request } from '@umijs/max';

interface RequestOptions {
  params?: Record<string, any>;
  data?: any;
  headers?: Record<string, string>;
  [key: string]: any;
}

/**
 * GET请求封装
 * @param url 请求地址
 * @param options 请求配置
 * @returns Promise
 */
export async function get<T = any>(url: string, options?: RequestOptions) {
  return request<T>(url, {
    method: 'GET',
    ...(options || {}),
  });
}

/**
 * POST请求封装
 * @param url 请求地址
 * @param data 请求数据
 * @param options 其他配置
 * @returns Promise
 */
export async function post<T = any>(url: string, data?: any, options?: RequestOptions) {
  return request<T>(url, {
    method: 'POST',
    data,
    ...(options || {}),
  });
}

/**
 * PUT请求封装
 * @param url 请求地址
 * @param data 请求数据
 * @param options 其他配置
 * @returns Promise
 */
export async function put<T = any>(url: string, data?: any, options?: RequestOptions) {
  return request<T>(url, {
    method: 'PUT',
    data,
    ...(options || {}),
  });
}

/**
 * DELETE请求封装
 * @param url 请求地址
 * @param options 请求配置
 * @returns Promise
 */
export async function del<T = any>(url: string, options?: RequestOptions) {
  return request<T>(url, {
    method: 'DELETE',
    ...(options || {}),
  });
}

export { request };


