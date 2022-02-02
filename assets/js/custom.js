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
    let data = document.getElementById("list__group");
    let div = document.createElement("div");

    div.className = "main-div d-flex justify-content-between";
    data.appendChild(div);

    let input = document.createElement("input");
    input.className = "form-control w-75 my-3";
    input.value = inputField;
    input.id = input.value;
    div.appendChild(input);
    console.log(input.id);

    let edit_span = document.createElement("span");
    edit_span.innerHTML = `<i class=' my-3 text-success  fa fa-edit'></i>`;
    var value = (document.getElementById(input.id).disabled = true);
    div.appendChild(edit_span);

    let delete_span = document.createElement("span");
    delete_span.innerHTML = `<i class=' my-3 text-danger  fa fa-trash'></i>`;
    div.appendChild(delete_span);

    delete_span.addEventListener("click", (e) => {
      div.removeChild(delete_span);
      div.removeChild(edit_span);
      div.removeChild(input);
    });

    edit_span.addEventListener("click", (e) => {
      document.getElementById(input.id).disabled = false;
      let data = document.getElementById(input.id).value;
    });

    input.addEventListener("mouseout", (e) => {
      document.getElementById(input.id).disabled = true;
    });

    document.getElementById(input.id).disabled = true;
    document.getElementById("input-field").value = "";
  }
}

// Open Nav Bars
function openNav() {
  document.getElementById("mySidenav").style.width = " 250px";
}

// Close Nav Bars
function togglefun(x) {
  if (x.target.id == "left") {
    document.getElementById("mySidenav").style.width = "50px";
    x.target.className = "fa fa-angle-right";
    x.target.id = "right";
  } else {
    document.getElementById("mySidenav").style.width = " 250px";
    x.target.id = "left";
    x.target.className = "fa fa-angle-left";
  }
}

function closeNav(x) {
  document.getElementById("mySidenav").style.width = "50px";
}

//JSON DATA

function data_click() {
  const data = [
    { icon: "fa fa-home", value: "Min Konto" },
    { icon: "fa fa-user-o", value: "Personlige oplysninger" },
    { icon: "fa fa-credit-card", value: "Abonnementer" },
    {
      icon: "fa fa-circle-o",
      value: "Skkerhed personlige oplysninger ",
    },
    { icon: "fa fa-lock", value: "Apptilladelsel" },
    { icon: "fa fa-long-arrow-down", value: "Status for installation" },
    { icon: "fa fa-cog", value: " Indstillinger" },
  ];

  let final_data = data.map((item, index) => {
    //accessing Division
    let data_details = document.getElementById("data_details");

    //create anchor link
    let data_details_a = document.createElement("a");
    data_details_a.className = "d-flex field_font_size";

    //create anchor link insiede span
    let data_details_span = document.createElement("span");
    data_details_span.className = "icon_space";
    data_details_span.innerHTML = `<i class='icon_size ${item.icon}' aria-hidden='true'></i>`;
    data_details_a.appendChild(data_details_span);

    let second_span = document.createElement("span");
    second_span.className = "span_p";
    second_span.innerHTML = `${item.value}`;

    data_details_a.appendChild(second_span);
    data_details.appendChild(data_details_a);
    console.log(data_details);
  });
}

//jsondata

const students = [
  {
    Student_Image: "assets/images/studen_2.jpg",
    Student_Name: "Manu",
    Student_Roll: "325cs13031",
    Student_Id: "ID2021",
    Student_Address: "Mysore",
  },

  {
    Student_Image: "assets/images/user7.jpg",
    Student_Name: "Kiran",
    Student_Roll: "325cs13032",
    Student_Id: "ID2022",
    Student_Address: "Chanmaraj Nagar",
  },
  {
    Student_Image: "assets/images/user3.jpg",
    Student_Name: "Yashwanth",
    Student_Roll: "325cs13051",
    Student_Id: "ID2023",
    Student_Address: "Mandya",
  },
  {
    Student_Image: "assets/images/user4.jpg",
    Student_Name: "Raaju",
    Student_Roll: "325cs13067",
    Student_Id: "ID2024",
    Student_Address: "Thumkur",
  },
  {
    Student_Image: "assets/images/user5.jpg",
    Student_Name: "Pavan",
    Student_Roll: "325cs13054",
    Student_Id: "ID2024",
    Student_Address: "Banglore",
  },
  {
    Student_Image: "assets/images/user6.jpg",
    Student_Name: "Prakash",
    Student_Roll: "325cs13037",
    Student_Id: "ID2030",
    Student_Address: "Belgam",
  },
];

console.log(students);

function studentdata1() {
  let student_data = students.map((item, index) => {
    let student_details = document.getElementById("student_data");

    let div_card = document.createElement("div");
    div_card.className = "card mb-3 my-3 mr-3";
    div_card.style = "max-width: 800px";

    student_details.appendChild(div_card);

    let card_inside_div = document.createElement("div");
    card_inside_div.className = "font-weight-bold card-header text-center";
    card_inside_div.innerText = " Student Details";
    div_card.appendChild(card_inside_div);

    let row_div = document.createElement("div");
    row_div.className = "row no-gutters";
    div_card.appendChild(row_div);

    let col_div = document.createElement("div");
    col_div.className = " col-md-4";
    row_div.appendChild(col_div);

    let img_data = document.createElement("img");
    img_data.className = "img_data img-thumbnail";
    img_data.src = item.Student_Image;

    img_data.alt = "user";
    col_div.appendChild(img_data);

    let col_div_data = document.createElement("div");
    col_div_data.className = "col-md-8";
    row_div.appendChild(col_div_data);

    let card_body_data = document.createElement("div");
    card_body_data.className = "card-body";

    col_div_data.appendChild(card_body_data);

    let card_ul_data = document.createElement("ul");
    card_ul_data.className = "list-group list-group-flush ";
    card_body_data.appendChild(card_ul_data);

    let card_body_li_name = document.createElement("li");
    card_body_li_name.className = "list-group-item";
    card_ul_data.appendChild(card_body_li_name);

    let span_data = document.createElement("span");
    span_data.className = "font-weight-bold";
    span_data.innerHTML = `Name: ${item.Student_Name}`;
    card_body_li_name.appendChild(span_data);

    let card_body_li_roll = document.createElement("li");
    card_body_li_roll.className = "list-group-item";
    card_ul_data.appendChild(card_body_li_roll);

    let span_data_roll = document.createElement("span");
    span_data_roll.className = "font-weight-bold";
    span_data_roll.innerHTML = `Roll_no: ${item.Student_Roll}`;
    card_body_li_roll.appendChild(span_data_roll);

    let card_body_li_id = document.createElement("li");
    card_body_li_id.className = "list-group-item";
    card_ul_data.appendChild(card_body_li_id);

    let span_data_id = document.createElement("span");
    span_data_id.className = "font-weight-bold";
    span_data_id.innerHTML = `Id: ${item.Student_Id}`;
    card_body_li_id.appendChild(span_data_id);

    let card_body_li_address = document.createElement("li");
    card_body_li_address.className = "list-group-item";
    card_ul_data.appendChild(card_body_li_address);

    let span_data_address = document.createElement("span");
    span_data_address.className = "font-weight-bold";
    span_data_address.innerHTML = `Address: ${item.Student_Address}`;
    card_body_li_address.appendChild(span_data_address);

    console.log(student_details);
  });
}
