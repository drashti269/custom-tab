import "./styles.css";

const tabs = document.querySelectorAll(".tab-header .tab");

const handleTabClick = (currentTab) => {
  const tabContentId = currentTab.getAttribute("data-tab-body");
  tabs.forEach((tab) => {
    const otherTabContentId = tab.getAttribute("data-tab-body");
    if (otherTabContentId !== tabContentId) {
      tab.classList.remove("tab-active");
      document.getElementById(otherTabContentId).style.display = "none";
    } else {
      tab.classList.add("tab-active");
      document.getElementById(tabContentId).style.display = "flex";
    }
  });
};

tabs.forEach((e) => {
  e.addEventListener("click", function () {
    handleTabClick(this);
  });
});
