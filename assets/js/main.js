// ** Main JS ** //

// ** Global Js ** //
//*============= preloader =============*//
$(window).on("load", function () {
  $(".preloader").fadeOut(1000);
});

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
  // tooltip html
  //*============= mopile menu =============*//

  $(".menu-sidebar-icon").click(function () {
    $(".sidebar-section").addClass("show");
    $(".overlay").addClass("active");
    $("body").css({ overflow: "hidden" });
  });
  $(".overlay").click(function () {
    $(".sidebar-section").removeClass("show");
    $(".overlay").removeClass("active");
    $("body").css({ overflow: "auto" });
  });

  //*============= theme btn =============*//
  const buttons = document.querySelectorAll(".theme-btn");
  buttons.forEach((button) => {
    ["mouseenter", "mouseout"].forEach((evt) => {
      button.addEventListener(evt, (e) => {
        let parentOffset = button.getBoundingClientRect(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
        const span = button.getElementsByTagName("span");
        span[0].style.top = relY + "px";
        span[0].style.left = relX + "px";
      });
    });
  });

  /*============= notficaions =============*/
  $(".notfication-icon").click(function () {
    $(this).toggleClass("active");
    $(".notfications-content").toggleClass("show");
  });
  $("body").click(function (e) {
    if (!$(e.target).hasClass("notfication-icon")) {
      $(".notfications-content").removeClass("show");
      $(".notfication-icon").removeClass("active");
    }
  });
  $(".notfications-content").click(function (e) {
    e.stopPropagation();
  });

  /*============= validate inputs =============*/
  const inputs = document.querySelectorAll("input, select, textarea");
  inputs.forEach((input) => {
    input.addEventListener("blur", (e) => {
      if (
        !input.classList.contains("has-value") &&
        input.hasAttribute("required") &&
        input.value == ""
      ) {
        input.classList.add("error");
        parent = $(input).parent().parent();
        parent.find(".input-error").remove();
        if ($("html").attr("dir") == "rtl") {
          parent.append(
            '<span class="input-error d-block">هذا الحقل مطلوب</span>'
          );
        } else {
          parent.append(
            '<span class="input-error d-block">This field is required</span>'
          );
        }
      } else {
        input.classList.remove("error");
        parent = $(input).parent().parent();
        parent.find(".input-error").remove();
      }
    });
  });

  const inputs2 = document.querySelectorAll("input, select, textarea");
  inputs2.forEach((input) => {
    input.addEventListener("blur", (e) => {
      if (input.hasAttribute("required") && input.value != "") {
        input.classList.add("has-value");
      } else {
        input.classList.remove("has-value");
      }
    });
  });

  /*==================================  Auth::Page ===================================*/
  /*============= show hide password =============*/
  $(document).on("click", ".show-password", function () {
    var passwordId = $(this).parents(".relative").find("input").attr("id");
    if ($(this).hasClass("show-password")) {
      $("#" + passwordId).attr("type", "text");
      $(this)
        .parent()
        .find(".show-password")
        .addClass("ri-eye-off-line hide-password")
        .removeClass("ri-eye-line show-password");
    }
  });

  $(document).on("click", ".hide-password", function () {
    var passwordId = $(this).parents(".relative").find("input").attr("id");
    if ($(this).hasClass("hide-password")) {
      $("#" + passwordId).attr("type", "password");
      $(this)
        .parent()
        .find(".hide-password")
        .addClass("ri-eye-line show-password")
        .removeClass("ri-eye-off-line hide-password");
    }
  });

  /*============= auth steps =============*/
  const audio = new Audio("../../assets/audio/click.wav");

  function nextStep(step) {
    const current = document.getElementById(`step-${step}`);
    step = parseInt(step) + 1;
    const next = document.getElementById(`step-${step}`);
    next.classList.add("active");
    current.classList.remove("active");
  }

  let error = false;
  let reg = /\S+@\S+\.\S+/;
  $(".next").click(function () {
    var step = $(this).attr("data-step");
    let form = $(this).parent().parent();
    let inputs = form[0].querySelectorAll("input, select, textarea");
    inputs.forEach((input) => {
      if (
        !input.classList.contains("has-value") &&
        input.hasAttribute("required") &&
        input.value == ""
      ) {
        input.classList.add("error");
        parent = $(input).parent().parent();
        parent.find(".input-error").remove();
        if ($("html").attr("dir") == "rtl") {
          parent.append(
            '<span class="input-error d-block">هذا الحقل مطلوب</span>'
          );
        } else {
          parent.append(
            '<span class="input-error d-block">This field is required</span>'
          );
        }
        error = true;
        $(".sign-up").addClass("shake");
      } else if ($("#password").val() != $("#confirm-password").val()) {
        $("#confirm-password").addClass("error");
        parent = $("#confirm-password").parent().parent();
        parent.find(".input-error").remove();
        if ($("html").attr("dir") == "rtl") {
          parent.append(
            '<span class="input-error d-block">كلمة المرور غير متطابقة</span>'
          );
        } else {
          parent.append(
            '<span class="input-error d-block">Password not match</span>'
          );
        }
        error = true;
        $(".sign-up").addClass("shake");
        audio.play();
      } else if (!reg.test($("#email").val())) {
        $("#email").addClass("error");
        parent = $("#email").parent().parent();
        parent.find(".input-error").remove();
        if ($("html").attr("dir") == "rtl") {
          parent.append(
            '<span class="input-error d-block">الرجاء إدخال بريد إلكتروني صحيح</span>'
          );
        } else {
          parent.append(
            '<span class="input-error d-block">Please enter valid email</span>'
          );
        }
        error = true;
        audio.play();
      } else {
        error = false;
      }
    });
    if (error == false) {
      nextStep(step);
    }
    setTimeout(function () {
      $(".sign-up").removeClass("shake");
    }, 1000);
  });
  var clickDisabled = false;
  $(".resnd-pass").click(function () {
    if (clickDisabled) return;
    clickDisabled = true;
    $(".resnd-pass").attr("disabled", true);
    var count = 60;
    var counter = setInterval(timer, 1000);
    function timer() {
      count = count - 1;
      if (count <= 0) {
        clearInterval(counter);
        $(".resnd-pass").attr("disabled", false);
        return;
      }
      $(".resnd-pass").text(count + "s");
      $(".resnd-pass").css("color", "#A5A2A2");
    }
    setTimeout(function () {
      clickDisabled = false;
      $(".resnd-pass").text($(".resnd-pass").attr("data-resend-text"));
      $(".resnd-pass").css("color", $(".resnd-pass").attr("data-color"));
    }, 60000);
    $(".success-send-code").css("display", "flex");
    setTimeout(function () {
      $(".success-send-code").fadeOut();
    }, 6000);
  });
  $(".porget-pass").click(function () {
    $("#step-1").removeClass("active");
    $("#step-2").addClass("active");
  });
});

