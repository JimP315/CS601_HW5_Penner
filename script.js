document.addEventListener("DOMContentLoaded", function (event) {
  console.log("Event Listener");
  fetch("./degrees.json")
    .then((response) => response.json()) //look into response class
    .then((data) => {
      console.log("Data", data);

      //build a table - a loop based on the actual number of columns in the data is better
      const table = document.createElement("table");
      let tr = document.createElement("tr");
      let th1 = document.createElement("th");
      let th2 = document.createElement("th");
      let th3 = document.createElement("th");
      let th4 = document.createElement("th");
      let th5 = document.createElement("th");
      let th6 = document.createElement("th");

      let td1 = document.createElement("td");
      let td2 = document.createElement("td");
      let td3 = document.createElement("td");
      let td4 = document.createElement("td");
      let td5 = document.createElement("td");
      let td6 = document.createElement("td");

      let content = document.createTextNode("ID");
      th1.appendChild(content);

      content = document.createTextNode("School");
      th2.appendChild(content);

      content = document.createTextNode("Major");
      th3.appendChild(content);

      content = document.createTextNode("Degree");
      th4.appendChild(content);

      content = document.createTextNode("Year conferred");
      th5.appendChild(content);

      tr.appendChild(th1);
      tr.appendChild(th2);
      tr.appendChild(th3);
      tr.appendChild(th4);
      tr.appendChild(th5);
      tr.appendChild(th6);

      //adding to the table
      table.appendChild(tr);
      //loop goes here
      data.my_past_and_future_study.forEach((el, data) => {
        console.log("Row data", el, data);

        tr = document.createElement("tr");
        td1 = document.createElement("td");
        td2 = document.createElement("td");
        td3 = document.createElement("td");
        td4 = document.createElement("td");
        td5 = document.createElement("td");
        td6 = document.createElement("td");

        content = document.createTextNode(el.id);
        td1.appendChild(content);
        content = document.createTextNode(el.School);
        td2.appendChild(content);
        content = document.createTextNode(el.Major);
        td3.appendChild(content);
        content = document.createTextNode(el.Degree);
        td4.appendChild(content);
        content = document.createTextNode(el.Year);
        td5.appendChild(content);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);

        table.appendChild(tr);
      });
      document.body.appendChild(table);
    });
});
