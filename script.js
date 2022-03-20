document.querySelector("#push").onclick = function () {
  if (document.querySelector(".addtask input").value.length === 0) {
    alert("Please Enter a Task");
  } else {
    document.querySelector(".viewtask").innerHTML += `
          <div class="task">
              <span id="taskname">
                  ${document.querySelector(".addtask input").value}
              </span>
              <button class="delete">
                  <i class="far fa-trash-alt"></i>
              </button>
          </div>
          
      `;
    document.querySelector(".addtask input").value = "";
    document.querySelector(".addtask input").focus();
    var currenttask = document.querySelectorAll(".delete");
    for (var i = 0; i < currenttask.length; i++) {
      currenttask[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
};