function toogleStep(step) {
  const next = document.getElementById(`step-${step}`);
  const current = document.getElementById(`step-${step - 1}`);
  if (!next) return;
  if (current) {
    var inputs = current.querySelectorAll("input, select, textarea");
    let error = false;
    if (inputs.length > 0) {
      inputs.forEach((input) => {
        if (input.hasAttribute("required") && input.value == "") {
          input.classList.add("error");
          parent = $(input).parent().parent();
          parent.find(".input-error").remove();
          // if dir is rtl
          if ($("html").attr("dir") == "rtl") {
            parent.append(
              '<span class="input-error d-block">هذا الحقل مطلوب</span>'
            );
          } else {
            parent.append(
              '<span class="input-error d-block">This field is required</span>'
            );
          }
          error = true;
        } else {
          error = false;
          current.classList.remove("active");
          next.classList.add("active");
        }
      });
    } else {
      current.classList.remove("active");
      next.classList.add("active");
    }
  } else {
    const steps = document.querySelectorAll(".step");
    steps.forEach((step) => {
      step.classList.remove("active");
    });
    next.classList.add("active");
  }
}

/*==================================  Convert To Business ::Page ===================================*/

$("#imageUpload2").change(function () {
  readURL(this, "imagePreview2");
});

if ($(".edit-convert-btn").length > 0) {
  $(".edit-convert-btn").click(function (e) {
    e.preventDefault();
    $(this).addClass("hidden");
    $(".save-convert-btn").removeClass("hidden");
    $(".convert-business-form input").removeAttr("disabled");
    $(".convert-business-form select").removeAttr("disabled");
    $(".convert-business-form textarea").removeAttr("disabled");
  });
}

if ($(".save-convert-btn").length > 0) {
  $(".save-convert-btn").click(function (e) {
    e.preventDefault();
    $(this).addClass("hidden");
    $(".edit-convert-btn").removeClass("hidden");
    let inputs = document.querySelectorAll(".convert-business-form input");
    let selects = document.querySelectorAll(".convert-business-form  select");
    setTimeout(() => {
      inputs.forEach((input) => {
        input.setAttribute("disabled", "disabled");
      });
      selects.forEach((select) => {
        select.setAttribute("disabled", "disabled");
      });
    }, 1000);
    if ($(".convert-business-form .error").length == 0) {
      $(".convert-business-form").submit();
    }
  });
}

