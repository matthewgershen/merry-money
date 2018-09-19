export const convertDate = (date) =>{
  let day = new Date(date).getDate();
  let month = new Date(date).toLocaleString("en-us", { month: "short" });

  return `${month} ${day}`;
};
