import React from 'react';


const CompanyInfo = (props) =>{
  return(
    <div>
      <li>{props.info.companyName}</li>
    </div>
  );
};


export default CompanyInfo;
