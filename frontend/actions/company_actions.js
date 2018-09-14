import * as CompanyApiUtil from './../util/company_api_util';

export const RECEIVE_COMPANY = "RECEIVE_COMPANY";
export const RECEIVE_CHART = "RECEIVE_CHART";
export const RECEIVE_COMPANY_INFO = "RECEIVE_COMPANY_INFO";

const receiveCompany = (company) => {
  return {
    type: RECEIVE_COMPANY,
    company
  };
};

const receiveChart = (chart) => {
  return {
    type: RECEIVE_CHART,
    chart
  };
};

const receiveCompanyInfo = (info) => {
  return {
    type: RECEIVE_COMPANY_INFO,
    info
  };
};

export const fetchCompany = (id) => dispatch => (
  CompanyApiUtil.fetchCompany(id).then((company) =>
  dispatch(receiveCompany(company)))
);

export const fetchChart = (symbol, range) => dispatch => (
  CompanyApiUtil.fetchChart(symbol,range).then((chart) =>
  dispatch(receiveChart(chart)))
);

export const fetchCompanyInfo = (symbol) => dispatch => (
  CompanyApiUtil.fetchCompanyInfo(symbol).then((info) =>
  dispatch(receiveCompanyInfo(info)))
);