const fs = require("file-system");

const companies = JSON.parse(fs.readFileSync("./data/companies.json"));
const items = JSON.parse(fs.readFileSync("./data/items.json"));
let orders = { "6b3b8e25-b310-4d0a-af39-466c17bff06e": { 6543: 1, 6544: 1 } };

const updatedArr = [];

companies.forEach((item) => {
  updatedArr.push({
    name: item.name,
    url: item.url,
    country: item.country,
    _id: item.id,
  });
});

//fs.writeFileSync("server/data/fixedCompanies.json", JSON.stringify(updatedArr));

module.exports = { companies, items, orders };
