// Menu trên điện thoại
const menuToggle = document.getElementById("menuToggle");
const topNav = document.getElementById("topNav");

menuToggle.addEventListener("click", () => {
  topNav.classList.toggle("open");
});

document.querySelectorAll(".top-nav a").forEach(link => {
  link.addEventListener("click", () => topNav.classList.remove("open"));
});

// Năm hiện tại
document.getElementById("year").textContent = new Date().getFullYear();

// Thử thách xanh
const challenges = [
  "Hôm nay hãy mang theo bình nước cá nhân.",
  "Hôm nay hãy nói không với một sản phẩm nhựa dùng một lần.",
  "Hôm nay hãy tắt điện và thiết bị khi không sử dụng.",
  "Hôm nay hãy phân loại rác trước khi bỏ đi.",
  "Hôm nay hãy dành 10 phút chăm sóc một cây xanh.",
  "Hôm nay hãy chia sẻ một thông tin đúng về biến đổi khí hậu."
];

document.getElementById("challengeBtn").addEventListener("click", () => {
  const random = challenges[Math.floor(Math.random() * challenges.length)];
  document.getElementById("challengeResult").textContent = "🌱 " + random;
});

// Quiz
document.querySelectorAll(".answers button").forEach(button => {
  button.addEventListener("click", () => {
    const result = document.getElementById("quizResult");

    if (button.dataset.answer === "correct") {
      result.textContent = "✅ Chính xác! Đây là một hành động thiết thực để giảm rác thải nhựa.";
      result.style.color = "#2e7d55";
    } else {
      result.textContent = "💡 Chưa đúng. Hãy chọn hành động giúp giảm việc sử dụng nhựa dùng một lần.";
      result.style.color = "#b06b25";
    }
  });
});

// Nút chia sẻ
function shareWebsite() {
  if (navigator.share) {
    navigator.share({
      title: "Hành Động Vì Khí Hậu Cà Mau",
      text: "Cùng hành động vì khí hậu và một tương lai xanh!",
      url: window.location.href
    }).catch(() => {});
  } else {
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert("Đã sao chép đường dẫn website!");
    });
  }
}

// Nút lên đầu trang
const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backTop.classList.add("show");
  } else {
    backTop.classList.remove("show");
  }
});

backTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