/*==================================  Profile::Page ===================================*/
function readURL(input, id) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $("#" + id).css("background-image", "url(" + e.target.result + ")");
      $("#" + id).hide();
      $("#" + id).fadeIn(650);
    };
    reader.readAsDataURL(input.files[0]);
  }
}
$("#imageUpload").change(function () {
  readURL(this, "imagePreview");
});

// get uploded file name
$("#fileUpload").change(function () {
  var fileName = $(this).val().split("\\").pop();
  $(".file-name").html(fileName);
  $(".file-name-cont").addClass("d-flex");
});

$(".remove-file").click(function () {
  $(".file-name-cont").removeClass("d-flex");
  $("#fileUpload").val("");
});

function removeDisabled() {
  $(".profile-form input").removeAttr("disabled");
  $(".profile-form select").removeAttr("disabled");
  $(".profile-form textarea").removeAttr("disabled");
  $(".avatar-edit").removeClass("hidden");
}

if ($(".edit-profile-btn").length > 0) {
  $(".edit-profile-btn").click(function (e) {
    e.preventDefault();
    $(this).addClass("hidden");
    $(".save-profile-btn").removeClass("hidden");
    removeDisabled();
  });
}

if ($(".save-profile-btn").length > 0) {
  $(".save-profile-btn").click(function (e) {
    e.preventDefault();
    $(this).addClass("hidden");
    $(".edit-profile-btn").removeClass("hidden");
    $(".avatar-edit").addClass("hidden");
    let inputs = document.querySelectorAll(".profile-form input");
    let selects = document.querySelectorAll(".profile-form  select");
    setTimeout(() => {
      inputs.forEach((input) => {
        input.setAttribute("disabled", "disabled");
      });
      selects.forEach((select) => {
        select.setAttribute("disabled", "disabled");
      });
    }, 1000);
    if ($(".profile-form .error").length == 0) {
      $(".profile-form").submit();
    }
  });
}

/*==================================  Wallet::Page ===================================*/

// ajax request for deposit example
$("#confirm-deposit").click(function () {
  $(".indicator-progress").removeClass("d-none");
  $(".indicator-progress").fadeIn();
  $(this).addClass("disabled");
  var amount = $("#amount").val();
  var coin = $("#coin").val();
  var address = $("#address").val();
  var note = $("#note").val();
  var file = $("#fileUpload").val();
  var data = {
    amount: amount,
    coin: coin,
    address: address,
    note: note,
    file: file,
  };
  $.ajax({
    type: "POST",
    url: "deposit.php",
    data: data,
    success: function (response) {
      $(".indicator-progress").fadeOut();
      $(".indicator-progress").addClass("d-none");
      $("#success-deposit").fadeIn();
      $("#step-3").removeClass("active");
    },
  });
});

/*==================================  Ticket Details::Page ===================================*/

// ajax request for send message
// $("#send-msg-btn").click(function () {
//   var msg = $("#msg").val();
//   var data = {
//     msg: msg,
//   };
//   $.ajax({
//     type: "POST",
//     url: "send-msg.php",
//     data: data,
//     success: function (response) {
//       $("#msg").val("");
//       $(".msgs").append(response);
//     },
//   });
// });

// frontend example for send message
$("#send-msg-btn").click(function () {
  if ($("#msg").val() != "") {
    var msg = $("#msg").val();
    var html = `
     <div class="msg mb-4">
           <div class="msg-head flex flex-center gap-2 m-b15">
                 <div class="w30 h30 border-2 bg-blue-light b-r50">
                     <img src="../assets/images/blank-user.png" alt="user">
                 </div>
                 <div class="user-name fw5 text-black">
                     USER
                 </div>
           </div>
           <div class="msg-body bg-gray p-a15 b-r8">
                 <h5 class="msg-title font-15 text-black mb-0 fw5">
                     Turquoise Shirt
                 </h5>
                 <p class="font-13">
                     ${msg}
                 </p>
                 <span class="font-12 flex j-end span-gray">
                     ${new Date().toLocaleDateString("en-US", {
                       month: "short",
                       day: "numeric",
                       year: "numeric",
                     })}
                 </span>
           </div>
       </div>
     `;
    $(".msgs").append(html);
    $("#msg").val("");
    // scroll to bottom
    $(".msgs").animate(
      {
        scrollTop: $(".msgs").get(0).scrollHeight,
      },
      1000
    );
  }
});
