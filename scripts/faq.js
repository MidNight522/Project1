const ARRAY_OF_ELEMENTS = [
  {
    title: "Alpine Bus Journeys?",
    content: `Forget crowded cities! Alpine Bus Journeys are your comfy seat with panoramic windows to breathtaking mountain vistas, charming villages, and air so fresh it might make you yodel (please don't, unless you're outside). It's transportation with a side of unparalleled scenery (and maybe a hairpin turn).`,
  },
  {
    title: "What about seating options?",
    content: `Generally, you'll find comfy standard seats (great views, great value, maybe great new friends) and perhaps slightly better seats with extra legroom. All offer a front-row seat to the greatest show on Earth – the Alps!`,
  },
  {
    title: "What is the Alpine Wallet?",
    content: `It's your digital stash of cash that makes booking bus tickets smoother than a perfectly paved mountain road. Load it up and watch your travel dreams become reality faster than a bus goes downhill.`,
  },
  {
    title: "Why a Bus Station Fee?",
    content: `A small contribution to ensure the station is clean, has reasonably fresh mountain air (filtered from bus fumes), and enough signs pointing you towards your bus, not away from it. Sometimes covers the cost of moving rogue bicycles.`,
  },
  {
    title: "Vitae sollicitudin vitae libero tincidunt",
    content: `Why a Bus Station Fee?
A small contribution to ensure the station is clean, has reasonably fresh mountain air (filtered from bus fumes), and enough signs pointing you towards your bus, not away from it. Sometimes covers the cost of moving rogue bicycles.`,
  },
  {
    title: "Why are buses late?",
    content: `Sometimes it's the weather (snow happens!), sometimes a sudden flock of particularly slow-moving sheep on the road, and sometimes the driver just had to stop for a photo of that view. Or maybe they got stuck behind a tractor. Welcome to "Mountain Road Time"!`,
  },
];

const generateFAQElement = (title, content) => {
  const itemWrapper = document.createElement("div");
  itemWrapper.classList.add("faq-item-wrapper");

  const itemHeading = document.createElement("div");
  itemHeading.classList.add("faq-header");
  const itemHeadingH4 = document.createElement("h4");
  itemHeadingH4.innerText = title;
  const itemHeadingIMG = document.createElement("img");
  itemHeadingIMG.setAttribute("src", "images/Nav/plus.svg");

  const itemBody = document.createElement("div");
  itemBody.classList.add("faq-body");
  const itemBodyP = document.createElement("p");
  itemBodyP.innerText = content;

  itemHeading.appendChild(itemHeadingH4);
  itemHeading.appendChild(itemHeadingIMG);

  itemBody.appendChild(itemBodyP);

  itemWrapper.appendChild(itemHeading);
  itemWrapper.appendChild(itemBody);

  return itemWrapper;
};

const faqContent = document.querySelector("#faq-content");
let currentActiveIndex = null;

function initClickListeners() {
  const faqItemWrappers = document.querySelectorAll(".faq-item-wrapper");

  Array.from(faqItemWrappers).forEach((element, index) => {
    element.addEventListener("click", function (event) {
      if (element.contains(event.target)) {
        currentActiveIndex = index;

        Array.from(faqItemWrappers).forEach((item, jindex) => {
          const imgPlus = item.childNodes[0].childNodes[1];
          const faqBodyContent = item.childNodes[1];
          imgPlus.classList.remove("item-opened");
          faqBodyContent.classList.remove("faq-body-opened");
          if (jindex === currentActiveIndex) {
            imgPlus.classList.add("item-opened");
            faqBodyContent.classList.add("faq-body-opened");
          }
        });
      }
    });
  });
}

ARRAY_OF_ELEMENTS.forEach((item, index, array) => {
  const faqElement = generateFAQElement(item.title, item.content);
  faqContent.appendChild(faqElement);

  if (index === array.length - 1) initClickListeners();
});
