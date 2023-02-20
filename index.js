let projects = [
	{
		nome: "Conversor de Moedas",
		img: "./assets/projetos-img/conversor.jpg",
		link: "http://cm.devmateus.tech",
		tags: ["html", "css", "javascript","git"],
        repo: "https://github.com/pacdt/convertMoney",
	},
	{
		nome: "ToDo List",
		img: "./assets/projetos-img/todo.jpg",
		link: "http://todo.devmateus.tech",
		tags: ["reactJs", "StyledComponents"],
        repo: "https://github.com/pacdt/todoList-React",
	},
	{
		nome: "NLW Copa do Mundo",
		img: "./assets/projetos-img/nlw.jpg",
		link: "http://copa.devmateus.tech",
		tags: ["html", "css", "javascript","git"],
        repo: "https://github.com/pacdt/nlw-copa",
	},
    {
		nome: "Movie Page",
		img: "./assets/projetos-img/movie.jpg",
		link: "http://movie.devmateus.tech",
		tags: ["html", "css", "javascript","git"],
        repo: "https://github.com/pacdt/MoviePage",
	},
    {
		nome: "Clone Calculadora W11",
		img: "./assets/projetos-img/calc.jpg",
		link: "http://w11calc.devmateus.tech",
		tags: ["html", "css", "javascript","git"],
        repo: "https://github.com/pacdt/Clone-Windows11-Calc",
	},
    {
		nome: "Tela de Login Dark",
		img: "./assets/projetos-img/logind.jpg",
		link: "https://pacdt.github.io/dark-login-responsive/",
		tags: ["html", "css", "github"],
        repo: "https://github.com/pacdt/dark-login-responsive",
	},
    {
		nome: "Blog Codelândia",
		img: "./assets/projetos-img/blog.jpg",
		link: "https://pacdt.github.io/IuriCode-Desafio1/",
		tags: ["html", "css","js", "github"],
        repo: "https://github.com/pacdt/IuriCode-Desafio1",
	},
    {
		nome: "Jordan Shoes",
		img: "./assets/projetos-img/jordan.jpg",
		link: "https://pacdt.github.io/IuriCode-Desafio2/",
		tags: ["html", "css","js", "github"],
        repo: "https://github.com/pacdt/IuriCode-Desafio2",
	},
    {
		nome: "One Page",
		img: "./assets/projetos-img/one.jpg",
		link: "https://pacdt.github.io/IuriCode-Desafio3/",
		tags: ["html", "css", "github"],
        repo: "https://github.com/pacdt/IuriCode-Desafio3",
	},
    {
		nome: "Calculadora de IMC",
		img: "./assets/projetos-img/imc.jpg",
		link: "https://imc.devmateus.tech/",
		tags: ["html", "css","js", "github"],
        repo: "https://github.com/pacdt/calculadora-imc",
	},
    {
		nome: "Tela de Login",
		img: "./assets/projetos-img/login.jpg",
		link: "https://pacdt.github.io/IuriCode-Desafio4/",
		tags: ["html", "css", "github"],
        repo: "https://github.com/pacdt/IuriCode-Desafio4",
	},
    {
		nome: "Studio Ghibili",
		img: "./assets/projetos-img/ghibili.jpg",
		link: "https://pacdt.github.io/IuriCode-Desafio5/",
		tags: ["html", "css", "github"],
        repo: "https://github.com/pacdt/IuriCode-Desafio5",
	},
    {
		nome: "Loki Landing Page",
		img: "./assets/projetos-img/loki.jpg",
		link: "https://pacdt.github.io/IuriCode-Desafio6/",
		tags: ["html", "css", "github"],
        repo: "https://github.com/pacdt/IuriCode-Desafio6",
	},
    {
		nome: "Profile Card",
		img: "./assets/projetos-img/profile.jpg",
		link: "https://pacdt.github.io/Profile-Card-Component/",
		tags: ["html", "css", "github"],
        repo: "https://github.com/pacdt/Profile-Card-Component",
	},
    {
		nome: "Order Summary",
		img: "./assets/projetos-img/order.jpg",
		link: "https://pacdt.github.io/Order-Summary/",
		tags: ["html", "css", "github"],
        repo: "https://github.com/pacdt/Order-Summary",
	},
    {
		nome: "Single Price Grid",
		img: "./assets/projetos-img/price.jpg",
		link: "https://pacdt.github.io/Single-Price-Grid/",
		tags: ["html", "css", "github"],
        repo: "https://github.com/pacdt/Single-Price-Grid",
	},
];

const projectDiv = document.getElementById("project");
projectDiv.innerHTML = "";

const cardElems = projects.map((card) => {

	return `
        <div class="projeto">
            <a href="${card.link}" target="_blank">
            <img src="${card.img}" alt="${card.nome}" />
                <h4>${card.nome}</h4>
            <div id="tags">
                ${card.tags.map((tag) => `<span>${tag}</span>`).join("")}
            </div>
            </a>
            <a href="${card.repo}" target="_blank">
            <img id="github" style="margin-top: 8px;" src="./assets/github.png"/>
            </a>
        </div>
    `;
});

projectDiv.innerHTML = cardElems.join("");