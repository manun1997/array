function inputarray() {
  let outputarray = [] + document.getElementById("array").value;
  document.getElementById("arraydata").innerHTML =
    "Array Elements Are: [ " + outputarray + " ]";
}

//Arrray Using Map Function

function jsondata() {
  let obj =
    '{"employees":[' +
    '{"firstName":"Manu","lastName":"N" },' +
    '{"firstName":"Manoj","lastName":"M" },' +
    '{"firstName":"Yashwanth","lastName":"N" }]}';

  const data = JSON.parse(obj);
  document.getElementById("jsondemo").innerHTML = obj;

  const datastore = (document.getElementById("jsondemo1").innerHTML =
    " Firstname : " +
    data.employees[0].firstName +
    " ,\n Lastname : " +
    data.employees[0].lastName +
    "\n" +
    " Firstname : " +
    data.employees[1].firstName +
    " , " +
    " \n Lastname : " +
    data.employees[1].lastName +
    "\n" +
    " Firstname : " +
    data.employees[2].firstName +
    " , " +
    " \n Lastname : " +
    data.employees[2].lastName);
}

//Array of Elemenet Inserting

var x = 0;
var array = Array();

function add_element_to_array() {
  var z = document.getElementById("text1").value;

  if (z == "" || z == "null") {
    alert("Please Enter Any Values Insert Element To An Array");
  } else {
    array[x] = document.getElementById("text1").value;
    alert("Element: " + array[x] + " Added at index " + x);
    x++;
    document.getElementById("text1").value = "";
  }
}

function display_array() {
  var e = "";

  for (var i = 0; i < array.length; i++) {
    e += "Element " + i + " = " + array[i] + "\n";
  }
  document.getElementById("Result").innerHTML = e;
}

function display_map() {
  var e = "";
  console.log(e);
  for (var i = 0; i < array.length; i++) {
    var j = array[i];
    e += "Element " + i + " = " + array[i] + "\n";
  }
  const map1 = array.map((i) => i * 2);
  console.log();
  document.getElementById("Result").innerHTML =
    "Array Element Multiplied By " + j + " * 2 = " + map1;
}

function display_filter() {
  var e = "";
  console.log(e);
  for (var i = 0; i < array.length; i++) {
    var j = array[i];
    e += "Element " + i + " = " + array[i] + "\n";
  }
  const map2 = array.filter((i) => i % 2 === 0);
  if (map2 == 0) {
    document.getElementById("Result").innerHTML = "success";
  } else {
    document.getElementById("Result").innerHTML = "Not Success";
  }
}

function display_reduce() {
  var e = "";
  var result = 0;
  console.log(e);
  for (var i = 0; i < array.length; i++) {
    var j = array[i];
    e += "Element " + i + " = " + array[i] + "\n";
  }

  const map3 = array.reduce(function (result, j) {
    return result + j;
  }, 0);
  document.getElementById("Result").innerHTML = map3;
}

//Array Element Box Insert

function add() {
  let inputField = document.getElementById("input-field").value;

  if (inputField === "" || inputField === " " || inputField === null) {
    alert("Please enter your task");
  } else {
    var button = document.getElementById("click"),
      count = 0;
    button.onclick = function () {
      count += 1;
      console.log(count);

      let data = document.getElementById("list__group");
      let div = document.createElement("div");

      div.className = "main-div d-flex justify-content-between";
      data.appendChild(div);

      let input = document.createElement("input");

      input.className = "form-control w-75 my-3";
      input.value = inputField;
      input.id = "second-input" + count;
      var value = (document.getElementById(input.id).disabled = false);
      console.log(input.id);
      div.appendChild(input);

      let edit_span = document.createElement("span");
      edit_span.innerHTML = `<i class=' my-3 text-success  fa fa-edit'></i>`;
      div.appendChild(edit_span);

      let delete_span = document.createElement("span");
      delete_span.innerHTML = `<i class=' my-3 text-danger fa fa-trash'></i>`;
      div.appendChild(delete_span);

      delete_span.addEventListener("click", (e) => {
        data.removeChild(div);
      });

      edit_span.addEventListener("click", (e) => {
        var value = (document.getElementById(input.id).disabled = true);
        console.log(value);
        edit_span.mousemove = handleChange;
      });
      function handleChange(e) {}
    };
  }

  document.getElementById("input-field").value = "";
}
