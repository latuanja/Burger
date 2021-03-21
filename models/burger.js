//Import orm into burger.js
const orm = require("..config/orm.js");

//Create the code that will call the ORM functions using burger specific input for the ORM
const burger = {
    all(cb) {
        orm.all("burgers", (res) => cb(res));
    },
    create(cols, vals, cb) {
        orm.create("burgers", cols, vals, (res) => cb(res));
    },
    update(objColVals, condition, cb) {
        orm.udate("burgers", objColVals, condition, (res) => cb(res));
    },

};

document.addEventListener("DOMContentLoaded", (event) => {
    if (event) {
      console.info("DOM loaded");
    }
 
    const changeBurgerBtns = document.querySelectorAll(".devoured");
  

    if (changeBurgerBtns) {
      changeBurgerBtns.forEach((button) => {
        button.addEventListener("click", (e) => {
          e.preventDefault();

          const id = e.target.getAttribute("data-id");
          const devouredBurg = e.target.getAttribute("data-devouredBurg");
  
          const newBurgerState = {
            devoured: true,
          };
  
          fetch(`/api/burgers/${id}`, {
            method: "PUT",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
  
      
            body: JSON.stringify(newBurgerState),
          }).then((response) => {

            if (response.ok) {
              console.log(`changed devour to: ${devouredBurg}`);
              location.reload("/");
            } else {
              alert("something went wrong!");
            }
          });
        });
      });
    }
  
    // CREATE
    const createBurgerBtn = document.getElementById("create-btn");
  
    if (createBurgerBtn) {
      createBurgerBtn.addEventListener("click", (e) => {
        e.preventDefault();
  
        const newBurger = {
          burger_name: document.getElementById("burgerName").value.trim(),
          devoured: false,
        };
        console.log(newBurger);
  
        fetch("/api/burgers", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
  
          body: JSON.stringify(newBurger),
        }).then(() => {
        
          document.getElementById("burgerName").value = "";
  
          console.log("Created a new burger!");
          location.reload();
        });
      });
    }
  });
// Export at the end of the `burger.js` file
module.exports = burger;